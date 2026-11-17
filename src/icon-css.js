import { normalizeIconMap } from './icon-spec.js'

const ESCAPE_BY_CODE = {
  0x09: '\\9 ',
  0x0a: '\\a ',
  0x0b: '\\b ',
  0x0c: '\\c ',
  0x0d: '\\d ',
}

export function escapeCssString(value) {
  let escaped = ''
  for (const character of String(value)) {
    const code = character.codePointAt(0)
    if (character === '\\') escaped += '\\\\'
    else if (character === '"') escaped += '\\"'
    else if (code <= 0x1f || code === 0x7f) escaped += ESCAPE_BY_CODE[code] ?? `\\${code.toString(16)} `
    else escaped += character
  }
  return escaped
}

const BREATHE_ANIMATION = 'animation:dsh-project-icon-breathe 1.6s ease-in-out infinite;transform-origin:center'

export function buildIconAnimationStyles() {
  return [
    '@keyframes dsh-project-icon-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.22)}}',
    '@media (prefers-reduced-motion: reduce){[data-row-key^="workspace:"]:hover>span:first-child::before{animation:none!important}}',
  ].join('\n')
}

export function workspaceIconSelector(workspaceId) {
  return `[data-row-key="workspace:${escapeCssString(workspaceId)}"]`
}

export function buildIconStyles(icons) {
  const normalized = normalizeIconMap(icons)
  const rules = []
  for (const workspaceId of Object.keys(normalized).sort()) {
    const row = workspaceIconSelector(workspaceId)
    const spec = normalized[workspaceId]
    if (spec.placement === 'prefix') {
      const prefix = prefixPaintFor(spec)
      if (prefix === null) continue
      rules.push(`${row}>span:nth-child(3)>span:first-child::before{${prefix}}`)
      rules.push(`@media (hover:hover){${row}:hover>span:nth-child(3)>span:first-child::before{${BREATHE_ANIMATION}}}`)
      continue
    }
    const paint = paintFor(spec)
    if (paint === null) continue
    rules.push(`${row}>span:first-child>svg{display:none}`)
    rules.push(`${row}>span:first-child::before{${paint}}`)
    rules.push(`@media (hover:hover){${row}:hover>span:first-child{display:inline-flex!important}${row}:hover>span:first-child+span{display:none!important}${row}:hover>span:first-child::before{${BREATHE_ANIMATION}}}`)
  }
  return rules.join('\n')
}

function prefixPaintFor(spec) {
  if (spec.kind === 'image') {
    return `content:"";display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:4px;background-image:url("${escapeCssString(spec.value)}");background-size:contain;background-repeat:no-repeat;background-position:center`
  }
  if (spec.kind === 'text') {
    return `content:"${escapeCssString(spec.value)}";color:${spec.color};display:inline-block;vertical-align:middle;margin-inline-end:4px;font-size:11px;font-weight:600;line-height:1`
  }
  if (spec.kind === 'emoji') {
    return `content:"${escapeCssString(spec.value)}";display:inline-block;vertical-align:middle;margin-inline-end:4px;font-size:13px;line-height:1`
  }
  return null
}

function paintFor(spec) {
  if (spec.kind === 'image') {
    return `content:"";width:16px;height:16px;background-image:url("${escapeCssString(spec.value)}");background-size:contain;background-repeat:no-repeat;background-position:center`
  }
  if (spec.kind === 'text') {
    return `content:"${escapeCssString(spec.value)}";color:${spec.color};font-size:11px;font-weight:600;line-height:1;max-width:16px;overflow:hidden`
  }
  if (spec.kind === 'emoji') {
    return `content:"${escapeCssString(spec.value)}";font-size:14px;line-height:1;max-width:16px;overflow:hidden`
  }
  return null
}
