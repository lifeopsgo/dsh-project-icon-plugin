import assert from 'node:assert/strict'
import { test } from 'node:test'

import { ICON_CANVAS_SIZE, containBox } from '../src/image-fit.js'

test('containBox_defaultSize_scalesToCanvasConstant', () => {
  assert.deepEqual(containBox(100, 100), { width: ICON_CANVAS_SIZE, height: ICON_CANVAS_SIZE, x: 0, y: 0 })
})

test('containBox_squareImage_fillsTheBox', () => {
  assert.deepEqual(containBox(100, 100, 64), { width: 64, height: 64, x: 0, y: 0 })
})

test('containBox_wideImage_centersVertically', () => {
  assert.deepEqual(containBox(200, 100, 64), { width: 64, height: 32, x: 0, y: 16 })
})

test('containBox_tallImage_centersHorizontally', () => {
  assert.deepEqual(containBox(100, 200, 64), { width: 32, height: 64, x: 16, y: 0 })
})

test('containBox_smallImage_upscalesToBox', () => {
  assert.deepEqual(containBox(10, 10, 64), { width: 64, height: 64, x: 0, y: 0 })
})

test('containBox_nonPositiveOrNonFiniteInput_returnsNull', () => {
  assert.equal(containBox(0, 100, 64), null)
  assert.equal(containBox(100, 0, 64), null)
  assert.equal(containBox(Number.NaN, 100, 64), null)
  assert.equal(containBox(Infinity, 100, 64), null)
  assert.equal(containBox(-1, 100, 64), null)
  assert.equal(containBox(100, 100, 0), null)
})

test('containBox_roundsToWholePixels', () => {
  assert.deepEqual(containBox(3, 2, 64), { width: 64, height: 43, x: 0, y: 11 })
})
