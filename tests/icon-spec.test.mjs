import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  MAX_EMOJI_CODE_UNITS,
  MAX_ICON_ENTRIES,
  MAX_IMAGE_DATA_URL_LENGTH,
  MAX_TEXT_CODE_POINTS,
  applyIconEntry,
  normalizeIconMap,
  normalizeIconSpec,
  normalizeWorkspaceId,
  parseIconsDocument,
  serializeIconsDocument,
} from '../src/icon-spec.js'

const WEBP = `data:image/webp;base64,${'A'.repeat(64)}`
const IMAGE_PREFIX = 'data:image/webp;base64,'

test('normalizeIconSpec_emojiInRange_keepsValue', () => {
  assert.deepEqual(normalizeIconSpec({ kind: 'emoji', value: '🚀' }), { kind: 'emoji', value: '🚀', placement: 'replace' })
})

test('normalizeIconSpec_emojiWithSurroundingSpace_trimsValue', () => {
  assert.deepEqual(normalizeIconSpec({ kind: 'emoji', value: ' 🚀 ' }), { kind: 'emoji', value: '🚀', placement: 'replace' })
})

test('normalizeIconSpec_emojiFamilyCluster_keepsSingleGrapheme', () => {
  const family = '👨‍👩‍👧'
  assert.deepEqual(normalizeIconSpec({ kind: 'emoji', value: family }), { kind: 'emoji', value: family, placement: 'replace' })
})

test('normalizeIconSpec_multipleEmoji_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'emoji', value: '🚀🚀' }), null)
})

test('normalizeIconSpec_plainLetters_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'emoji', value: 'hello' }), null)
})

test('normalizeIconSpec_emojiWithControlCharacter_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'emoji', value: '🚀\u0007' }), null)
  assert.equal(normalizeIconSpec({ kind: 'emoji', value: '🚀\n' }), null)
})

test('normalizeIconSpec_emojiLongerThanLimit_rejectsValue', () => {
  const tooLong = '\u{1F1E6}'.repeat(MAX_EMOJI_CODE_UNITS)
  assert.equal(normalizeIconSpec({ kind: 'emoji', value: tooLong }), null)
})

test('normalizeIconSpec_invisibleOnlyText_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'text', value: '\u200b\u200b', color: '#ffffff' }), null)
  assert.equal(normalizeIconSpec({ kind: 'text', value: '   ', color: '#ffffff' }), null)
})

test('normalizeIconSpec_loneSurrogate_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'text', value: '\ud83d', color: '#ffffff' }), null)
  assert.equal(normalizeIconSpec({ kind: 'emoji', value: '\ud83d' }), null)
})

test('normalizeIconSpec_textWithColor_lowercasesColor', () => {
  assert.deepEqual(normalizeIconSpec({ kind: 'text', value: 'AB', color: '#8A2BE2' }), {
    kind: 'text',
    value: 'AB',
    color: '#8a2be2',
    placement: 'replace',
  })
})

test('normalizeIconSpec_textWithoutColor_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'text', value: 'AB' }), null)
})

test('normalizeIconSpec_textWithShorthandColor_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'text', value: 'AB', color: '#fff' }), null)
})

test('normalizeIconSpec_textWithNamedColor_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'text', value: 'AB', color: 'red' }), null)
})

test('normalizeIconSpec_textLongerThanCodePointLimit_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'text', value: 'A'.repeat(MAX_TEXT_CODE_POINTS + 1), color: '#ffffff' }), null)
})

test('normalizeIconSpec_textWithSurrogatePairs_countsCodePointsNotCodeUnits', () => {
  assert.deepEqual(normalizeIconSpec({ kind: 'text', value: '🚀🚀', color: '#ffffff' }), {
    kind: 'text',
    value: '🚀🚀',
    color: '#ffffff',
    placement: 'replace',
  })
  assert.equal(normalizeIconSpec({ kind: 'text', value: '🚀🚀🚀', color: '#ffffff' }), null)
})

