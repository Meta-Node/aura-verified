import { LitElement, html, css } from "lit"
import { customElement } from "lit/decorators.js"
import "./styles.css"

import { createRouter } from "@/router.ts"

import "./components/ui/layout.ts"

import "@shoelace-style/shoelace/dist/themes/light.css"
import "@shoelace-style/shoelace/dist/themes/dark.css"
import "@shoelace-style/shoelace/dist/components/button/button.js"
import "@shoelace-style/shoelace/dist/components/icon/icon.js"
import "@shoelace-style/shoelace/dist/components/input/input.js"
import "@shoelace-style/shoelace/dist/components/rating/rating.js"

@customElement("my-app")
export class MyApp extends LitElement {
  private router = createRouter(this)

  render() {
    return html` <app-layout> ${this.router.outlet()} </app-layout>`
  }
}
