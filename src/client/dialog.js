import { MAX_EMOJI_CODE_UNITS, TEXT_INPUT_MAX_LENGTH, normalizeIconSpec } from '../icon-spec.js'
import { MAX_QUERY_LENGTH } from '../limits.js'
import { inspectSvg } from '../svg-guard.js'
import { groupEmoji, searchEmoji } from './emoji.js'
import { searchIconfont } from './api.js'
import { ImageInputError, readIconImageDataUrl } from './image.js'

const COLOR_PRESETS = ['#1f2328', '#d1242f', '#0969da', '#1a7f37', '#8250df', '#bf3989', '#bc4c00', '#57606a']
const ERROR_CODES = {
  'payload-too-large': 'error.payloadTooLarge',
  'icon-limit': 'error.iconLimit',
  'store-full': 'error.storeFull',
  'store-corrupt': 'error.storeCorrupt',
  unauthorized: 'error.unauthorized',
  'invalid-payload': 'error.invalidPayload',
}
const IMAGE_ERRORS = {
  'file-too-large': 'error.fileTooLarge',
  'too-many-pixels': 'error.tooManyPixels',
  'encoded-too-large': 'error.encodedTooLarge',
  'canvas-unavailable': 'error.unsupportedImage',
  'empty-image': 'error.emptyImage',
  'blank-image': 'error.blankImage',
  'extreme-aspect': 'error.extremeAspect',
  'tainted-image': 'error.taintedImage',
  'svg-too-large': 'error.svgTooLarge',
  'svg-too-complex': 'error.svgTooComplex',
  'svg-nested-data': 'error.svgNestedData',
  'svg-unsupported-embed': 'error.svgEmbed',
  timeout: 'error.timeout',
  'worker-failed': 'error.timeout',
  'unsupported-type': 'error.unsupportedImage',
}

const SEARCH_ERRORS = {
  'invalid-query': 'error.invalidQuery',
  'iconfont-unavailable': 'error.iconfontUnavailable',
  unauthorized: 'error.unauthorized',
  'request-failed': 'error.requestFailed',
  'iconfont-busy': 'iconfont.busy',
}

export function draftFromState(mode, state) {
  const placement = state.replaceIcon ? 'replace' : 'prefix'
  if (mode === 'emoji') return normalizeIconSpec({ kind: 'emoji', value: state.emoji, placement })
  if (mode === 'text') return normalizeIconSpec({ kind: 'text', value: state.text, color: state.color, placement })
  if (mode === 'iconfont' && state.image === '') return null
  return normalizeIconSpec({ kind: 'image', value: state.image, placement })
}

