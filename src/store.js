import { randomUUID } from 'node:crypto'
import { mkdir, open, readFile, rename, unlink } from 'node:fs/promises'
import { dirname } from 'node:path'

import {
  ICON_DOCUMENT_VERSION,
  MAX_DOCUMENT_BYTES,
  MAX_ICON_ENTRIES,
  parseIconsDocument,
  serializeIconsDocument,
} from './icon-spec.js'

export class StoreCorruptError extends Error {
  constructor(filePath) {
    super(`icon store is corrupt: ${filePath}`)
    this.name = 'StoreCorruptError'
  }
}

export class IconLimitError extends Error {
  constructor(limit) {
    super(`icon store reached its ${limit} entry limit`)
    this.name = 'IconLimitError'
  }
}

export class DocumentTooLargeError extends Error {
  constructor(bytes) {
    super(`icon document exceeds ${bytes} bytes`)
    this.name = 'DocumentTooLargeError'
  }
}

const queues = new Map()

export function emptyIconsDocument() {
  return { version: ICON_DOCUMENT_VERSION, icons: {} }
}

export async function readIconsDocument(filePath) {
  let text
  try {
    text = await readFile(filePath, 'utf8')
  } catch (error) {
    if (error?.code === 'ENOENT') return emptyIconsDocument()
    throw error
  }
  const parsed = parseIconsDocument(text)
  if (parsed === null) throw new StoreCorruptError(filePath)
  return parsed
}

export function upsertIcon(filePath, workspaceId, spec) {
  return updateIcons(filePath, (icons) => {
    const next = { ...icons }
    if (spec === null) {
      delete next[workspaceId]
      return next
    }
    if (!(workspaceId in next) && Object.keys(next).length >= MAX_ICON_ENTRIES) {
      throw new IconLimitError(MAX_ICON_ENTRIES)
    }
    next[workspaceId] = spec
    return next
  })
}

export function writeIconsDocument(filePath, icons) {
  return updateIcons(filePath, () => icons)
}

export async function updateIcons(filePath, mutate) {
  const previous = queues.get(filePath) ?? Promise.resolve()
  const run = previous.then(async () => {
    const { icons } = await readIconsDocument(filePath)
    const text = serializeIconsDocument(mutate(icons))
    if (Buffer.byteLength(text, 'utf8') > MAX_DOCUMENT_BYTES) {
      throw new DocumentTooLargeError(MAX_DOCUMENT_BYTES)
    }
    await writeTextAtomic(filePath, text)
    return { version: ICON_DOCUMENT_VERSION, icons: JSON.parse(text).icons }
  })
  const settled = run.then(() => undefined, () => undefined)
  queues.set(filePath, settled)
  try {
    return await run
  } finally {
    if (queues.get(filePath) === settled) queues.delete(filePath)
  }
}

async function writeTextAtomic(filePath, text) {
  await mkdir(dirname(filePath), { recursive: true })
  const temporaryPath = `${filePath}.${process.pid}.${randomUUID()}.tmp`
  try {
    const handle = await open(temporaryPath, 'wx', 0o600)
    try {
      await handle.writeFile(text, 'utf8')
      await handle.sync()
    } finally {
      await handle.close()
    }
    await rename(temporaryPath, filePath)
  } catch (error) {
    await unlink(temporaryPath).catch(() => {})
    throw error
  }
}