test('normalizeIconSpec_textTwoChineseCharacters_keepsValue', () => {
  assert.deepEqual(normalizeIconSpec({ kind: 'text', value: '图标', color: '#ffffff' }), {
    kind: 'text',
    value: '图标',
    color: '#ffffff',
    placement: 'replace',
  })
})

test('normalizeIconSpec_imageDataUrl_keepsValue', () => {
  assert.deepEqual(normalizeIconSpec({ kind: 'image', value: WEBP }), { kind: 'image', value: WEBP, placement: 'replace' })
})

test('normalizeIconSpec_imageAtExactLimit_keepsValue', () => {
  const value = IMAGE_PREFIX + 'A'.repeat(MAX_IMAGE_DATA_URL_LENGTH - IMAGE_PREFIX.length)
  assert.equal(value.length, MAX_IMAGE_DATA_URL_LENGTH)
  assert.deepEqual(normalizeIconSpec({ kind: 'image', value }), { kind: 'image', value, placement: 'replace' })
})

test('normalizeIconSpec_imageOneByteOverLimit_rejectsValue', () => {
  const value = IMAGE_PREFIX + 'A'.repeat(MAX_IMAGE_DATA_URL_LENGTH - IMAGE_PREFIX.length + 1)
  assert.equal(normalizeIconSpec({ kind: 'image', value }), null)
})

test('normalizeIconSpec_svgDataUrl_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'image', value: 'data:image/svg+xml;base64,PHN2Zy8+' }), null)
})

test('normalizeIconSpec_hostileScheme_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'image', value: 'javascript:alert(1)' }), null)
  assert.equal(normalizeIconSpec({ kind: 'image', value: 'https://example.com/a.png' }), null)
})

test('normalizeIconSpec_prefixPlacement_isKept', () => {
  assert.deepEqual(normalizeIconSpec({ kind: 'emoji', value: '🚀', placement: 'prefix' }), {
    kind: 'emoji',
    value: '🚀',
    placement: 'prefix',
  })
})

test('normalizeIconSpec_unknownPlacement_fallsBackToReplace', () => {
  assert.equal(normalizeIconSpec({ kind: 'emoji', value: '🚀', placement: 'after' }).placement, 'replace')
})

test('normalizeIconSpec_unknownKind_rejectsValue', () => {
  assert.equal(normalizeIconSpec({ kind: 'folder', value: 'x' }), null)
  assert.equal(normalizeIconSpec(null), null)
  assert.equal(normalizeIconSpec('emoji'), null)
  assert.equal(normalizeIconSpec([]), null)
})

test('normalizeWorkspaceId_validId_keepsValue', () => {
  assert.equal(normalizeWorkspaceId('a_b-9'), 'a_b-9')
})

test('normalizeWorkspaceId_reservedOrMalformedId_rejectsValue', () => {
  assert.equal(normalizeWorkspaceId('__proto__'), null)
  assert.equal(normalizeWorkspaceId('constructor'), null)
  assert.equal(normalizeWorkspaceId('prototype'), null)
  assert.equal(normalizeWorkspaceId('has space'), null)
  assert.equal(normalizeWorkspaceId('a'.repeat(81)), null)
  assert.equal(normalizeWorkspaceId('a'.repeat(80)), 'a'.repeat(80))
})

test('normalizeIconMap_keepsValidEntriesAndDropsInvalidOnes', () => {
  assert.deepEqual(normalizeIconMap({
    'a-1': { kind: 'emoji', value: '🚀' },
    'b-2': { kind: 'text', value: 'A', color: '#123456' },
    'c-3': { kind: 'nope' },
  }), {
    'a-1': { kind: 'emoji', value: '🚀', placement: 'replace' },
    'b-2': { kind: 'text', value: 'A', color: '#123456', placement: 'replace' },
  })
})

