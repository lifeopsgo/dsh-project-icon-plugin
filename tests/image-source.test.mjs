import assert from 'node:assert/strict'
import { test } from 'node:test'

import { SVG_TYPE, resolveImageSource } from '../src/image-source.js'

test('resolveImageSource_svgMediaTypeWithoutExtension_usesElementDecoder', () => {
  assert.equal(resolveImageSource(SVG_TYPE), 'element')
})

test('resolveImageSource_svgMediaTypeWinsOverRasterExtension_usesElementDecoder', () => {
  assert.equal(resolveImageSource(SVG_TYPE, 'logo.png'), 'element')
})

test('resolveImageSource_svgMediaTypeIsCaseInsensitive', () => {
  assert.equal(resolveImageSource('IMAGE/SVG+XML'), 'element')
})

test('resolveImageSource_mediaTypeWithParameters_ignoresParameters', () => {
  assert.equal(resolveImageSource('image/svg+xml;charset=utf-8'), 'element')
  assert.equal(resolveImageSource('image/png; charset=binary'), 'bitmap')
})

test('resolveImageSource_emptyTypeWithUppercaseSvgExtension_usesElementDecoder', () => {
  assert.equal(resolveImageSource('', 'logo.SVG'), 'element')
})

test('resolveImageSource_emptyTypeWithoutSvgExtension_rejects', () => {
  assert.equal(resolveImageSource('', 'logo.png'), null)
})

test('resolveImageSource_rasterMediaTypes_useBitmapDecoder', () => {
  assert.equal(resolveImageSource('image/png'), 'bitmap')
  assert.equal(resolveImageSource('image/jpeg'), 'bitmap')
  assert.equal(resolveImageSource('image/webp'), 'bitmap')
})

test('resolveImageSource_nonImageMediaType_rejects', () => {
  assert.equal(resolveImageSource('text/plain'), null)
  assert.equal(resolveImageSource('application/pdf'), null)
})

test('resolveImageSource_svgExtensionWithNonImageType_rejects', () => {
  assert.equal(resolveImageSource('text/plain', 'logo.svg'), null)
})

test('resolveImageSource_svgExtensionWithRasterType_keepsBitmapDecoder', () => {
  assert.equal(resolveImageSource('image/png', 'logo.svg'), 'bitmap')
})

test('resolveImageSource_svgMediaTypeWithoutXmlSuffix_usesBitmapDecoder', () => {
  assert.equal(resolveImageSource('image/svg'), 'bitmap')
})

test('resolveImageSource_nonStringType_rejects', () => {
  assert.equal(resolveImageSource(null, 'logo.svg'), null)
  assert.equal(resolveImageSource(undefined, ''), null)
})

test('resolveImageSource_emptyNameAndType_rejects', () => {
  assert.equal(resolveImageSource('', ''), null)
})
