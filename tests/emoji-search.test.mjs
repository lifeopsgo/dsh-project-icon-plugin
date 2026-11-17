import assert from 'node:assert/strict'
import { test } from 'node:test'

import { normalizeIconSpec } from '../src/icon-spec.js'
import { EMOJI_CATALOG, groupEmoji, searchEmoji } from '../src/client/emoji.js'

test('searchEmoji_emptyQuery_returnsCatalogInOrder', () => {
  assert.deepEqual(searchEmoji(''), EMOJI_CATALOG.map(entry => entry.char))
  assert.deepEqual(searchEmoji('   '), EMOJI_CATALOG.map(entry => entry.char))
})

test('searchEmoji_englishKeyword_matchesRocket', () => {
  assert.ok(searchEmoji('rocket').includes('🚀'))
})

test('searchEmoji_chineseKeyword_matchesRocket', () => {
  assert.ok(searchEmoji('火箭').includes('🚀'))
})

test('searchEmoji_keywordIsCaseInsensitive', () => {
  assert.deepEqual(searchEmoji('DOCKER'), searchEmoji('docker'))
  assert.ok(searchEmoji('DOCKER').includes('🐳'))
})

test('searchEmoji_partialKeyword_matchesSubstring', () => {
  assert.ok(searchEmoji('doc').includes('📚'))
})

test('searchEmoji_exactEmoji_ranksItFirst', () => {
  assert.equal(searchEmoji('🚀')[0], '🚀')
})

test('searchEmoji_zwjEmoji_matchesItself', () => {
  assert.deepEqual(searchEmoji('🧑‍💻'), ['🧑‍💻'])
})

test('searchEmoji_multipleWords_requireAllToMatch', () => {
  assert.deepEqual(searchEmoji('火 箭'), ['🚀'])
  assert.deepEqual(searchEmoji('rocket fire'), [])
})

test('searchEmoji_pastedEmojiSequence_returnsNothing', () => {
  assert.deepEqual(searchEmoji('🚀🔥'), [])
})

test('searchEmoji_withSurroundingSpaces_trimsThem', () => {
  assert.deepEqual(searchEmoji('  rocket  '), ['🚀'])
})

test('searchEmoji_emotionKeywords_matchFaces', () => {
  assert.ok(searchEmoji('笑').includes('😀'))
  assert.ok(searchEmoji('笑').includes('😂'))
  assert.ok(searchEmoji('开心').includes('😊'))
  assert.ok(searchEmoji('哭').includes('😭'))
  assert.ok(searchEmoji('思考').includes('🤔'))
  assert.ok(searchEmoji('太阳').includes('☀️'))
})

test('searchEmoji_chineseSynonyms_matchExpectedIcons', () => {
  assert.equal(searchEmoji('部署')[0], '🚀')
  assert.equal(searchEmoji('日志')[0], '📋')
  assert.equal(searchEmoji('前端')[0], '💻')
  assert.equal(searchEmoji('密码')[0], '🔐')
})

test('searchEmoji_unknownKeyword_returnsNothing', () => {
  assert.deepEqual(searchEmoji('zzzz-not-an-emoji'), [])
})

test('EMOJI_CATALOG_variationSelectorVariants_hasNoDuplicates', () => {
  const seen = new Set()
  for (const entry of EMOJI_CATALOG) {
    const key = entry.char.replace(/\uFE0F/g, '')
    assert.equal(seen.has(key), false, `duplicate ${entry.char}`)
    seen.add(key)
  }
})

test('EMOJI_CATALOG_afterSplittingKeywords_hasNoEmptyWord', () => {
  for (const entry of EMOJI_CATALOG) {
    assert.ok(entry.keywords.length > 0, entry.char)
    assert.ok(entry.keywords.every(word => word.length > 0))
  }
})

test('EMOJI_CATALOG_everyEntryIsSavable', () => {
  for (const entry of EMOJI_CATALOG) {
    assert.notEqual(normalizeIconSpec({ kind: 'emoji', value: entry.char }), null, entry.char)
  }
})

test('groupEmoji_emptyQuery_ordersPopularFirst', () => {
  const groups = groupEmoji(searchEmoji(''))
  assert.equal(groups[0].key, 'popular')
  assert.deepEqual(groups.map(group => group.key).slice(0, 3), ['popular', 'smileys', 'nature'])
})

test('groupEmoji_popularGroupIsCappedAndRanked', () => {
  const popular = groupEmoji(searchEmoji('')).find(group => group.key === 'popular')
  assert.ok(popular.characters.length <= 24)
  assert.equal(popular.characters[0], '😂')
})

test('groupEmoji_everyCatalogEntry_appearsInExactlyOneCategoryGroup', () => {
  const groups = groupEmoji(searchEmoji('')).filter(group => group.key !== 'popular')
  const seen = groups.flatMap(group => group.characters)
  assert.equal(new Set(seen).size, seen.length)
  assert.equal(seen.length, EMOJI_CATALOG.length)
})

test('groupEmoji_smileysGroup_holdsFaces', () => {
  const smileys = groupEmoji(searchEmoji('')).find(group => group.key === 'smileys')
  assert.ok(smileys.characters.includes('😂'))
  assert.ok(!smileys.characters.includes('🚀'))
})

test('searchEmoji_ties_areBrokenByPopularity', () => {
  const matches = searchEmoji('笑')
  assert.equal(matches[0], '😂')
})
