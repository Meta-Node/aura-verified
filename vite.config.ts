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
  plugins: [tsconfigPaths(), litHMRPlugin()],
  server: {
    proxy: {
      '^/auranode(/.*)?$': {
        target: 'https://aura-node.brightid.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auranode/, ''),
        secure: process.env.NODE_ENV?.toLowerCase() !== 'development'
      },

      '^/auranode-test(/.*)?$': {
        target: 'https://aura-test.brightid.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auranode-test/, ''), // Fixed regex
        secure: process.env.NODE_ENV?.toLowerCase() !== 'development'
      },
      '^/api(/.*)?$': {
        target: 'https://aura-get-verified.vercel.app',
        changeOrigin: true,
        secure: process.env.NODE_ENV?.toLowerCase() !== 'development'
      }
    }
  }
  // assetsInclude: ['**/*.html']
})
