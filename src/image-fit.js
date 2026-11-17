export const ICON_CANVAS_SIZE = 64

export function containBox(width, height, size = ICON_CANVAS_SIZE) {
  if (!Number.isFinite(width) || !Number.isFinite(height) || !Number.isFinite(size)) return null
  if (width <= 0 || height <= 0 || size <= 0) return null
  const scale = Math.min(size / width, size / height)
  const scaledWidth = Math.round(width * scale)
  const scaledHeight = Math.round(height * scale)
  return {
    width: scaledWidth,
    height: scaledHeight,
    x: Math.round((size - scaledWidth) / 2),
    y: Math.round((size - scaledHeight) / 2),
  }
}
