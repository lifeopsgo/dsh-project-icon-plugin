import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'

import { MAX_ICON_ENTRIES, MAX_IMAGE_DATA_URL_LENGTH } from '../src/icon-spec.js'
import {
  DocumentTooLargeError,
  IconLimitError,
  StoreCorruptError,
  readIconsDocument,
  upsertIcon,
  writeIconsDocument,
} from '../src/store.js'

async function withTempDir(run) {
  const dir = await mkdtemp(join(tmpdir(), 'project-icon-'))
  try {
    return await run(dir)
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
}

const bytesOf = (count) => 'A'.repeat(count)

test('readIconsDocument_missingFile_returnsEmptyDocument', async () => {
  await withTempDir(async (dir) => {
    assert.deepEqual(await readIconsDocument(join(dir, 'icons.json')), { version: 1, icons: {} })
  })
})

test('readIconsDocument_corruptFile_throwsStoreCorruptError', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    await writeFile(file, '{not json', 'utf8')
    await assert.rejects(readIconsDocument(file), StoreCorruptError)
  })
})

test('readIconsDocument_unknownVersion_throwsStoreCorruptError', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    await writeFile(file, '{"version":9,"icons":{}}', 'utf8')
    await assert.rejects(readIconsDocument(file), StoreCorruptError)
  })
})

test('readIconsDocument_unreadablePath_throwsOriginError', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    await mkdir(file)
    await assert.rejects(readIconsDocument(file), (error) => error.name !== 'StoreCorruptError')
  })
})

test('readIconsDocument_partiallyInvalidDocument_keepsValidEntries', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    await writeFile(file, '{"version":1,"icons":{"a-1":{"kind":"emoji","value":"🚀"},"b-2":{"kind":"bad"}}}', 'utf8')
    assert.deepEqual(await readIconsDocument(file), { version: 1, icons: { 'a-1': { kind: 'emoji', value: '🚀', placement: 'replace' } } })
  })
})

test('writeIconsDocument_createsParentDirectoryWithPrivateMode', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'nested', 'icons.json')
    await writeIconsDocument(file, { 'a-1': { kind: 'emoji', value: '🚀' } })
    assert.equal((await stat(file)).mode & 0o777, 0o600)
    assert.deepEqual(JSON.parse(await readFile(file, 'utf8')).icons, { 'a-1': { kind: 'emoji', value: '🚀', placement: 'replace' } })
  })
})

test('writeIconsDocument_leavesNoTemporaryFileBehind', async () => {
  await withTempDir(async (dir) => {
    await writeIconsDocument(join(dir, 'icons.json'), { 'a-1': { kind: 'emoji', value: '🚀' } })
    assert.deepEqual(await readdir(dir), ['icons.json'])
  })
})

test('writeIconsDocument_targetIsDirectory_leavesNoTemporaryFileBehind', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    await mkdir(file)
    await assert.rejects(writeIconsDocument(file, { 'a-1': { kind: 'emoji', value: '🚀' } }))
    assert.deepEqual(await readdir(dir), ['icons.json'])
  })
})

test('writeIconsDocument_concurrentCalls_allSucceedAndLeaveOneFile', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    const results = await Promise.all(
      Array.from({ length: 8 }, (_, index) => upsertIcon(file, `id-${index}`, { kind: 'emoji', value: '🚀' })),
    )
    assert.equal(results.length, 8)
    const stored = await readIconsDocument(file)
    assert.equal(Object.keys(stored.icons).length, 8)
    assert.deepEqual(await readdir(dir), ['icons.json'])
  })
})

test('upsertIcon_addThenDelete_roundTrips', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    const added = await upsertIcon(file, 'a-1', { kind: 'emoji', value: '🚀' })
    assert.deepEqual(added.icons, { 'a-1': { kind: 'emoji', value: '🚀', placement: 'replace' } })
    const removed = await upsertIcon(file, 'a-1', null)
    assert.deepEqual(removed.icons, {})
  })
})

test('upsertIcon_newEntryBeyondEntryLimit_throwsIconLimitError', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    const icons = {}
    for (let index = 0; index < MAX_ICON_ENTRIES; index += 1) icons[`id-${index}`] = { kind: 'emoji', value: '🚀' }
    await writeIconsDocument(file, icons)
    await assert.rejects(upsertIcon(file, 'one-more', { kind: 'emoji', value: '📦' }), IconLimitError)
    await assert.doesNotReject(upsertIcon(file, 'id-0', { kind: 'emoji', value: '📦' }))
  })
})

test('upsertIcon_documentBeyondByteLimit_throwsDocumentTooLargeError', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    const value = `data:image/webp;base64,${bytesOf(MAX_IMAGE_DATA_URL_LENGTH - 24)}`
    let thrown
    for (let index = 0; index < 60; index += 1) {
      try {
        await upsertIcon(file, `id-${index}`, { kind: 'image', value })
      } catch (error) {
        thrown = error
        break
      }
    }
    assert.ok(thrown instanceof DocumentTooLargeError)
    const stored = await readIconsDocument(file)
    assert.ok(Object.keys(stored.icons).length > 0)
  })
})

test('writeIconsDocument_corruptStore_doesNotOverwriteIt', async () => {
  await withTempDir(async (dir) => {
    const file = join(dir, 'icons.json')
    await writeFile(file, '{broken', 'utf8')
    await assert.rejects(writeIconsDocument(file, { 'a-1': { kind: 'emoji', value: '🚀' } }), StoreCorruptError)
    assert.equal(await readFile(file, 'utf8'), '{broken')
  })
})
