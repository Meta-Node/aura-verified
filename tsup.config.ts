import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/packages/index.ts'],
  outDir: 'build',
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  // @ts-ignore
  esbuildPlugins: [NodeModulesPolyfillPlugin({})],
  external: []
})
