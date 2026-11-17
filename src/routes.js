import { ICON_DOCUMENT_VERSION, normalizeIconSpec, normalizeWorkspaceId } from './icon-spec.js'
import { MAX_QUERY_LENGTH } from './limits.js'

const CONTENT_TYPE = 'application/json; charset=utf-8'
const ALLOWED_METHODS = 'GET, POST'
const MAX_BODY_BYTES = 96 * 1024
const MAX_SEARCH_BODY_BYTES = 8 * 1024

const ERROR_STATUS = {
  'invalid-payload': 400,
  'invalid-query': 400,
  'iconfont-unavailable': 502,
  'iconfont-busy': 429,
  'payload-too-large': 413,
  'icon-limit': 409,
  'store-full': 409,
  'store-corrupt': 409,
  'method-not-allowed': 405,
  'read-failed': 500,
  'write-failed': 500,
}

export function createIconsHandler({ readIcons, saveIcon, rejectRequest, logError = () => {} }) {
  return async function handle(req, res) {
    const rejection = rejectRequest(req)
    if (rejection !== undefined) {
      respond(res, rejection, { code: 'unauthorized' })
      return
    }

    if (req.method === 'GET') {
      try {
        respond(res, 200, await readIcons())
      } catch (error) {
        logError(error)
        respond(res, statusFor(error, 'read-failed'), { code: codeFor(error, 'read-failed') })
      }
      return
    }

    if (req.method === 'POST') {
      const body = await readBody(req, MAX_BODY_BYTES)
      if (body === null) {
        req.resume?.()
        respond(res, ERROR_STATUS['payload-too-large'], { code: 'payload-too-large' })
        return
      }
      const entry = parseEntry(body)
      if (entry === null) {
        respond(res, ERROR_STATUS['invalid-payload'], { code: 'invalid-payload' })
        return
      }
      try {
        respond(res, 200, await saveIcon(entry.workspaceId, entry.spec))
      } catch (error) {
        logError(error)
        respond(res, statusFor(error, 'write-failed'), { code: codeFor(error, 'write-failed') })
      }
      return
    }

    res.setHeader('allow', ALLOWED_METHODS)
    respond(res, ERROR_STATUS['method-not-allowed'], { code: 'method-not-allowed' })
  }
}

export function createIconfontHandler({ search, rejectRequest, logError = () => {} }) {
  return async function handle(req, res) {
    const rejection = rejectRequest(req)
    if (rejection !== undefined) {
      respond(res, rejection, { code: 'unauthorized' })
      return
    }
    if (req.method !== 'POST') {
      res.setHeader('allow', 'POST')
      respond(res, ERROR_STATUS['method-not-allowed'], { code: 'method-not-allowed' })
      return
    }
    const body = await readBody(req, MAX_SEARCH_BODY_BYTES)
    if (body === null) {
      req.resume?.()
      respond(res, ERROR_STATUS['payload-too-large'], { code: 'payload-too-large' })
      return
    }
    const parsed = parseSearchRequest(body)
    if (parsed.reason !== null) {
      respond(res, ERROR_STATUS[parsed.reason], { code: parsed.reason })
      return
    }
    const request = parsed.request
    try {
      const result = await search(request.query)
      respond(res, 200, { icons: result.icons, upstreamCount: result.upstreamCount })
    } catch (error) {
      logError(error)
      const code = error?.code === 'invalid-query' || error?.code === 'iconfont-busy' ? error.code : 'iconfont-unavailable'
      respond(res, ERROR_STATUS[code], { code })
    }
  }
}

function parseSearchRequest(body) {
  let parsed
  try {
    parsed = JSON.parse(body)
  } catch {
    return { reason: 'invalid-payload', request: null }
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    return { reason: 'invalid-payload', request: null }
  }
  if (typeof parsed.q !== 'string') return { reason: 'invalid-payload', request: null }
  const query = parsed.q.trim()
  if (query === '' || query.length > MAX_QUERY_LENGTH) return { reason: 'invalid-query', request: null }
  return { reason: null, request: { query } }
}

export { ICON_DOCUMENT_VERSION }

function parseEntry(body) {
  let parsed
  try {
    parsed = JSON.parse(body)
  } catch {
    return null
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return null
  if (!('icon' in parsed)) return null
  const workspaceId = normalizeWorkspaceId(parsed.workspaceId)
  if (workspaceId === null) return null
  const spec = parsed.icon === null ? null : normalizeIconSpec(parsed.icon)
  if (parsed.icon !== null && spec === null) return null
  return { workspaceId, spec }
}

function codeFor(error, fallback) {
  if (error?.name === 'StoreCorruptError') return 'store-corrupt'
  if (error?.name === 'IconLimitError') return 'icon-limit'
  if (error?.name === 'DocumentTooLargeError') return 'store-full'
  return fallback
}

function statusFor(error, fallback) {
  return ERROR_STATUS[codeFor(error, fallback)] ?? 500
}

async function readBody(req, limit) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > limit) return null
    chunks.push(chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

function respond(res, status, body) {
  res.statusCode = status
  res.setHeader('content-type', CONTENT_TYPE)
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
