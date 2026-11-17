import { ICONFONT_PATH, ICONS_PATH } from '../endpoint.js'
import { ICON_DOCUMENT_VERSION, normalizeIconMap, normalizeIconSpec, normalizeWorkspaceId } from '../icon-spec.js'

export class IconsApiError extends Error {
  constructor(code, status) {
    super(code)
    this.name = 'IconsApiError'
    this.code = code
    this.status = status
  }
}

function iconsUrl() {
  return new URL(ICONS_PATH.slice(1), document.baseURI).toString()
}

export async function fetchIcons(fetcher = fetch) {
  const response = await fetcher(iconsUrl(), {
    headers: { accept: 'application/json' },
    credentials: 'same-origin',
    cache: 'no-store',
  })
  return readDocument(response)
}

export async function saveIcon(workspaceId, spec, fetcher = fetch) {
  const id = normalizeWorkspaceId(workspaceId)
  if (id === null) throw new IconsApiError('invalid-payload', 400)
  const icon = spec === null ? null : normalizeIconSpec(spec)
  if (spec !== null && icon === null) throw new IconsApiError('invalid-payload', 400)
  const response = await fetcher(iconsUrl(), {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ workspaceId: id, icon }),
    credentials: 'same-origin',
    cache: 'no-store',
  })
  return readDocument(response)
}

export async function searchIconfont(query, fetcher = fetch) {
  const response = await fetcher(new URL(ICONFONT_PATH.slice(1), document.baseURI).toString(), {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ q: query }),
    credentials: 'same-origin',
    cache: 'no-store',
  })
  if (!response.ok) throw new IconsApiError(await readErrorCode(response), response.status)
  const payload = await response.json()
  const icons = Array.isArray(payload?.icons) ? payload.icons.filter(isSearchIcon) : []
  const upstreamCount = Number.isInteger(payload?.upstreamCount) ? payload.upstreamCount : icons.length
  return { icons, upstreamCount }
}

function isSearchIcon(value) {
  if (typeof value !== 'object' || value === null) return false
  if (!Number.isInteger(value.id) || value.id <= 0) return false
  if (typeof value.name !== 'string') return false
  return typeof value.svg === 'string' && value.svg.startsWith('<svg') && value.svg.length <= 20000
}

async function readDocument(response) {
  if (!response.ok) {
    const code = await readErrorCode(response)
    throw new IconsApiError(code, response.status)
  }
  const payload = await response.json()
  if (payload?.version !== ICON_DOCUMENT_VERSION) throw new IconsApiError('invalid-response', response.status)
  return normalizeIconMap(payload.icons)
}

async function readErrorCode(response) {
  const payload = await response.json().catch(() => null)
  return typeof payload?.code === 'string' ? payload.code : 'request-failed'
}
