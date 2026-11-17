import assert from 'node:assert/strict'
import { test } from 'node:test'

import { inspectSvg, SVG_MAX_BYTES } from '../src/svg-guard.js'

const wrap = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">${inner}</svg>`

test('inspectSvg_plainIcon_acceptsIt', () => {
  assert.equal(inspectSvg(wrap('<rect width="64" height="64"/>'), 128), null)
})

test('inspectSvg_foreignObject_rejectsAsUnsupportedEmbed', () => {
  assert.equal(inspectSvg(wrap('<foreignObject width="8" height="8"/>'), 256), 'svg-unsupported-embed')
})

test('inspectSvg_nestedImageData_rejectsAsNestedData', () => {
  assert.equal(inspectSvg(wrap('<image href="data:image/svg+xml;base64,AAAA"/>'), 256), 'svg-nested-data')
})

test('inspectSvg_manyUseElements_rejectsAsTooComplex', () => {
  const inner = Array.from({ length: 20 }, (_, index) => `<use href="#g${index}"/>`).join('')
  assert.equal(inspectSvg(wrap(inner), 512), 'svg-too-complex')
})

test('inspectSvg_fewUseElements_acceptsThem', () => {
  const inner = Array.from({ length: 4 }, (_, index) => `<use href="#g${index}"/>`).join('')
  assert.equal(inspectSvg(wrap(inner), 512), null)
})

test('inspectSvg_manyImageElements_rejectsAsTooComplex', () => {
  const inner = Array.from({ length: 10 }, () => '<image href="#local"/>').join('')
  assert.equal(inspectSvg(wrap(inner), 512), 'svg-too-complex')
})

test('inspectSvg_tooManyElements_rejectsAsTooComplex', () => {
  const inner = '<rect/>'.repeat(20001)
  assert.equal(inspectSvg(wrap(inner), 200000), 'svg-too-complex')
})

test('inspectSvg_oversizedFile_rejectsAsTooLarge', () => {
  assert.equal(inspectSvg(wrap(''), SVG_MAX_BYTES + 1), 'svg-too-large')
})

test('inspectSvg_textWithoutSvgRoot_rejects', () => {
  assert.equal(inspectSvg('<html><body>nope</body></html>', 64), 'unsupported-type')
})

test('inspectSvg_nonStringText_rejects', () => {
  assert.equal(inspectSvg(null, 64), 'unsupported-type')
})