test('normalizeIconMap_prototypeKeys_dropsThem', () => {
  const raw = JSON.parse('{"__proto__":{"kind":"emoji","value":"🚀"},"constructor":{"kind":"emoji","value":"🚀"}}')
  assert.deepEqual(normalizeIconMap(raw), {})
  assert.equal(Object.getPrototypeOf(normalizeIconMap(raw)), Object.prototype)
})

test('normalizeIconMap_hostileWorkspaceId_dropsIt', () => {
  assert.deepEqual(Object.keys(normalizeIconMap({
    'a"]{color:red}': { kind: 'emoji', value: '🚀' },
    'with space': { kind: 'emoji', value: '🚀' },
    'ok-id_1': { kind: 'emoji', value: '🚀' },
  })), ['ok-id_1'])
})

test('normalizeIconMap_tooManyEntries_capsThem', () => {
  const raw = {}
  for (let index = 0; index < MAX_ICON_ENTRIES + 20; index += 1) raw[`id-${index}`] = { kind: 'emoji', value: '🚀' }
  assert.equal(Object.keys(normalizeIconMap(raw)).length, MAX_ICON_ENTRIES)
})

test('normalizeIconMap_invalidEntries_doNotConsumeQuota', () => {
  const raw = {}
  for (let index = 0; index < 300; index += 1) raw[`bad id ${index}`] = { kind: 'emoji', value: '🚀' }
  for (let index = 0; index < MAX_ICON_ENTRIES; index += 1) raw[`id-${index}`] = { kind: 'emoji', value: '🚀' }
  assert.equal(Object.keys(normalizeIconMap(raw)).length, MAX_ICON_ENTRIES)
})

test('normalizeIconMap_nonObject_returnsEmptyMap', () => {
  assert.deepEqual(normalizeIconMap(null), {})
  assert.deepEqual(normalizeIconMap('icons'), {})
  assert.deepEqual(normalizeIconMap([]), {})
})

test('applyIconEntry_setAndDelete_leavesInputUntouched', () => {
  const icons = { 'a-1': { kind: 'emoji', value: '🚀' } }
  const added = applyIconEntry(icons, 'b-2', { kind: 'emoji', value: '📦' })
  assert.deepEqual(Object.keys(icons), ['a-1'])
  assert.deepEqual(Object.keys(added), ['a-1', 'b-2'])
  assert.deepEqual(applyIconEntry(added, 'a-1', null), { 'b-2': { kind: 'emoji', value: '📦' } })
})

test('parseIconsDocument_validDocument_returnsNormalizedIcons', () => {
  assert.deepEqual(parseIconsDocument('{"version":1,"icons":{"a-1":{"kind":"emoji","value":"🚀"}}}'), {
    version: 1,
    icons: { 'a-1': { kind: 'emoji', value: '🚀', placement: 'replace' } },
  })
})

test('parseIconsDocument_missingIconsField_returnsEmptyMap', () => {
  assert.deepEqual(parseIconsDocument('{"version":1}'), { version: 1, icons: {} })
})

test('parseIconsDocument_brokenJsonOrUnknownVersion_returnsNull', () => {
  assert.equal(parseIconsDocument('{'), null)
  assert.equal(parseIconsDocument(''), null)
  assert.equal(parseIconsDocument('{"version":2,"icons":{}}'), null)
  assert.equal(parseIconsDocument('{"version":"1","icons":{}}'), null)
})

test('serializeIconsDocument_invalidEntry_dropsItAndPinsVersion', () => {
  const text = serializeIconsDocument({ 'a-1': { kind: 'nope' }, 'b-2': { kind: 'emoji', value: '🚀' } })
  assert.deepEqual(JSON.parse(text), { version: 1, icons: { 'b-2': { kind: 'emoji', value: '🚀', placement: 'replace' } } })
})

test('serializeIconsDocument_roundTripsThroughParse', () => {
  const icons = { 'a-1': { kind: 'text', value: 'AB', color: '#102030', placement: 'prefix' } }
  assert.deepEqual(parseIconsDocument(serializeIconsDocument(icons)), { version: 1, icons })
})
