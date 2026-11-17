import assert from 'node:assert/strict'
import { test } from 'node:test'

import { createIconfontHandler, createIconsHandler } from '../src/routes.js'
import { DocumentTooLargeError, IconLimitError, StoreCorruptError } from '../src/store.js'

function request(method, body, chunkSize) {
  const source = body === undefined ? Buffer.alloc(0) : Buffer.from(body, 'utf8')
  const chunks = []
  for (let offset = 0; offset < source.length; offset += chunkSize ?? source.length) {
    chunks.push(source.subarray(offset, offset + (chunkSize ?? source.length)))
  }
  const req = {
    method,
    headers: {},
    reads: 0,
    resumed: false,
    resume() {
      this.resumed = true
    },
    async *[Symbol.asyncIterator]() {
      for (const chunk of chunks) {
        req.reads += 1
        yield chunk
      }
    },
  }
  return req
}

function response() {
  return {
    statusCode: 0,
    headers: {},
    payload: '',
    setHeader(name, value) {
      this.headers[name] = value
    },
    end(payload) {
      this.payload = payload ?? ''
    },
  }
}

function handler(overrides = {}) {
  const saves = []
  const logs = []
  const instance = createIconsHandler({
    readIcons: async () => ({ version: 1, icons: { 'a-1': { kind: 'emoji', value: '🚀' } } }),
    saveIcon: async (workspaceId, spec) => {
      saves.push({ workspaceId, spec })
      return { version: 1, icons: {} }
    },
    rejectRequest: () => undefined,
    logError: (error) => logs.push(error),
    ...overrides,
  })
  return { instance, saves, logs }
}

const entry = (patch) => JSON.stringify({ workspaceId: 'a-1', icon: { kind: 'emoji', value: '🚀' }, ...patch })

test('handle_get_returnsDocument', async () => {
  const { instance } = handler()
  const res = response()
  await instance(request('GET'), res)
  assert.equal(res.statusCode, 200)
  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.deepEqual(JSON.parse(res.payload), { version: 1, icons: { 'a-1': { kind: 'emoji', value: '🚀' } } })
})

test('handle_post_savesSingleEntryAndEchoesDocument', async () => {
  const { instance, saves } = handler()
  const res = response()
  await instance(request('POST', entry()), res)
  assert.equal(res.statusCode, 200)
  assert.deepEqual(saves, [{ workspaceId: 'a-1', spec: { kind: 'emoji', value: '🚀', placement: 'replace' } }])
  assert.deepEqual(JSON.parse(res.payload), { version: 1, icons: {} })
})

test('handle_post_nullIcon_deletesEntry', async () => {
  const { instance, saves } = handler()
  const res = response()
  await instance(request('POST', JSON.stringify({ workspaceId: 'a-1', icon: null })), res)
  assert.equal(res.statusCode, 200)
  assert.deepEqual(saves, [{ workspaceId: 'a-1', spec: null }])
})

test('handle_post_withoutIconField_returnsInvalidPayload', async () => {
  const { instance, saves } = handler()
  const res = response()
  await instance(request('POST', JSON.stringify({ workspaceId: 'a-1' })), res)
  assert.equal(res.statusCode, 400)
  assert.deepEqual(JSON.parse(res.payload), { code: 'invalid-payload' })
  assert.equal(saves.length, 0)
})

test('handle_post_hostileWorkspaceId_returnsInvalidPayload', async () => {
  const { instance, saves } = handler()
  const res = response()
  await instance(request('POST', entry({ workspaceId: 'a"b' })), res)
  assert.equal(res.statusCode, 400)
  assert.equal(saves.length, 0)
})

test('handle_post_invalidIconSpec_returnsInvalidPayload', async () => {
  const { instance, saves } = handler()
  const res = response()
  await instance(request('POST', entry({ icon: { kind: 'image', value: 'javascript:alert(1)' } })), res)
  assert.equal(res.statusCode, 400)
  assert.equal(saves.length, 0)
})

test('handle_post_brokenJson_returnsInvalidPayload', async () => {
  const { instance, saves } = handler()
  const res = response()
  await instance(request('POST', '{oops'), res)
  assert.equal(res.statusCode, 400)
  assert.deepEqual(JSON.parse(res.payload), { code: 'invalid-payload' })
  assert.equal(saves.length, 0)
})

test('handle_post_oversizedBody_returns413AndDrainsRequest', async () => {
  const { instance, saves } = handler()
  const req = request('POST', entry({ icon: { kind: 'image', value: `data:image/webp;base64,${'A'.repeat(200 * 1024)}` } }), 16 * 1024)
  const res = response()
  await instance(req, res)
  assert.equal(res.statusCode, 413)
  assert.deepEqual(JSON.parse(res.payload), { code: 'payload-too-large' })
  assert.equal(req.resumed, true)
  assert.equal(saves.length, 0)
})

test('handle_get_corruptStore_returns409StoreCorrupt', async () => {
  const { instance, logs } = handler({
    readIcons: async () => {
      throw new StoreCorruptError('/tmp/icons.json')
    },
  })
  const res = response()
  await instance(request('GET'), res)
  assert.equal(res.statusCode, 409)
  assert.deepEqual(JSON.parse(res.payload), { code: 'store-corrupt' })
  assert.equal(logs.length, 1)
})

