import { ICON_CANVAS_SIZE, containBox } from '../image-fit.js'
import { MAX_IMAGE_DATA_URL_LENGTH } from '../icon-spec.js'

const WEBP_QUALITY = 0.9
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024
const MAX_SOURCE_PIXELS = 4096 * 4096

export class ImageInputError extends Error {
  constructor(reason) {
    super(reason)
    this.name = 'ImageInputError'
    this.reason = reason
  }
}

export async function readIconImageDataUrl(file) {
  if (!(file instanceof Blob) || !file.type.startsWith('image/')) throw new ImageInputError('unsupported-type')
  if (file.size > MAX_UPLOAD_BYTES) throw new ImageInputError('file-too-large')
  const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' }).catch(() => {
    throw new ImageInputError('unsupported-type')
  })
  try {
    if (bitmap.width * bitmap.height > MAX_SOURCE_PIXELS) throw new ImageInputError('too-many-pixels')
    const box = containBox(bitmap.width, bitmap.height, ICON_CANVAS_SIZE)
    if (box === null) throw new ImageInputError('empty-image')
    const canvas = document.createElement('canvas')
    canvas.width = ICON_CANVAS_SIZE
    canvas.height = ICON_CANVAS_SIZE
    const context = canvas.getContext('2d')
    if (context === null) throw new ImageInputError('canvas-unavailable')
    context.clearRect(0, 0, ICON_CANVAS_SIZE, ICON_CANVAS_SIZE)
    context.drawImage(bitmap, box.x, box.y, box.width, box.height)
    const encoded = canvas.toDataURL('image/webp', WEBP_QUALITY)
    const dataUrl = encoded.startsWith('data:image/webp') ? encoded : canvas.toDataURL('image/png')
    if (dataUrl.length > MAX_IMAGE_DATA_URL_LENGTH) throw new ImageInputError('encoded-too-large')
    return dataUrl
  } finally {
    bitmap.close()
  }
}
