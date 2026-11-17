import assert from 'node:assert/strict'
import { test } from 'node:test'

import { createRasterizer, RasterizeError } from '../src/client/rasterizer.js'

const PNG_FILE = () => new File([new Uint8Array([1, 2, 3, 4])], 'a.png', { type: 'image/png' })

class FakeWorker {
  static instances = []

  constructor(url) {
    this.url = url
    this.terminated = false
    FakeWorker.instances.push(this)
    const behaviour = FakeWorker.nextBehaviour
    setTimeout(() => {
      if (behaviour === 'timeout') return
      if (behaviour === 'error') {
        this.onerror?.({ message: 'boom' })
        return
      }
      this.onmessage?.({ data: behaviour })
    }, 0)
  }

  postMessage(message) {
    this.received = message
  }

  terminate() {
    this.terminated = true
  }
}

test('rasterize_successfulWorker_returnsDataUrlAndTerminates', async () => {
  FakeWorker.nextBehaviour = { ok: true, dataUrl: 'data:image/webp;base64,AAAA' }
  const rasterize = createRasterizer({ WorkerCtor: FakeWorker, timeoutMs: 500 })
  assert.equal(await rasterize(PNG_FILE()), 'data:image/webp;base64,AAAA')
  const worker = FakeWorker.instances.at(-1)
  assert.equal(worker.terminated, true)
  assert.equal(worker.received.size, 64)
  assert.equal(worker.received.type, 'image/png')
  assert.equal(worker.received.maxPixels, 4096 * 4096)
})

test('rasterize_workerBlank_throwsBlankImage', async () => {
  FakeWorker.nextBehaviour = { ok: false, reason: 'blank-image' }
  const rasterize = createRasterizer({ WorkerCtor: FakeWorker, timeoutMs: 500 })
  await assert.rejects(rasterize(PNG_FILE()), (error) => error.reason === 'blank-image')
})

test('rasterize_workerSilent_throwsTimeoutAndTerminates', async () => {
  FakeWorker.nextBehaviour = 'timeout'
  const rasterize = createRasterizer({ WorkerCtor: FakeWorker, timeoutMs: 60 })
  await assert.rejects(rasterize(PNG_FILE()), (error) => error instanceof RasterizeError && error.reason === 'timeout')
  assert.equal(FakeWorker.instances.at(-1).terminated, true)
})

test('rasterize_workerError_throwsWorkerFailed', async () => {
  FakeWorker.nextBehaviour = 'error'
  const rasterize = createRasterizer({ WorkerCtor: FakeWorker, timeoutMs: 500 })
  await assert.rejects(rasterize(PNG_FILE()), (error) => error.reason === 'worker-failed')
})

test('rasterize_workerMissing_throwsWorkerUnavailable', async () => {
  const rasterize = createRasterizer({ WorkerCtor: undefined, timeoutMs: 500 })
  await assert.rejects(rasterize(PNG_FILE()), (error) => error.reason === 'worker-unavailable')
})

test('rasterize_workerConstructorThrows_throwsWorkerUnavailable', async () => {
  const Throwing = class {
    constructor() {
      throw new Error('blocked by policy')
    }
  }
  const rasterize = createRasterizer({ WorkerCtor: Throwing, timeoutMs: 500 })
  await assert.rejects(rasterize(PNG_FILE()), (error) => error.reason === 'worker-unavailable')
})
