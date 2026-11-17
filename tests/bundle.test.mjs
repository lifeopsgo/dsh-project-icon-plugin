import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'

import { build } from 'esbuild'

test('clientBundle_matchesBuiltSources', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'project-icon-bundle-'))
  try {
    const outfile = join(dir, 'client.js')
    await build({
      entryPoints: [new URL('../src/client/index.js', import.meta.url).pathname],
      bundle: true,
      format: 'iife',
      target: 'chrome110',
      outfile,
      legalComments: 'none',
    })
    const [fresh, committed] = await Promise.all([
      readFile(outfile, 'utf8'),
      readFile(new URL('../client.js', import.meta.url), 'utf8'),
    ])
    assert.equal(committed, fresh, 'client.js is stale; run node scripts/build.mjs')
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
})
