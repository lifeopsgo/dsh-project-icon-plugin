import { ICON_CANVAS_SIZE, containBox } from '../image-fit.js'
import { readImageSize } from '../image-header.js'
import { isSvgMediaType, resolveImageSource, SVG_TYPE } from '../image-source.js'
import { inspectSvg, SVG_MAX_BYTES } from '../svg-guard.js'
import { MAX_IMAGE_DATA_URL_LENGTH } from '../icon-spec.js'

const WEBP_QUALITY = 0.9
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024
const MAX_SOURCE_PIXELS = 4096 * 4096
const MIN_RENDERED_EDGE = 4

export class ImageInputError extends Error {
  constructor(reason) {
    super(reason)
    this.name = 'ImageInputError'
    this.reason = reason
  }
}

export function createIconImageReader(overrides = {}) {
  const decodeBitmap = overrides.decodeBitmap
    ?? ((file) => createImageBitmap(file, { imageOrientation: 'from-image' }))
  const ImageCtor = overrides.ImageCtor
  const createCanvas = overrides.createCanvas ?? (() => document.createElement('canvas'))
  const createObjectURL = overrides.createObjectURL ?? ((blob) => URL.createObjectURL(blob))
  const revokeObjectURL = overrides.revokeObjectURL ?? ((url) => URL.revokeObjectURL(url))

  async function readHeaderSize(file) {
    if (typeof file.slice !== 'function') return null
    const head = new Uint8Array(await file.slice(0, 64 * 1024).arrayBuffer())
    return readImageSize(head)
  }

  async function openBitmap(file) {
    const header = await readHeaderSize(file)
    if (header !== null && header.width * header.height > MAX_SOURCE_PIXELS) {
      throw new ImageInputError('too-many-pixels')
    }
    const bitmap = await decodeBitmap(file).catch(() => {
      throw new ImageInputError('unsupported-type')
    })
    return {
      vector: false,
      width: bitmap.width,
      height: bitmap.height,
      draw: (context, box) => context.drawImage(bitmap, box.x, box.y, box.width, box.height),
      close: () => bitmap.close(),
    }
  }

  async function openImageElement(file) {
    if (file.size > SVG_MAX_BYTES) throw new ImageInputError('svg-too-large')
    const text = await file.text()
    const rejection = inspectSvg(text, file.size)
    if (rejection !== null) throw new ImageInputError(rejection)
    const blob = isSvgMediaType(file.type) ? file : new Blob([file], { type: SVG_TYPE })
    const url = createObjectURL(blob)
    const Ctor = ImageCtor ?? globalThis.Image
    let image
    try {
      image = new Ctor()
      image.src = url
      await image.decode()
    } catch {
      revokeObjectURL(url)
      throw new ImageInputError('unsupported-type')
    }
    return {
      vector: true,
      width: image.naturalWidth,
      height: image.naturalHeight,
      draw: (context, box) => context.drawImage(image, box.x, box.y, box.width, box.height),
      close: () => revokeObjectURL(url),
    }
  }

  return async function readIconImage(file) {
    if (!(file instanceof Blob)) throw new ImageInputError('unsupported-type')
    if (file.size > MAX_UPLOAD_BYTES) throw new ImageInputError('file-too-large')
    const decoder = resolveImageSource(file.type, file.name)
    if (decoder === null) throw new ImageInputError('unsupported-type')

    const source = decoder === 'element' ? await openImageElement(file) : await openBitmap(file)
    try {
      if (source.width <= 0 || source.height <= 0) throw new ImageInputError('empty-image')
      if (!source.vector && source.width * source.height > MAX_SOURCE_PIXELS) throw new ImageInputError('too-many-pixels')
      const box = containBox(source.width, source.height, ICON_CANVAS_SIZE)
      if (box === null || box.width < MIN_RENDERED_EDGE || box.height < MIN_RENDERED_EDGE) {
        throw new ImageInputError('extreme-aspect')
      }

      const canvas = createCanvas()
      canvas.width = ICON_CANVAS_SIZE
      canvas.height = ICON_CANVAS_SIZE
      const context = canvas.getContext('2d')
      if (context === null) throw new ImageInputError('canvas-unavailable')
      context.clearRect(0, 0, ICON_CANVAS_SIZE, ICON_CANVAS_SIZE)
      source.draw(context, box)
      if (!hasOpaquePixel(context)) throw new ImageInputError('blank-image')

      const dataUrl = encode(canvas)
      if (dataUrl.length > MAX_IMAGE_DATA_URL_LENGTH) throw new ImageInputError('encoded-too-large')
      return dataUrl
    } finally {
      source.close()
    }
  }
}

function encode(canvas) {
  try {
    const encoded = canvas.toDataURL('image/webp', WEBP_QUALITY)
    return encoded.startsWith('data:image/webp') ? encoded : canvas.toDataURL('image/png')
  } catch (error) {
    if (error?.name === 'SecurityError') throw new ImageInputError('tainted-image')
    throw error
  }
}

function hasOpaquePixel(context) {
  let pixels
  try {
    pixels = context.getImageData(0, 0, ICON_CANVAS_SIZE, ICON_CANVAS_SIZE).data
  } catch {
    return true
  }
  for (let index = 3; index < pixels.length; index += 4) {
    if (pixels[index] !== 0) return true
  }
  return false
}

export const readIconImageDataUrl = createIconImageReader()
