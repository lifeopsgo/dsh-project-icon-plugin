export const ICON_DOCUMENT_VERSION = 1
export const MAX_ICON_ENTRIES = 200
export const MAX_DOCUMENT_BYTES = 2 * 1024 * 1024
export const MAX_IMAGE_DATA_URL_LENGTH = 48 * 1024
export const MAX_EMOJI_CODE_UNITS = 32
export const MAX_TEXT_CODE_POINTS = 2
export const TEXT_INPUT_MAX_LENGTH = 4

const COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/
const IMAGE_DATA_URL_PATTERN = /^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/
const WORKSPACE_ID_PATTERN = /^[A-Za-z0-9_-]{1,80}$/
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001f\u007f]/
const INVISIBLE_ONLY_PATTERN = /^[\s\u00a0\u200b-\u200f\u2060\ufeff]*$/
const RESERVED_WORKSPACE_IDS = new Set(['__proto__', 'constructor', 'prototype'])
const PICTOGRAPHIC_PATTERN = /\p{Extended_Pictographic}/u

export class IconSpecError extends Error {
  constructor(reason) {
    super(reason)
    this.name = 'IconSpecError'
    this.reason = reason
  }
}

export function normalizeIconSpec(value) {
  if (typeof value !== 'object' || value === null) return null
  const spec = normalizeKind(value)
  if (spec === null) return null
  return { ...spec, placement: value.placement === 'prefix' ? 'prefix' : 'replace' }
}

function normalizeKind(value) {
  if (value.kind === 'emoji') return normalizeEmoji(value.value)
  if (value.kind === 'text') return normalizeText(value.value, value.color)
  if (value.kind === 'image') return normalizeImage(value.value)
  return null
}

export function normalizeWorkspaceId(value) {
  if (typeof value !== 'string') return null
  if (!WORKSPACE_ID_PATTERN.test(value)) return null
  if (RESERVED_WORKSPACE_IDS.has(value)) return null
  return value
}

export function normalizeIconMap(value) {
  const icons = {}
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return icons
  let count = 0
  for (const rawId of Object.keys(value)) {
    if (count >= MAX_ICON_ENTRIES) break
    const workspaceId = normalizeWorkspaceId(rawId)
    if (workspaceId === null) continue
    const spec = normalizeIconSpec(value[rawId])
    if (spec === null) continue
    icons[workspaceId] = spec
    count += 1
  }
  return icons
}

export function parseIconsDocument(text) {
  if (typeof text !== 'string') return null
  let parsed
  try {
    parsed = JSON.parse(text)
  } catch {
    return null
  }
  if (typeof parsed !== 'object' || parsed === null) return null
  if (parsed.version !== ICON_DOCUMENT_VERSION) return null
  return { version: ICON_DOCUMENT_VERSION, icons: normalizeIconMap(parsed.icons) }
}

export function serializeIconsDocument(icons) {
  return JSON.stringify({ version: ICON_DOCUMENT_VERSION, icons: normalizeIconMap(icons) })
}

export function applyIconEntry(icons, workspaceId, spec) {
  const next = { ...icons }
  if (spec === null) delete next[workspaceId]
  else next[workspaceId] = spec
  return next
}

function normalizeEmoji(raw) {
  if (typeof raw !== 'string') return null
  if (CONTROL_CHARACTER_PATTERN.test(raw)) return null
  const value = raw.trim()
  if (value.length === 0 || value.length > MAX_EMOJI_CODE_UNITS) return null
  if (INVISIBLE_ONLY_PATTERN.test(value)) return null
  if (!value.isWellFormed()) return null
  if (!PICTOGRAPHIC_PATTERN.test(value)) return null
  if (countGraphemes(value) !== 1) return null
  return { kind: 'emoji', value }
}

function normalizeText(rawValue, rawColor) {
  if (typeof rawValue !== 'string') return null
  if (CONTROL_CHARACTER_PATTERN.test(rawValue)) return null
  const value = rawValue.trim()
  if (!value.isWellFormed()) return null
  if (INVISIBLE_ONLY_PATTERN.test(value)) return null
  const codePoints = Array.from(value).length
  if (codePoints === 0 || codePoints > MAX_TEXT_CODE_POINTS) return null
  if (typeof rawColor !== 'string' || !COLOR_PATTERN.test(rawColor)) return null
  return { kind: 'text', value, color: rawColor.toLowerCase() }
}

function normalizeImage(raw) {
  if (typeof raw !== 'string') return null
  if (raw.length > MAX_IMAGE_DATA_URL_LENGTH) return null
  if (!IMAGE_DATA_URL_PATTERN.test(raw)) return null
  return { kind: 'image', value: raw }
}

function countGraphemes(value) {
  if (typeof Intl === 'undefined' || typeof Intl.Segmenter !== 'function') return Array.from(value).length
  const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' })
  let count = 0
  for (const _segment of segmenter.segment(value)) count += 1
  return count
}
