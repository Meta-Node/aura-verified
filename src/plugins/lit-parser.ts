import { parse } from "node-html-parser"
import { transformWithEsbuild, type Plugin } from "vite"

export default function litTemplatePlugin() {
  return {
    name: "vite-plugin-lit-template",
    enforce: "pre",
    async transform(code: string, id: string) {
      if (!id.endsWith(".lit")) return null

      const root = parse(code)
      const template = root.querySelector("template")?.innerHTML.trim() || ""
      let script = root.querySelector("script")?.innerHTML.trim() || ""
      const style = root.querySelector("style")?.innerHTML.trim() || ""

      let className = "LitComponent"
      const scriptMatch = script.match(/class\s+(\w+)/)
      if (scriptMatch) {
        className = scriptMatch[1]!
      }

      script = "import {css as __litCSS} from 'lit' \n" + script

      if (style) {
        const staticStylesRegex = /static\s+styles\s*=/g
        if (!staticStylesRegex.test(script)) {
          script = script.replace(
            /class\s+\w+\s*(?:extends\s+\w+)?\s*\{/,
            (match) => `${match}\n static styles = __litCSS\`${style}\`;`,
          )
        }
      }

      if (script && id.endsWith(".lit")) {
        const tsResult = await transformWithEsbuild(script, id + ".ts", {
          loader: "ts",
          format: "esm",
        })
        script = tsResult.code
      }

      const transformedCode = `
        import * as __lit from 'lit'

        ${script || `class ${className} extends LitElement {}`}
        
        
        ${className}.prototype.render = function() {
          return __lit.html\`${template}\`;
        };
        
        export default ${className};
      `

      return {
        code: transformedCode,
        map: null,
      }
    },
  } satisfies Plugin
}
