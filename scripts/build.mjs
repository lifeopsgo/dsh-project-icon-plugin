import { build } from 'esbuild'

await build({
  entryPoints: ['src/client/index.js'],
  bundle: true,
  format: 'iife',
  target: 'chrome110',
  outfile: 'client.js',
  legalComments: 'none',
})
