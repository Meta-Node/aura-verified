import { LitElement, html, css } from "lit"
import { customElement } from "lit/decorators.js"
import "./styles.css"
import { LightDomElement } from "./lib/element"

import "./components/ui/layout.ts"

@customElement("my-app")
export class MyApp extends LightDomElement {

  render() {
    return html`
      <app-layout>
          <div class="text-2xl ">Hello Tailwind + Lit!</div>
      </app-layout>`
  }
}
