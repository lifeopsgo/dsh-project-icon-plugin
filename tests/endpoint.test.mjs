import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

import { ICONS_PATH, ICONS_ROUTE } from '../src/endpoint.js'

const read = (relative) => readFile(new URL(relative, import.meta.url), 'utf8')

test('ICONS_ROUTE_isBrowserRelativeFormOfICONS_PATH', () => {
  assert.ok(ICONS_PATH.startsWith('/'))
  assert.equal(ICONS_ROUTE, ICONS_PATH.slice(1))
})

test('hostRoute_registeredWithEndpointConstant', async () => {
  const source = await read('../index.js')
  assert.ok(source.includes('ICONS_PATH'))
  assert.ok(!source.includes("'/project-icon/icons'"))
})

test('clientApi_builtFromEndpointConstant', async () => {
  const source = await read('../src/client/api.js')
  assert.ok(source.includes('ICONS_PATH'))
  assert.ok(!source.includes("'project-icon/icons'"))
})