export function createIconDialog(React, primitives) {
  const h = React.createElement
  const { Modal, Button, Switch } = primitives

  return function IconDialog({ editor, icons, saving, error, onClose, onSave, t }) {
    const existing = icons[editor.workspaceId]
    const [mode, setMode] = React.useState(existing?.kind ?? 'emoji')
    const [emoji, setEmoji] = React.useState(existing?.kind === 'emoji' ? existing.value : '')
    const [emojiQuery, setEmojiQuery] = React.useState('')
    const [text, setText] = React.useState(existing?.kind === 'text' ? existing.value : '')
    const [color, setColor] = React.useState(existing?.kind === 'text' ? existing.color : COLOR_PRESETS[0])
    const [image, setImage] = React.useState(existing?.kind === 'image' ? existing.value : '')
    const [query, setQuery] = React.useState('')
    const [search, setSearch] = React.useState({ status: 'idle', results: [], upstreamCount: 0, error: null, pendingId: null })
    const [appliedId, setAppliedId] = React.useState(null)
    const [replaceIcon, setReplaceIcon] = React.useState(existing?.placement !== 'prefix')
    const [imageError, setImageError] = React.useState(null)
    const fileInput = React.useRef(null)
    const readStep = React.useRef(0)
    const searchStep = React.useRef(0)

    const state = { emoji, text, color, image, replaceIcon }
    const draft = draftFromState(mode, state)
    const message = imageError ?? (error === null ? null : t(ERROR_CODES[error] ?? 'error.save'))

    const submit = () => {
      if (draft === null || saving) return
      onSave(draft)
    }

    const applyFile = async (file) => {
      if (file === undefined) return
      const step = ++readStep.current
      setImageError(null)
      setSearch((current) => ({ ...current, error: null }))
      try {
        const dataUrl = await readIconImageDataUrl(file)
        if (step !== readStep.current) return
        setImage(dataUrl)
        setMode('image')
      } catch (failure) {
        if (step !== readStep.current) return
        setImageError(t(IMAGE_ERRORS[failure?.reason] ?? 'error.unsupportedImage'))
      }
    }

    const updateEmojiQuery = (value) => {
      setEmojiQuery(value)
      if (normalizeIconSpec({ kind: 'emoji', value }) !== null) setEmoji(value.trim())
    }

    const updateQuery = (value) => {
      setQuery(value)
      setSearch((current) => ({ ...current, status: 'idle', results: [], upstreamCount: 0, error: null, pendingId: null }))
      setAppliedId(null)
    }

    const runSearch = async () => {
      const keyword = query.trim()
      if (keyword === '' || search.status === 'loading') return
      const step = ++searchStep.current
      setSearch((current) => ({ ...current, status: 'loading', error: null, pendingId: null }))
      try {
        const payload = await searchIconfont(keyword)
        if (step !== searchStep.current) return
        const usable = payload.icons
          .filter((icon) => inspectSvg(icon.svg, icon.svg.length) === null)
          .map((icon) => ({ ...icon, thumb: svgDataUrl(icon.svg) }))
        setSearch({
          status: 'ready',
          results: usable,
          upstreamCount: Math.max(payload.upstreamCount, usable.length),
          error: null,
          pendingId: null,
        })
      } catch (failure) {
        if (step !== searchStep.current) return
        setSearch({
          status: 'failed',
          results: [],
          upstreamCount: 0,
          error: t(SEARCH_ERRORS[failure?.code] ?? 'error.iconfontUnavailable'),
          pendingId: null,
        })
      }
    }

    const chooseResult = async (icon) => {
      const step = ++readStep.current
      setSearch((current) => ({ ...current, error: null, pendingId: icon.id }))
      try {
        const dataUrl = await readIconImageDataUrl(new File([icon.svg], `${icon.name}.svg`, { type: 'image/svg+xml' }))
        if (step !== readStep.current) return
        setImage(dataUrl)
        setAppliedId(icon.id)
        setSearch((current) => ({ ...current, pendingId: null }))
      } catch {
        if (step !== readStep.current) return
        setSearch((current) => ({ ...current, pendingId: null, error: t('iconfont.badIcon') }))
      }
    }

    const pickFile = (event) => {
      const file = event.target.files?.[0]
      event.target.value = ''
      void applyFile(file)
    }

    const footer = h('div', { className: 'dsh-project-icon-footer' },
      h('label', { className: 'dsh-project-icon-toggle' },
        h(Switch, {
          checked: replaceIcon,
          onChange: setReplaceIcon,
          disabled: saving,
          label: t('toggle.replace'),
        }),
        h('span', null, t('toggle.replace'))),
      h('span', { className: 'dsh-project-icon-spacer' }),
      existing === undefined
        ? null
        : h(Button, { variant: 'ghost', disabled: saving, onClick: () => onSave(null) }, t('actions.reset')),
      h(Button, { variant: 'outline', disabled: saving, onClick: onClose }, t('actions.cancel')),
      h(Button, { variant: 'primary', disabled: draft === null || saving, onClick: submit },
        saving ? t('actions.saving') : t('actions.save')))

    return h(Modal, {
      open: true,
      onClose,
      title: t('dialog.title'),
      closeLabel: t('actions.cancel'),
      footer,
      className: 'dsh-project-icon-modal',
      contentClassName: 'dsh-project-icon-content',
    },
    h('div', { className: 'dsh-project-icon-body' },
      h('div', { className: 'dsh-project-icon-tabs', role: 'tablist' },
        h('button', {
          type: 'button',
          role: 'tab',
          className: 'dsh-project-icon-tab',
          'aria-selected': mode === 'emoji',
          onClick: () => {
            readStep.current += 1
            setMode('emoji')
          },
        }, t('tabs.emoji')),
        h('button', {
          type: 'button',
          role: 'tab',
          className: 'dsh-project-icon-tab',
          'aria-selected': mode === 'iconfont',
          onClick: () => {
            readStep.current += 1
            setMode('iconfont')
          },
        }, t('tabs.iconfont')),
        h('button', {
          type: 'button',
          role: 'tab',
          className: 'dsh-project-icon-tab',
          'aria-selected': mode === 'image',
          onClick: () => {
            readStep.current += 1
            setMode('image')
          },
        }, t('tabs.image')),
        h('button', {
          type: 'button',
          role: 'tab',
          className: 'dsh-project-icon-tab',
          'aria-selected': mode === 'text',
          onClick: () => {
            readStep.current += 1
            setMode('text')
          },
        }, t('tabs.text'))),
      h('div', { className: 'dsh-project-icon-pane' },
        mode === 'emoji'
          ? h(EmojiBody, { emoji, query: emojiQuery, onQueryChange: updateEmojiQuery, onPick: setEmoji, t, h })
          : mode === 'iconfont'
            ? h(IconfontBody, { query, updateQuery, search, appliedId, runSearch, chooseResult, t, h })
            : mode === 'image'
              ? h(ImageBody, { image, fileInput, pickFile, applyFile, t, h })
              : h(TextBody, { text, color, setText, setColor, setMode, t, h })),
      h('div', { className: 'dsh-project-icon-preview' },
        h('span', { className: 'dsh-project-icon-preview-cell' }, draft === null ? null : preview(draft, h)),
        h('span', { className: 'dsh-project-icon-preview-label' },
          draft === null ? t('preview.empty') : t('preview.label'))),
      message === null ? null : h('div', { className: 'dsh-project-icon-error', role: 'alert' }, message)))
  }

  function EmojiBody({ emoji, query, onQueryChange, onPick, t, h }) {
    const matches = searchEmoji(query)
    const searching = query.trim() !== ''
    const groups = searching ? [{ key: 'matches', characters: matches }] : groupEmoji(matches)
    const renderGrid = (characters) => h('div', { className: 'dsh-project-icon-grid', role: 'group' }, characters.map((choice) => h('button', {
      key: choice,
      type: 'button',
      className: 'dsh-project-icon-emoji',
      'aria-label': choice,
      'aria-pressed': emoji === choice,
      onClick: () => onPick(choice),
    }, choice)))
    return h('div', { className: 'dsh-project-icon-emoji-body' },
      h('input', {
        type: 'search',
        className: 'dsh-project-icon-input',
        value: query,
        maxLength: MAX_EMOJI_CODE_UNITS,
        placeholder: t('emoji.placeholder'),
        'aria-label': t('emoji.placeholder'),
        onChange: (event) => onQueryChange(event.target.value),
        onKeyDown: (event) => {
          if (event.key !== 'Enter' || matches.length !== 1) return
          event.preventDefault()
          onPick(matches[0])
        },
      }),
      searching && matches.length > 0
        ? h('div', { className: 'dsh-project-icon-hint' }, t('emoji.count', { n: matches.length }))
        : null,
      matches.length === 0
        ? h('div', { className: 'dsh-project-icon-hint' }, t('emoji.empty'))
        : h('div', { className: 'dsh-project-icon-emoji-scroll' },
          groups.map((group) => h('div', { key: group.key, className: 'dsh-project-icon-emoji-group' },
            h('div', { className: 'dsh-project-icon-hint' }, t(`emoji.group.${group.key}`)),
            renderGrid(group.characters)))))
  }

  function IconfontBody({ query, updateQuery, search, appliedId, runSearch, chooseResult, t, h }) {
    const loading = search.status === 'loading'
    const body = () => {
      if (search.status === 'idle') return h('div', { className: 'dsh-project-icon-hint' }, t('iconfont.hint'))
      if (loading) return h('div', { className: 'dsh-project-icon-hint' }, t('iconfont.loading'))
      if (search.results.length === 0) {
        return h('div', { className: 'dsh-project-icon-hint' },
          search.upstreamCount > 0 ? t('iconfont.filtered') : t('iconfont.empty'))
      }
      return h(React.Fragment, null,
        h('div', { className: 'dsh-project-icon-results', role: 'group' },
          search.results.map((icon) => h('button', {
            key: icon.id,
            type: 'button',
            className: 'dsh-project-icon-result',
            'aria-label': icon.name,
            'aria-pressed': appliedId === icon.id,
            'data-pending': search.pendingId === icon.id ? 'true' : undefined,
            title: icon.name,
            onClick: () => void chooseResult(icon),
          }, h('img', { src: icon.thumb, alt: '', role: 'presentation', width: 26, height: 26 })))),
        search.upstreamCount > search.results.length
          ? h('div', { className: 'dsh-project-icon-hint' }, t('iconfont.count', { shown: search.results.length, total: search.upstreamCount }))
          : null)
    }
    return h('div', { className: 'dsh-project-icon-iconfont-body' },
      h('div', { className: 'dsh-project-icon-search' },
        h('input', {
          className: 'dsh-project-icon-input',
          value: query,
          maxLength: MAX_QUERY_LENGTH,
          placeholder: t('iconfont.placeholder'),
          'aria-label': t('iconfont.placeholder'),
          onChange: (event) => updateQuery(event.target.value),
          onKeyDown: (event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              void runSearch()
            }
          },
        }),
        h(Button, { variant: 'outline', disabled: loading || query.trim() === '', onClick: () => void runSearch() },
          loading ? t('iconfont.loading') : t('iconfont.search'))),
      search.error === null ? null : h('div', { className: 'dsh-project-icon-error', role: 'alert' }, search.error),
      body())
  }

  function ImageBody({ image, fileInput, pickFile, applyFile, t, h }) {
    return h('div', { className: 'dsh-project-icon-image-body' },
      h('button', {
        type: 'button',
        className: 'dsh-project-icon-dropzone',
        onClick: () => fileInput.current?.click(),
        onDragOver: (event) => event.preventDefault(),
        onDrop: (event) => {
          event.preventDefault()
          void applyFile(event.dataTransfer?.files?.[0])
        },
      },
      image === ''
        ? h('span', { className: 'dsh-project-icon-dropzone-text' }, t('upload.pick'))
        : h('img', { className: 'dsh-project-icon-dropzone-image', src: image, alt: '', role: 'presentation' })),
      h('input', {
        ref: fileInput,
        type: 'file',
        accept: 'image/png,image/jpeg,image/webp,image/svg+xml,.svg',
        hidden: true,
        onChange: pickFile,
      }),
      h('div', { className: 'dsh-project-icon-hint' }, t('upload.hint')))
  }

  function TextBody({ text, color, setText, setColor, setMode, t, h }) {
    return h('div', { className: 'dsh-project-icon-text-body' },
      h('div', { className: 'dsh-project-icon-field' },
        h('input', {
          className: 'dsh-project-icon-input',
          value: text,
          maxLength: TEXT_INPUT_MAX_LENGTH,
          placeholder: t('text.placeholder'),
          'aria-label': t('text.placeholder'),
          onChange: (event) => {
            setMode('text')
            setText(event.target.value)
          },
        }),
        h('input', {
          className: 'dsh-project-icon-color',
          type: 'color',
          value: color,
          'aria-label': t('text.color'),
          onChange: (event) => {
            setMode('text')
            setColor(event.target.value)
          },
        })),
      h('div', { className: 'dsh-project-icon-sample', style: { color } }, text === '' ? 'AB' : text),
      h('div', { className: 'dsh-project-icon-swatches' }, COLOR_PRESETS.map((preset) => h('button', {
        key: preset,
        type: 'button',
        className: 'dsh-project-icon-swatch',
        style: { background: preset },
        'aria-label': preset,
        'aria-pressed': color === preset,
        onClick: () => {
          setMode('text')
          setColor(preset)
        },
      }))))
  }
}

function svgDataUrl(svg) {
  return `data:image/svg+xml;base64,${toBase64(svg)}`
}

function toBase64(text) {
  const bytes = new TextEncoder().encode(text)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary)
}

function preview(spec, h) {
  if (spec.kind === 'image') {
    return h('img', { className: 'dsh-project-icon-preview-image', src: spec.value, alt: '', role: 'presentation' })
  }
  return h('span', {
    className: 'dsh-project-icon-preview-glyph',
    style: spec.kind === 'text' ? { color: spec.color } : undefined,
  }, spec.value)
}

