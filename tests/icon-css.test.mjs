import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  buildIconAnimationStyles,
  buildIconStyles,
  escapeCssString,
  workspaceIconSelector,
} from '../src/icon-css.js'

const ROW = '[data-row-key="workspace:a-1"]'

test('workspaceIconSelector_buildsRowAttributeSelector', () => {
  assert.equal(workspaceIconSelector('a-1'), ROW)
})

test('workspaceIconSelector_hostileId_escapesQuotesAndBackslashes', () => {
  assert.equal(workspaceIconSelector('a"b'), '[data-row-key="workspace:a\\"b"]')
  assert.equal(workspaceIconSelector('a\\b'), '[data-row-key="workspace:a\\\\b"]')
})

test('escapeCssString_quotesBackslashesAndNewlines', () => {
  assert.equal(escapeCssString('a"b'), 'a\\"b')
  assert.equal(escapeCssString('a\\b'), 'a\\\\b')
  assert.equal(escapeCssString('a\nb'), 'a\\a b')
  assert.equal(escapeCssString('a\rb'), 'a\\d b')
})

test('escapeCssString_formFeedAndOtherControls_areEscaped', () => {
  assert.equal(escapeCssString('a\fb'), 'a\\c b')
  assert.equal(escapeCssString('a\u0001b'), 'a\\1 b')
  assert.equal(escapeCssString('a\u007fb'), 'a\\7f b')
  assert.ok(!/[\u0000-\u001f\u007f]/.test(escapeCssString('a\n\r\f\u0000\u007f')))
})

test('buildIconStyles_withoutIcons_returnsEmptyString', () => {
  assert.equal(buildIconStyles({}), '')
  assert.equal(buildIconStyles(null), '')
})

test('buildIconStyles_emoji_emitsHidePaintAndHoverRules', () => {
  const rules = buildIconStyles({ 'a-1': { kind: 'emoji', value: '🚀' } }).split('\n')
  assert.deepEqual(rules, [
    `${ROW}>span:first-child>svg{display:none}`,
    `${ROW}>span:first-child::before{content:"🚀";font-size:14px;line-height:1;max-width:16px;overflow:hidden}`,
    `@media (hover:hover){${ROW}:hover>span:first-child{display:inline-flex!important}${ROW}:hover>span:first-child+span{display:none!important}${ROW}:hover>span:first-child::before{animation:dsh-project-icon-breathe 1.6s ease-in-out infinite;transform-origin:center}}`,
  ])
})

test('buildIconAnimationStyles_declaresBreatheKeyframesAndReducedMotionGuard', () => {
  const css = buildIconAnimationStyles()
  assert.ok(css.includes('@keyframes dsh-project-icon-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.22)}}'))
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)\{[^}]*animation:none!important/)
})

test('buildIconStyles_text_carriesColorAndClamp', () => {
  const css = buildIconStyles({ 'a-1': { kind: 'text', value: 'AB', color: '#102030' } })
  assert.match(css, /\[data-row-key="workspace:a-1"\]>span:first-child::before\{content:"AB";color:#102030;font-size:11px;font-weight:600;line-height:1;max-width:16px;overflow:hidden\}/)
})

test('buildIconStyles_prefixPlacement_keepsShippedGlyphAndPaintsTitlePrefix', () => {
  const rules = buildIconStyles({ 'a-1': { kind: 'emoji', value: '🚀', placement: 'prefix' } }).split('\n')
  assert.deepEqual(rules, [
    `${ROW}>span:nth-child(3)>span:first-child::before{content:"🚀";display:inline-block;vertical-align:middle;margin-inline-end:4px;font-size:13px;line-height:1}`,
    `@media (hover:hover){${ROW}:hover>span:nth-child(3)>span:first-child::before{animation:dsh-project-icon-breathe 1.6s ease-in-out infinite;transform-origin:center}}`,
  ])
})

test('buildIconStyles_prefixPlacement_doesNotHideShippedGlyphOrChevron', () => {
  const css = buildIconStyles({ 'a-1': { kind: 'emoji', value: '🚀', placement: 'prefix' } })
  assert.ok(!css.includes('span:first-child>svg{display:none}'))
  assert.ok(!css.includes('display:none!important'))
})

test('buildIconStyles_prefixImage_rendersInlineBlockBackground', () => {
  const dataUrl = 'data:image/webp;base64,AAAA'
  const css = buildIconStyles({ 'a-1': { kind: 'image', value: dataUrl, placement: 'prefix' } })
  assert.ok(css.includes('>span:nth-child(3)>span:first-child::before{content:"";display:inline-block;width:14px;height:14px'))
  assert.ok(css.includes(`background-image:url("${dataUrl}")`))
})

test('buildIconStyles_textUppercaseColor_isNormalized', () => {
  const css = buildIconStyles({ 'a-1': { kind: 'text', value: 'AB', color: '#ABCDEF' } })
  assert.ok(css.includes('color:#abcdef'))
})

test('buildIconStyles_image_paintsDataUrlBackground', () => {
  const dataUrl = 'data:image/webp;base64,AB+CD/EF=='
  const css = buildIconStyles({ 'a-1': { kind: 'image', value: dataUrl } })
  assert.ok(css.includes(`>span:first-child>svg{display:none}`))
  assert.ok(css.includes(`background-image:url("${dataUrl}")`))
  assert.ok(css.includes('background-size:contain'))
  assert.ok(css.includes('background-repeat:no-repeat'))
  assert.ok(css.includes('background-position:center'))
})

test('buildIconStyles_valueWithQuote_staysInsideCssString', () => {
  assert.match(
    buildIconStyles({ 'a-1': { kind: 'text', value: 'a"', color: '#102030' } }),
    /content:"a\\""/,
  )
})

test('buildIconStyles_invalidEntry_isSkipped', () => {
  const css = buildIconStyles({ 'a-1': { kind: 'emoji', value: '' }, 'b-2': { kind: 'emoji', value: '🚀' } })
  assert.ok(!css.includes('workspace:a-1'))
  assert.ok(css.includes('workspace:b-2'))
})

test('buildIconStyles_ordersRulesByWorkspaceId', () => {
  const css = buildIconStyles({
    'b-2': { kind: 'emoji', value: '🚀' },
    'a-1': { kind: 'emoji', value: '📦' },
  })
  const first = css.indexOf('[data-row-key="workspace:a-1"]')
  const second = css.indexOf('[data-row-key="workspace:b-2"]')
  assert.ok(first >= 0 && second > first)
})
