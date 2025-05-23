import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { litHMRPlugin } from "./vite-plugin-lit-hmr"
import litPluginParser from "./src/plugins/lit-parser"

export default defineConfig({
  root: ".",
  build: {
    outDir: "build",
  },
  resolve: {
    extensions: [".js", ".ts", ".lit"],
  },
  plugins: [tsconfigPaths(), litHMRPlugin(), litPluginParser()],
})
