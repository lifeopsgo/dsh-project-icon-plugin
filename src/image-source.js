export const SVG_TYPE = 'image/svg+xml'

const SVG_MEDIA_TYPE_PATTERN = /^image\/svg\+xml$/
const SVG_NAME_PATTERN = /\.svg$/i
const IMAGE_MEDIA_TYPE_PATTERN = /^image\//

export function resolveImageSource(type, name = '') {
  if (typeof type !== 'string') return null
  const mediaType = type.split(';')[0].trim().toLowerCase()
  if (SVG_MEDIA_TYPE_PATTERN.test(mediaType)) return 'element'
  if (mediaType === '' && typeof name === 'string' && SVG_NAME_PATTERN.test(name)) return 'element'
  if (IMAGE_MEDIA_TYPE_PATTERN.test(mediaType)) return 'bitmap'
  return null
}

export function isSvgMediaType(type) {
  return typeof type === 'string' && SVG_MEDIA_TYPE_PATTERN.test(type.split(';')[0].trim().toLowerCase())
}
