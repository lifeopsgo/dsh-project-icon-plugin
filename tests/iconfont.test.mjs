import assert from 'node:assert/strict'
import { test } from 'node:test'

import { createIconfontSearch, IconfontError } from '../src/iconfont.js'

const SVG = '<svg viewBox="0 0 16 16"><path d="M0 0h16v16H0z"/></svg>'

function response({ status = 200, json, text, cookies = [] }) {
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: {
      getSetCookie: () => cookies,
      get: (name) => (name === 'content-length' ? null : null),
    },
    async json() {
      return json
    },
    async text() {
      return text ?? JSON.stringify(json)
    },
  }
}

function searchPayload(count = 2) {
  return {
    code: 200,
    data: {
      icons: Array.from({ length: count }, (_, index) => ({
        id: 1000 + index,
        name: `icon-${index}`,
        width: 1024,
        height: 1024,
        show_svg: SVG,
        user_id: 99,
        deleted_at: null,
      })),
    },
  }
}

test('searchIcons_anonymousFlow_fetchesTokenThenReturnsTrimmedIcons', async () => {
  const calls = []
  const fetchImpl = async (url, init = {}) => {
    calls.push({ url, method: init.method ?? 'GET', headers: init.headers ?? {}, body: init.body })
    if (String(url) === 'https://www.iconfont.cn/') {
      return response({ cookies: ['ctoken=abc123; path=/; secure'] })
    }
    return response({ json: searchPayload(2) })
  }
  const search = createIconfontSearch({ fetchImpl, now: () => 1000 })
  const { icons, upstreamCount } = await search('rocket')
  assert.equal(upstreamCount, 2)
  assert.equal(calls.length, 2)
  assert.equal(calls[1].method, 'POST')
  assert.equal(calls[1].headers['x-csrf-token'], 'abc123')
  assert.match(String(calls[1].body), /q=rocket/)
  assert.deepEqual(icons, [
    { id: 1000, name: 'icon-0', width: 1024, height: 1024, svg: SVG },
    { id: 1001, name: 'icon-1', width: 1024, height: 1024, svg: SVG },
  ])
})

test('searchIcons_tokenCached_reusesItWithinTtl', async () => {
  let homeCalls = 0
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') {
      homeCalls += 1
      return response({ cookies: ['ctoken=t1; path=/'] })
    }
    return response({ json: searchPayload(1) })
  }
  const search = createIconfontSearch({ fetchImpl, now: () => 5000 })
  await search('a')
  await search('b')
  assert.equal(homeCalls, 1)
})

test('searchIcons_blankQuery_rejectsWithoutNetwork', async () => {
  const fetchImpl = async () => {
    throw new Error('should not call')
  }
  const search = createIconfontSearch({ fetchImpl })
  await assert.rejects(search('   '), (error) => error instanceof IconfontError && error.code === 'invalid-query')
  await assert.rejects(search('x'.repeat(33)), (error) => error.code === 'invalid-query')
})

test('searchIcons_missingTokenCookie_throwsUnavailable', async () => {
  const fetchImpl = async () => response({ cookies: [] })
  const search = createIconfontSearch({ fetchImpl })
  await assert.rejects(search('rocket'), (error) => error.code === 'iconfont-unavailable')
})

test('searchIcons_upstreamErrorCode_throwsUnavailable', async () => {
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') return response({ cookies: ['ctoken=t; path=/'] })
    return response({ json: { code: 500, message: 'have_no_query' } })
  }
  const search = createIconfontSearch({ fetchImpl })
  await assert.rejects(search('rocket'), (error) => error.code === 'iconfont-unavailable')
})

test('searchIcons_nonJsonResponse_throwsUnavailable', async () => {
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') return response({ cookies: ['ctoken=t; path=/'] })
    return response({ text: '<html>blocked</html>' })
  }
  const search = createIconfontSearch({ fetchImpl })
  await assert.rejects(search('rocket'), (error) => error.code === 'iconfont-unavailable')
})

test('searchIcons_iconsWithoutSvg_areDropped', async () => {
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') return response({ cookies: ['ctoken=t; path=/'] })
    return response({
      json: {
        code: 200,
        data: {
          icons: [
            { id: 1, name: 'good', show_svg: SVG },
            { id: 2, name: 'no-svg' },
            { id: 3, name: 'script', show_svg: '<script>alert(1)</script>' },
            { id: 4, name: 'huge', show_svg: `<svg>${'a'.repeat(20001)}</svg>` },
          ],
        },
      },
    })
  }
  const search = createIconfontSearch({ fetchImpl })
  const { icons } = await search('x')
  assert.deepEqual(icons.map(icon => icon.name), ['good'])
})

