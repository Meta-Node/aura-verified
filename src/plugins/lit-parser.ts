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
      const elementName = `my-${className.toLowerCase()}`

      if (script && id.endsWith(".lit")) {
        const tsResult = await transformWithEsbuild(script, id + ".ts", {
          loader: "ts",
          format: "esm",
        })
        script = tsResult.code
      }

      const transformedCode = `
        import { LitElement, html, css } from 'lit';
        
        ${script || `class ${className} extends LitElement {}`}
        
        ${style ? `${className}.styles = css\`${style}\`;\n` : ""}
        
        ${className}.prototype.render = function() {
          return html\`${template}\`;
        };
        
        customElements.define('${elementName}', ${className});
        
        export default ${className};
      `

      return {
        code: transformedCode,
        map: null,
      }
    },
  } satisfies Plugin
}
