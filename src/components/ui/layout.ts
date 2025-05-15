import {  html, } from "lit"
import { customElement } from "lit/decorators.js"
import { LightDomElement } from "../../lib/element.ts"

@customElement("app-layout")
export class AppLayout extends LightDomElement {


  render() {
    return html`
      <div class="max-w-sm mx-auto mt-5">
        <div style="linear-gradient(90deg, #161624 1px, transparent 1px), linear-gradient(#161624 1px, transparent 1px)" class=""></div>
        <main>
          <slot></slot>
        </main>
      </div>
    `
  }
}