test('searchIcons_manyIcons_capsResultsButReportsUpstreamCount', async () => {
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') return response({ cookies: ['ctoken=t; path=/'] })
    return response({ json: searchPayload(30) })
  }
  const search = createIconfontSearch({ fetchImpl })
  const { icons, upstreamCount } = await search('x')
  assert.equal(icons.length, 18)
  assert.equal(upstreamCount, 30)
})

test('searchIcons_tokenRejected_refreshesTokenAndRetriesOnce', async () => {
  let homeCalls = 0
  let searchCalls = 0
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') {
      homeCalls += 1
      return response({ cookies: [`ctoken=t${homeCalls}; path=/`] })
    }
    searchCalls += 1
    if (searchCalls === 1) return response({ status: 401, json: { code: 401 } })
    return response({ json: searchPayload(1) })
  }
  const search = createIconfontSearch({ fetchImpl })
  const { icons } = await search('rocket')
  assert.equal(icons.length, 1)
  assert.equal(homeCalls, 2)
  assert.equal(searchCalls, 2)
})

test('searchIcons_upstreamBusinessError_doesNotRetry', async () => {
  let searchCalls = 0
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') return response({ cookies: ['ctoken=t; path=/'] })
    searchCalls += 1
    return response({ json: { code: 500 } })
  }
  const search = createIconfontSearch({ fetchImpl })
  await assert.rejects(search('rocket'), (error) => error.code === 'iconfont-unavailable')
  assert.equal(searchCalls, 1)
})

test('searchIcons_tokenTtlExpired_refetchesToken', async () => {
  let clock = 0
  let homeCalls = 0
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') {
      homeCalls += 1
      return response({ cookies: ['ctoken=t; path=/'] })
    }
    return response({ json: searchPayload(1) })
  }
  const search = createIconfontSearch({ fetchImpl, now: () => clock })
  await search('a')
  clock += 11 * 60 * 1000
  await search('b')
  assert.equal(homeCalls, 2)
})

test('searchIcons_concurrentCalls_allowOneAndRejectTheRestAsBusy', async () => {
  let homeCalls = 0
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') {
      homeCalls += 1
      await new Promise(resolve => setTimeout(resolve, 5))
      return response({ cookies: ['ctoken=t; path=/'] })
    }
    return response({ json: searchPayload(1) })
  }
  const search = createIconfontSearch({ fetchImpl })
  const outcomes = await Promise.allSettled([search('a'), search('b'), search('c')])
  assert.equal(outcomes.filter(outcome => outcome.status === 'fulfilled').length, 1)
  assert.deepEqual(
    outcomes.filter(outcome => outcome.status === 'rejected').map(outcome => outcome.reason.code),
    ['iconfont-busy', 'iconfont-busy'],
  )
  assert.equal(homeCalls, 1)
})

test('searchIcons_controlCharactersInQuery_rejects', async () => {
  const fetchImpl = async () => {
    throw new Error('should not call')
  }
  const search = createIconfontSearch({ fetchImpl })
  await assert.rejects(search('rock\net'), (error) => error.code === 'invalid-query')
})

test('searchIcons_controlCharactersInName_areStripped', async () => {
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') return response({ cookies: ['ctoken=t; path=/'] })
    return response({ json: { code: 200, data: { icons: [{ id: 5, name: 'a\u0000b\u001fc', show_svg: SVG }] } } })
  }
  const search = createIconfontSearch({ fetchImpl })
  const { icons } = await search('x')
  assert.equal(icons[0].name, 'abc')
})

test('searchIcons_zeroId_areDropped', async () => {
  const fetchImpl = async (url) => {
    if (String(url) === 'https://www.iconfont.cn/') return response({ cookies: ['ctoken=t; path=/'] })
    return response({ json: { code: 200, data: { icons: [{ id: null, show_svg: SVG }, { id: 0, show_svg: SVG }, { id: 7, show_svg: SVG }] } } })
  }
  const search = createIconfontSearch({ fetchImpl })
  assert.deepEqual((await search('x')).icons.map(icon => icon.id), [7])
})
