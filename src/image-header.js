const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]
const RIFF_SIGNATURE = [0x52, 0x49, 0x46, 0x46]
const WEBP_TAG = [0x57, 0x45, 0x42, 0x50]
const SOF_MARKERS = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf])

export function readImageSize(bytes) {
  if (!(bytes instanceof Uint8Array)) return null
  if (matches(bytes, 0, PNG_SIGNATURE)) return readPngSize(bytes)
  if (matches(bytes, 0, RIFF_SIGNATURE) && matches(bytes, 8, WEBP_TAG)) return readWebpSize(bytes)
  if (bytes[0] === 0xff && bytes[1] === 0xd8) return readJpegSize(bytes)
  return null
}

function readPngSize(bytes) {
  if (bytes.length < 24) return null
  return { width: readUint32(bytes, 16), height: readUint32(bytes, 20) }
}

function readWebpSize(bytes) {
  if (bytes.length < 30) return null
  const chunk = String.fromCharCode(bytes[12], bytes[13], bytes[14], bytes[15])
  if (chunk !== 'VP8X') return null
  return { width: readUint24LE(bytes, 24) + 1, height: readUint24LE(bytes, 27) + 1 }
}

function readJpegSize(bytes) {
  let offset = 2
  while (offset + 9 < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset += 1
      continue
    }
    const marker = bytes[offset + 1]
    if (SOF_MARKERS.has(marker)) {
      return { height: readUint16(bytes, offset + 5), width: readUint16(bytes, offset + 7) }
    }
    if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2
      continue
    }
    const length = readUint16(bytes, offset + 2)
    if (length < 2) return null
    offset += 2 + length
  }
  return null
}

function matches(bytes, offset, signature) {
  if (bytes.length < offset + signature.length) return false
  return signature.every((value, index) => bytes[offset + index] === value)
}

function readUint16(bytes, offset) {
  return (bytes[offset] << 8) | bytes[offset + 1]
}

function readUint24LE(bytes, offset) {
  return bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16)
}

function readUint32(bytes, offset) {
  return ((bytes[offset] << 24) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3]) >>> 0
}
