import assert from 'node:assert/strict'
import { test } from 'node:test'

import { MAX_IMAGE_DATA_URL_LENGTH, normalizeIconSpec } from '../src/icon-spec.js'
import { createIconImageReader } from '../src/client/image.js'

const SIZE = 64
const WEBP = 'data:image/webp;base64,AAAA'
const PNG = 'data:image/png;base64,BBBB'

function bitmapSource(width = 32, height = 32, close = () => {}) {
  return { width, height, close }
}

function fakeCanvas(encode, { blank = false, context = null } = {}) {
  const state = { drawn: 0 }
  const canvas = {
    width: 0,
    height: 0,
    getContext: () => context ?? {
      clearRect: () => {},
      drawImage: () => { state.drawn += 1 },
      getImageData: () => ({ data: new Uint8Array(SIZE * SIZE * 4).fill(blank ? 0 : 255) }),
    },
    toDataURL: (type) => encode(type),
  }
  return { canvas, state }
}

test('readIconImageDataUrl_supportedRaster_reportsWebpDataUrl', async () => {
  const read = createIconImageReader({
    decodeBitmap: async () => bitmapSource(),
    createCanvas: () => fakeCanvas(() => WEBP).canvas,
  })
  const file = new File([new Uint8Array(4)], 'a.png', { type: 'image/png' })
  assert.equal(await read(file), WEBP)
  assert.notEqual(normalizeIconSpec({ kind: 'image', value: WEBP }), null)
})

test('readIconImageDataUrl_webpEncoderUnavailable_fallsBackToPng', async () => {
  const requested = []
  const read = createIconImageReader({
    decodeBitmap: async () => bitmapSource(),
    createCanvas: () => fakeCanvas((type) => {
      requested.push(type)
      return PNG
    }).canvas,
  })
  const file = new File([new Uint8Array(4)], 'a.png', { type: 'image/png' })
  assert.equal(await read(file), PNG)
  assert.deepEqual(requested, ['image/webp', 'image/png'])
})

test('readIconImageDataUrl_bitmapDecodeRejected_throwsUnsupportedType', async () => {
  const read = createIconImageReader({
    decodeBitmap: async () => {
      throw new Error('InvalidStateError')
    },
  })
  const file = new File([new Uint8Array(4)], 'a.png', { type: 'image/png' })
  await assert.rejects(read(file), { reason: 'unsupported-type' })
})

test('readIconImageDataUrl_bitmapSourceClosedOnSuccessAndOnFailure', async () => {
  let closed = 0
  const read = createIconImageReader({
    decodeBitmap: async () => bitmapSource(32, 32, () => { closed += 1 }),
    createCanvas: () => fakeCanvas(() => WEBP).canvas,
  })
  await read(new File([new Uint8Array(4)], 'a.png', { type: 'image/png' }))
  assert.equal(closed, 1)

  let closedOnFailure = 0
  const failing = createIconImageReader({
    decodeBitmap: async () => bitmapSource(9000, 9000, () => { closedOnFailure += 1 }),
    createCanvas: () => fakeCanvas(() => WEBP).canvas,
  })
  await assert.rejects(failing(new File([new Uint8Array(4)], 'a.png', { type: 'image/png' })), { reason: 'too-many-pixels' })
  assert.equal(closedOnFailure, 1)
})

test('readIconImageDataUrl_svgDecodeRejected_revokesObjectUrl', async () => {
  const revoked = []
  const read = createIconImageReader({
    ImageCtor: class {
      set src(value) {
        this.url = value
      }

      decode() {
        return Promise.reject(new Error('EncodingError'))
      }
    },
    createObjectURL: () => 'blob:fake',
    revokeObjectURL: (url) => revoked.push(url),
  })
  await assert.rejects(read(new File(['<svg'], 'bad.svg', { type: 'image/svg+xml' })), { reason: 'unsupported-type' })
  assert.deepEqual(revoked, ['blob:fake'])
})

test('readIconImageDataUrl_svgDecoded_revokesObjectUrlAfterRead', async () => {
  const revoked = []
  const read = createIconImageReader({
    ImageCtor: class {
      constructor() {
        this.naturalWidth = 40
        this.naturalHeight = 20
      }

      set src(value) {
        this.url = value
      }

      decode() {
        return Promise.resolve()
      }
    },
    createObjectURL: () => 'blob:svg',
    revokeObjectURL: (url) => revoked.push(url),
    createCanvas: () => fakeCanvas(() => WEBP).canvas,
  })
  assert.equal(await read(new File(['<svg/>'], 'ok.svg', { type: 'image/svg+xml' })), WEBP)
  assert.deepEqual(revoked, ['blob:svg'])
})

test('readIconImageDataUrl_svgWithoutIntrinsicSize_throwsEmptyImage', async () => {
  const read = createIconImageReader({
    ImageCtor: class {
      constructor() {
        this.naturalWidth = 0
        this.naturalHeight = 0
      }

      set src(value) {
        this.url = value
      }

      decode() {
        return Promise.resolve()
      }
    },
    createObjectURL: () => 'blob:empty',
    revokeObjectURL: () => {},
    createCanvas: () => fakeCanvas(() => WEBP).canvas,
  })
  await assert.rejects(read(new File(['<svg width="0"/>'], 'zero.svg', { type: 'image/svg+xml' })), { reason: 'empty-image' })
})

