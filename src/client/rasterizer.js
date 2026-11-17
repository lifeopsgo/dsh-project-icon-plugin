export const WORKER_SOURCE = `
self.onmessage = async (event) => {
  const { bytes, type, size, maxPixels } = event.data
  try {
    const bitmap = await createImageBitmap(new Blob([bytes], { type }))
    if (bitmap.width * bitmap.height > maxPixels) {
      bitmap.close()
      self.postMessage({ ok: false, reason: 'too-many-pixels' })
      return
    }
    const scale = Math.min(size / bitmap.width, size / bitmap.height)
    const width = Math.max(1, Math.round(bitmap.width * scale))
    const height = Math.max(1, Math.round(bitmap.height * scale))
    const canvas = new OffscreenCanvas(size, size)
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, size, size)
    context.drawImage(bitmap, Math.round((size - width) / 2), Math.round((size - height) / 2), width, height)
    bitmap.close()
    const pixels = context.getImageData(0, 0, size, size).data
    let opaque = false
    for (let index = 3; index < pixels.length; index += 4) {
      if (pixels[index] !== 0) {
        opaque = true
        break
      }
    }
    if (!opaque) {
      self.postMessage({ ok: false, reason: 'blank-image' })
      return
    }
    const blob = await canvas.convertToBlob({ type: 'image/webp', quality: 0.9 })
    const dataUrl = new FileReaderSync().readAsDataURL(blob)
    self.postMessage({ ok: true, dataUrl })
  } catch (error) {
    self.postMessage({ ok: false, reason: 'unsupported-type', detail: String(error) })
  }
}
`

export const DEFAULT_TIMEOUT_MS = 4000

export class RasterizeError extends Error {
  constructor(reason) {
    super(reason)
    this.name = 'RasterizeError'
    this.reason = reason
  }
}

export function createRasterizer(options = {}) {
  const WorkerCtor = options.WorkerCtor ?? (typeof Worker === 'function' ? Worker : undefined)
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS
  const canvasSize = options.canvasSize ?? 64
  const maxPixels = options.maxPixels ?? 4096 * 4096

  return async function rasterize(file) {
    if (WorkerCtor === undefined) throw new RasterizeError('worker-unavailable')
    const url = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: 'text/javascript' }))
    let worker
    try {
      worker = new WorkerCtor(url)
    } catch {
      URL.revokeObjectURL(url)
      throw new RasterizeError('worker-unavailable')
    }

    const bytes = new Uint8Array(await file.arrayBuffer())
    try {
      const payload = await withTimeout(
        new Promise((resolve, reject) => {
          worker.onmessage = (event) => resolve(event.data)
          worker.onerror = () => reject(new RasterizeError('worker-failed'))
          worker.postMessage({ bytes, type: file.type, size: canvasSize, maxPixels })
        }),
        timeoutMs,
      )
      if (payload?.ok !== true) throw new RasterizeError(payload?.reason ?? 'unsupported-type')
      return payload.dataUrl
    } finally {
      worker.terminate()
      URL.revokeObjectURL(url)
    }
  }
}

function withTimeout(promise, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new RasterizeError('timeout')), timeoutMs)
    promise.then(
      (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      (error) => {
        clearTimeout(timer)
        reject(error)
      },
    )
  })
}
