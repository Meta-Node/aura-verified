import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { litHMRPlugin } from './vite-plugin-lit-hmr'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    target: 'es2022'
  },
  define: {
    'process.env': {}
  },
  plugins: [tsconfigPaths(), litHMRPlugin()]
  // assetsInclude: ['**/*.html']
})
