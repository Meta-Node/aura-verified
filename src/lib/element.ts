import { LitElement } from "lit"

export class LightDomElement extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this
  }
}