test('handle_post_entryLimit_returns409IconLimit', async () => {
  const { instance } = handler({
    saveIcon: async () => {
      throw new IconLimitError(200)
    },
  })
  const res = response()
  await instance(request('POST', entry()), res)
  assert.equal(res.statusCode, 409)
  assert.deepEqual(JSON.parse(res.payload), { code: 'icon-limit' })
})

test('handle_post_documentTooLarge_returns409StoreFull', async () => {
  const { instance } = handler({
    saveIcon: async () => {
      throw new DocumentTooLargeError(1024)
    },
  })
  const res = response()
  await instance(request('POST', entry()), res)
  assert.equal(res.statusCode, 409)
  assert.deepEqual(JSON.parse(res.payload), { code: 'store-full' })
})

test('handle_post_writeFailure_returns500WriteFailed', async () => {
  const { instance, logs } = handler({
    saveIcon: async () => {
      throw new Error('disk on fire')
    },
  })
  const res = response()
  await instance(request('POST', entry()), res)
  assert.equal(res.statusCode, 500)
  assert.deepEqual(JSON.parse(res.payload), { code: 'write-failed' })
  assert.equal(logs.length, 1)
})

test('handle_get_readFailure_returns500ReadFailed', async () => {
  const { instance } = handler({
    readIcons: async () => {
      throw new Error('disk on fire')
    },
  })
  const res = response()
  await instance(request('GET'), res)
  assert.equal(res.statusCode, 500)
  assert.deepEqual(JSON.parse(res.payload), { code: 'read-failed' })
})

test('handle_delete_returns405WithAllowHeader', async () => {
  const { instance, saves } = handler()
  const res = response()
  await instance(request('DELETE'), res)
  assert.equal(res.statusCode, 405)
  assert.equal(res.headers.allow, 'GET, POST')
  assert.deepEqual(JSON.parse(res.payload), { code: 'method-not-allowed' })
  assert.equal(saves.length, 0)
})

test('handle_rejectedRequest_doesNotReadBodyOrWrite', async () => {
  const { instance, saves } = handler({ rejectRequest: () => 401 })
  const req = request('POST', entry())
  const res = response()
  await instance(req, res)
  assert.equal(res.statusCode, 401)
  assert.deepEqual(JSON.parse(res.payload), { code: 'unauthorized' })
  assert.equal(req.reads, 0)
  assert.equal(saves.length, 0)
})


function iconfontHandler(overrides = {}) {
  const queries = []
  const logs = []
  const instance = createIconfontHandler({
    search: async (query) => {
      queries.push(query)
      return { icons: [{ id: 1, name: 'rocket', width: 1024, height: 1024, svg: '<svg/>' }], upstreamCount: 1 }
    },
    rejectRequest: () => undefined,
    logError: (error) => logs.push(error),
    ...overrides,
  })
  return { instance, queries, logs }
}

test('handleIconfont_post_returnsIcons', async () => {
  const { instance, queries } = iconfontHandler()
  const res = response()
  await instance(request('POST', JSON.stringify({ q: 'rocket' })), res)
  assert.equal(res.statusCode, 200)
  assert.deepEqual(JSON.parse(res.payload), { icons: [{ id: 1, name: 'rocket', width: 1024, height: 1024, svg: '<svg/>' }], upstreamCount: 1 })
  assert.deepEqual(queries, ['rocket'])
})

test('handleIconfont_malformedJson_returnsInvalidPayload', async () => {
  const { instance, queries } = iconfontHandler()
  const res = response()
  await instance(request('POST', '{oops'), res)
  assert.equal(res.statusCode, 400)
  assert.deepEqual(JSON.parse(res.payload), { code: 'invalid-payload' })
  assert.equal(queries.length, 0)
})

test('handleIconfont_blankQuery_returnsInvalidQuery', async () => {
  const { instance, queries } = iconfontHandler()
  const res = response()
  await instance(request('POST', JSON.stringify({ q: '   ' })), res)
  assert.equal(res.statusCode, 400)
  assert.deepEqual(JSON.parse(res.payload), { code: 'invalid-query' })
  assert.equal(queries.length, 0)
})

test('handleIconfont_upstreamUnavailable_returns502', async () => {
  const { instance, logs } = iconfontHandler({
    search: async () => {
      const error = new Error('upstream')
      error.code = 'iconfont-unavailable'
      throw error
    },
  })
  const res = response()
  await instance(request('POST', JSON.stringify({ q: 'rocket' })), res)
  assert.equal(res.statusCode, 502)
  assert.deepEqual(JSON.parse(res.payload), { code: 'iconfont-unavailable' })
  assert.equal(logs.length, 1)
})

test('handleIconfont_getMethod_returns405', async () => {
  const { instance } = iconfontHandler()
  const res = response()
  await instance(request('GET'), res)
  assert.equal(res.statusCode, 405)
  assert.equal(res.headers.allow, 'POST')
})

test('handleIconfont_rejectedRequest_doesNotSearch', async () => {
  const { instance, queries } = iconfontHandler({ rejectRequest: () => 401 })
  const res = response()
  await instance(request('POST', JSON.stringify({ q: 'rocket' })), res)
  assert.equal(res.statusCode, 401)
  assert.equal(queries.length, 0)
})
