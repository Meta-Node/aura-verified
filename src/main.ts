import { LitElement, html, css } from "lit"
import { customElement } from "lit/decorators.js"
import "./styles.css"

import "./components/ui/layout.ts"
import { createRouter } from "@/router.ts"

@customElement("my-app")
export class MyApp extends LitElement {
  private router = createRouter(this)

  render() {
    return html`
      <app-layout>
        ${this.router.outlet()}
      </app-layout>`
  }
}
