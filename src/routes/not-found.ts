import { html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("not-found")
class NotFoundElement extends LitElement {
  protected render() {
    return html` <div>Not Found</div> `
  }
}
