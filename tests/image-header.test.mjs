import assert from 'node:assert/strict'
import { test } from 'node:test'

import { readImageSize } from '../src/image-header.js'

function pngHeader(width, height) {
  const bytes = new Uint8Array(24)
  bytes.set([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], 0)
  writeUint32(bytes, 16, width)
  writeUint32(bytes, 20, height)
  return bytes
}

function jpegHeader(width, height) {
  return new Uint8Array([0xff, 0xd8, 0xff, 0xc0, 0x00, 0x11, 0x08, height >> 8, height & 0xff, width >> 8, width & 0xff, 0x03])
}

function webpHeader(kind, payload) {
  const bytes = new Uint8Array(32)
  bytes.set([0x52, 0x49, 0x46, 0x46], 0)
  bytes.set([0x57, 0x45, 0x42, 0x50], 8)
  bytes.set([...kind].map(character => character.charCodeAt(0)), 12)
  payload(bytes)
  return bytes
}

function writeUint32(bytes, offset, value) {
  bytes[offset] = (value >>> 24) & 0xff
  bytes[offset + 1] = (value >>> 16) & 0xff
  bytes[offset + 2] = (value >>> 8) & 0xff
  bytes[offset + 3] = value & 0xff
}

test('readImageSize_png_returnsDimensions', () => {
  assert.deepEqual(readImageSize(pngHeader(12000, 12000)), { width: 12000, height: 12000 })
})

test('readImageSize_jpeg_returnsDimensions', () => {
  assert.deepEqual(readImageSize(jpegHeader(4000, 3000)), { width: 4000, height: 3000 })
})

test('readImageSize_webpVp8x_returnsDimensions', () => {
  const bytes = webpHeader('VP8X', (target) => {
    target[24] = 0xff
    target[25] = 0x0f
    target[26] = 0x00
    target[27] = 0xff
    target[28] = 0x07
    target[29] = 0x00
  })
  assert.deepEqual(readImageSize(bytes), { width: 4096, height: 2048 })
})

test('readImageSize_unknownFormat_returnsNull', () => {
  assert.equal(readImageSize(new Uint8Array([0x00, 0x01, 0x02, 0x03])), null)
})

test('readImageSize_truncatedPng_returnsNull', () => {
  assert.equal(readImageSize(new Uint8Array([0x89, 0x50, 0x4e, 0x47])), null)
})

test('readImageSize_nonBytes_returnsNull', () => {
  assert.equal(readImageSize(null), null)
  assert.equal(readImageSize('png'), null)
})
