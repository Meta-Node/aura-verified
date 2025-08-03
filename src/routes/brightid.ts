import { signal, SignalWatcher } from '@lit-labs/signals'
import { generateDeeplink } from 'brightid_sdk_v6/dist/appMethods'
import { css, CSSResultGroup, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { v4 as uuidv4 } from 'uuid'

import '@a11d/lit-qr-code'

const context = 'unitap'

const brihgtIDQRLink = signal('')

const interval = signal(null as null | number)

@customElement('brightid-login')
export class BrightIDLoginElement extends SignalWatcher(LitElement) {
  static styles?: CSSResultGroup | undefined = css`
    a {
      text-decoration: none;
      color: #bfb3f8;
      font-weight: bold;
    }
  `

  constructor() {
    super()

    if (!brihgtIDQRLink.get()) this.generateBrightIDLink()
  }

  protected generateBrightIDLink() {
    const contextId = uuidv4()
    const deepLink = generateDeeplink(context, contextId)

    brihgtIDQRLink.set(deepLink)
  }

  protected async onFetchSponsorStatus() {}

  protected clearInterval() {
    if (!interval.get()) return

    clearInterval(interval.get()!)
  }

  disconnectedCallback(): void {
    this.clearInterval()
  }

  protected render() {
    return html` <a href="/">Back</a>

      <lit-qr-code .value=${brihgtIDQRLink.get()} color="dark"></lit-qr-code>`
  }
}
