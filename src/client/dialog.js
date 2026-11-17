import { TEXT_INPUT_MAX_LENGTH, normalizeIconSpec } from '../icon-spec.js'
import { EMOJI_CHOICES } from './emoji.js'
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
  'unsupported-type': 'error.unsupportedImage',
}

export function draftFromState(mode, state) {
  const placement = state.replaceIcon ? 'replace' : 'prefix'
  if (mode === 'emoji') return normalizeIconSpec({ kind: 'emoji', value: state.emoji, placement })
  if (mode === 'text') return normalizeIconSpec({ kind: 'text', value: state.text, color: state.color, placement })
  return normalizeIconSpec({ kind: 'image', value: state.image, placement })
}

export function createIconDialog(React, primitives) {
  const h = React.createElement
  const { Modal, Button, Switch } = primitives

  return function IconDialog({ editor, icons, saving, error, onClose, onSave, t }) {
    const existing = icons[editor.workspaceId]
    const [mode, setMode] = React.useState(existing?.kind ?? 'emoji')
    const [emoji, setEmoji] = React.useState(existing?.kind === 'emoji' ? existing.value : '')
    const [text, setText] = React.useState(existing?.kind === 'text' ? existing.value : '')
    const [color, setColor] = React.useState(existing?.kind === 'text' ? existing.color : COLOR_PRESETS[0])
    const [image, setImage] = React.useState(existing?.kind === 'image' ? existing.value : '')
    const [replaceIcon, setReplaceIcon] = React.useState(existing?.placement !== 'prefix')
    const [imageError, setImageError] = React.useState(null)
    const fileInput = React.useRef(null)
    const readStep = React.useRef(0)

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
          onClick: () => setMode('emoji'),
        }, t('tabs.emoji')),
        h('button', {
          type: 'button',
          role: 'tab',
          className: 'dsh-project-icon-tab',
          'aria-selected': mode === 'image',
          onClick: () => setMode('image'),
        }, t('tabs.image')),
        h('button', {
          type: 'button',
          role: 'tab',
          className: 'dsh-project-icon-tab',
          'aria-selected': mode === 'text',
          onClick: () => setMode('text'),
        }, t('tabs.text'))),
      h('div', { className: 'dsh-project-icon-pane' },
        mode === 'emoji'
          ? h(EmojiBody, { emoji, setEmoji, setMode, t, h })
          : mode === 'image'
            ? h(ImageBody, { image, fileInput, pickFile, applyFile, t, h })
            : h(TextBody, { text, color, setText, setColor, setMode, t, h })),
      h('div', { className: 'dsh-project-icon-preview' },
        h('span', { className: 'dsh-project-icon-preview-cell' }, draft === null ? null : preview(draft, h)),
        h('span', { className: 'dsh-project-icon-preview-label' },
          draft === null ? t('preview.empty') : t('preview.label'))),
      message === null ? null : h('div', { className: 'dsh-project-icon-error', role: 'alert' }, message)))
  }

  function EmojiBody({ emoji, setEmoji, setMode, t, h }) {
    return h('div', { className: 'dsh-project-icon-emoji-body' },
      h('div', { className: 'dsh-project-icon-grid', role: 'group' }, EMOJI_CHOICES.map((choice) => h('button', {
        key: choice,
        type: 'button',
        className: 'dsh-project-icon-emoji',
        'aria-label': choice,
        'aria-pressed': emoji === choice,
        onClick: () => {
          setMode('emoji')
          setEmoji(choice)
        },
      }, choice))),
      h('input', {
        className: 'dsh-project-icon-input',
        value: emoji,
        maxLength: 32,
        placeholder: t('emoji.placeholder'),
        'aria-label': t('emoji.placeholder'),
        onChange: (event) => {
          setMode('emoji')
          setEmoji(event.target.value)
        },
      }))
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

function preview(spec, h) {
  if (spec.kind === 'image') {
    return h('img', { className: 'dsh-project-icon-preview-image', src: spec.value, alt: '', role: 'presentation' })
  }
  return h('span', {
    className: 'dsh-project-icon-preview-glyph',
    style: spec.kind === 'text' ? { color: spec.color } : undefined,
  }, spec.value)
}