test('readIconImageDataUrl_fullyTransparentResult_throwsBlankImage', async () => {
  const read = createIconImageReader({
    decodeBitmap: async () => bitmapSource(),
    createCanvas: () => fakeCanvas(() => WEBP, { blank: true }).canvas,
  })
  await assert.rejects(read(new File([new Uint8Array(4)], 'a.png', { type: 'image/png' })), { reason: 'blank-image' })
})

test('readIconImageDataUrl_oversizedUpload_throwsFileTooLarge', async () => {
  const read = createIconImageReader({})
  const file = new File([new Uint8Array(8 * 1024 * 1024 + 1)], 'big.png', { type: 'image/png' })
  await assert.rejects(read(file), { reason: 'file-too-large' })
})

test('readIconImageDataUrl_nonImageFile_throwsUnsupportedType', async () => {
  const read = createIconImageReader({})
  await assert.rejects(read(new File(['x'], 'a.txt', { type: 'text/plain' })), { reason: 'unsupported-type' })
})

test('readIconImageDataUrl_encodedOverDataUrlLimit_throwsEncodedTooLarge', async () => {
  const huge = `data:image/webp;base64,${'A'.repeat(MAX_IMAGE_DATA_URL_LENGTH)}`
  const read = createIconImageReader({
    decodeBitmap: async () => bitmapSource(),
    createCanvas: () => fakeCanvas(() => huge).canvas,
  })
  await assert.rejects(read(new File([new Uint8Array(4)], 'a.png', { type: 'image/png' })), { reason: 'encoded-too-large' })
})

test('readIconImageDataUrl_extremeAspectRatio_throwsExtremeAspect', async () => {
  const read = createIconImageReader({
    decodeBitmap: async () => bitmapSource(1200, 6),
    createCanvas: () => fakeCanvas(() => WEBP).canvas,
  })
  await assert.rejects(read(new File([new Uint8Array(4)], 'line.png', { type: 'image/png' })), { reason: 'extreme-aspect' })
})

test('readIconImageDataUrl_taintedCanvas_throwsTaintedImage', async () => {
  const read = createIconImageReader({
    decodeBitmap: async () => bitmapSource(),
    createCanvas: () => ({
      width: 0,
      height: 0,
      getContext: () => ({
        clearRect: () => {},
        drawImage: () => {},
        getImageData: () => ({ data: new Uint8Array(SIZE * SIZE * 4).fill(255) }),
      }),
      toDataURL: () => {
        const error = new Error('tainted')
        error.name = 'SecurityError'
        throw error
      },
    }),
  })
  await assert.rejects(read(new File([new Uint8Array(4)], 'a.png', { type: 'image/png' })), { reason: 'tainted-image' })
})

test('readIconImageDataUrl_svgWithoutMediaType_isRewrappedForDecoding', async () => {
  let sourceType = null
  const read = createIconImageReader({
    ImageCtor: class {
      constructor() {
        this.naturalWidth = 32
        this.naturalHeight = 32
      }

      set src(value) {
        this.url = value
      }

      decode() {
        return Promise.resolve()
      }
    },
    createObjectURL: (blob) => {
      sourceType = blob.type
      return 'blob:svg'
    },
    revokeObjectURL: () => {},
    createCanvas: () => fakeCanvas(() => WEBP).canvas,
  })
  const file = new File(['<svg xmlns="http://www.w3.org/2000/svg"/>'], 'logo.svg', { type: '' })
  assert.equal(await read(file), WEBP)
  assert.equal(sourceType, 'image/svg+xml')
})

test('readIconImageDataUrl_svgVectorIgnoresPixelBudget', async () => {
  const read = createIconImageReader({
    ImageCtor: class {
      constructor() {
        this.naturalWidth = 9000
        this.naturalHeight = 9000
      }

      set src(value) {
        this.url = value
      }

      decode() {
        return Promise.resolve()
      }
    },
    createObjectURL: () => 'blob:big-vector',
    revokeObjectURL: () => {},
    createCanvas: () => fakeCanvas(() => WEBP).canvas,
  })
  const file = new File(['<svg xmlns="http://www.w3.org/2000/svg"/>'], 'big.svg', { type: 'image/svg+xml' })
  assert.equal(await read(file), WEBP)
})

test('readIconImageDataUrl_canvasContextMissing_throwsCanvasUnavailable', async () => {
  const read = createIconImageReader({
    decodeBitmap: async () => bitmapSource(),
    createCanvas: () => ({ width: 0, height: 0, getContext: () => null, toDataURL: () => WEBP }),
  })
  await assert.rejects(read(new File([new Uint8Array(4)], 'a.png', { type: 'image/png' })), { reason: 'canvas-unavailable' })
})
