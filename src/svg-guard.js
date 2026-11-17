export const SVG_MAX_BYTES = 512 * 1024

const MAX_ELEMENTS = 20000
const MAX_USE_ELEMENTS = 16
const MAX_IMAGE_ELEMENTS = 8

export function inspectSvg(text, byteLength) {
  if (typeof byteLength === 'number' && byteLength > SVG_MAX_BYTES) return 'svg-too-large'
  if (typeof text !== 'string') return 'unsupported-type'
  const lower = text.toLowerCase()
  if (!lower.includes('<svg')) return 'unsupported-type'
  if (lower.includes('foreignobject')) return 'svg-unsupported-embed'
  if (/\bdata:\s*image\/svg/.test(lower) || /\bdata:image\//.test(lower)) return 'svg-nested-data'
  if (countOccurrences(lower, '<use') > MAX_USE_ELEMENTS) return 'svg-too-complex'
  if (countOccurrences(lower, '<image') > MAX_IMAGE_ELEMENTS) return 'svg-too-complex'
  if (countOccurrences(lower, '<') > MAX_ELEMENTS) return 'svg-too-complex'
  return null
}

function countOccurrences(text, needle) {
  let count = 0
  let index = text.indexOf(needle)
  while (index !== -1) {
    count += 1
    if (count > MAX_ELEMENTS) return count
    index = text.indexOf(needle, index + needle.length)
  }
  return count
}
