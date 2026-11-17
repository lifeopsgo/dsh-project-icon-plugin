import { CONTROL_CHARACTER_PATTERN, MAX_QUERY_LENGTH } from './limits.js'

const HOME_URL = 'https://www.iconfont.cn/'
const SEARCH_URL = 'https://www.iconfont.cn/api/icon/search.json'
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/157.0.0.0 Safari/537.36'
const TOKEN_TTL_MS = 10 * 60 * 1000
const REQUEST_TIMEOUT_MS = 6000
const PAGE_SIZE = 18
const MAX_SVG_LENGTH = 20000
const MAX_RESPONSE_BYTES = 512 * 1024

export class IconfontError extends Error {
  constructor(code, phase, status) {
    super(code)
    this.name = 'IconfontError'
    this.code = code
    this.phase = phase
    this.status = status
  }
}

export function createIconfontSearch(deps = {}) {
  const fetchImpl = deps.fetchImpl ?? fetch
  const now = deps.now ?? (() => Date.now())
  let token = null
  let tokenAt = 0
  let pendingToken = null
  let inFlight = false

  async function requestToken() {
    const response = await fetchImpl(HOME_URL, {
      headers: { 'user-agent': USER_AGENT, accept: 'text/html' },
      redirect: 'error',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!response.ok) throw new IconfontError('iconfont-unavailable', 'token')
    const cookies = response.headers.getSetCookie()
    const value = readCookie(cookies, 'ctoken')
    if (value === null) throw new IconfontError('iconfont-unavailable', 'token')
    token = value
    tokenAt = now()
    return value
  }

  async function readToken() {
    if (token !== null && now() - tokenAt < TOKEN_TTL_MS) return token
    pendingToken ??= requestToken().finally(() => {
      pendingToken = null
    })
    return pendingToken
  }

  async function requestSearch(query) {
    const value = await readToken()
    const body = new URLSearchParams({
      q: query,
      sortType: 'updated_at',
      page: '1',
      pageSize: String(PAGE_SIZE),
      sType: '',
      fromCollection: '-1',
      fills: '',
      t: String(now()),
      ctoken: value,
    })
    const response = await fetchImpl(SEARCH_URL, {
      method: 'POST',
      headers: {
        'user-agent': USER_AGENT,
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-csrf-token': value,
        cookie: `ctoken=${value}`,
        referer: HOME_URL,
        accept: 'application/json',
      },
      body,
      redirect: 'error',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!response.ok) {
      throw new IconfontError('iconfont-unavailable', 'search', response.status)
    }
    const declared = Number(response.headers.get('content-length'))
    if (Number.isFinite(declared) && declared > MAX_RESPONSE_BYTES) {
      throw new IconfontError('iconfont-unavailable', 'search')
    }
    const text = await readBoundedText(response)
    if (text === null) throw new IconfontError('iconfont-unavailable', 'search')
    let payload
    try {
      payload = JSON.parse(text)
    } catch {
      throw new IconfontError('iconfont-unavailable', 'search')
    }
    if (payload?.code !== 200) throw new IconfontError('iconfont-unavailable', 'search')
    const raw = Array.isArray(payload?.data?.icons) ? payload.data.icons : []
    return {
      icons: raw.map(toResult).filter(result => result !== null).slice(0, PAGE_SIZE),
      upstreamCount: raw.length,
    }
  }

  return async function searchIcons(rawQuery) {
    const query = typeof rawQuery === 'string' ? rawQuery.trim() : ''
    if (query === '' || query.length > MAX_QUERY_LENGTH) throw new IconfontError('invalid-query', 'query')
    if (CONTROL_CHARACTER_PATTERN.test(query)) throw new IconfontError('invalid-query', 'query')
    if (inFlight) throw new IconfontError('iconfont-busy', 'search')
    inFlight = true
    try {
      return await requestSearch(query)
    } catch (error) {
      if (error?.phase !== 'search' || (error.status !== 401 && error.status !== 403)) throw error
      token = null
      tokenAt = 0
      return requestSearch(query)
    } finally {
      inFlight = false
    }
  }
}

function toResult(icon) {
  if (typeof icon !== 'object' || icon === null) return null
  const svg = typeof icon.show_svg === 'string' ? icon.show_svg.trim() : ''
  if (!svg.startsWith('<svg') || svg.length > MAX_SVG_LENGTH) return null
  const id = Number(icon.id)
  if (!Number.isInteger(id) || id <= 0) return null
  return {
    id,
    name: sanitizeName(icon.name, id),
    width: Number(icon.width) > 0 ? Number(icon.width) : null,
    height: Number(icon.height) > 0 ? Number(icon.height) : null,
    svg,
  }
}

async function readBoundedText(response) {
  if (typeof response.body?.getReader !== 'function') {
    const text = await response.text()
    return Buffer.byteLength(text, 'utf8') > MAX_RESPONSE_BYTES ? null : text
  }
  const reader = response.body.getReader()
  const chunks = []
  let size = 0
  try {
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > MAX_RESPONSE_BYTES) {
        await reader.cancel().catch(() => {})
        return null
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock?.()
  }
  return Buffer.concat(chunks.map(chunk => Buffer.from(chunk))).toString('utf8')
}

function sanitizeName(rawName, id) {
  if (typeof rawName !== 'string') return `icon ${id}`
  const name = rawName.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 64)
  return name === '' ? `icon ${id}` : name
}

function readCookie(cookies, name) {
  for (const cookie of cookies) {
    const [pair] = String(cookie).split(';')
    const separator = pair.indexOf('=')
    if (separator === -1) continue
    if (pair.slice(0, separator).trim() !== name) continue
    return pair.slice(separator + 1).trim()
  }
  return null
}
