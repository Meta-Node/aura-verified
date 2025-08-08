import { signal, SignalWatcher } from '@lit-labs/signals'
import { generateDeeplink } from 'brightid_sdk_v6/dist/appMethods'
import { css, CSSResultGroup, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import nacl from 'tweetnacl'
import { v4 as uuidv4 } from 'uuid'

import { aesKey, privateKey, publicKey } from '@/lib/data/brightid'
import {
  b64ToUint8Array,
  UInt8ArrayEqual,
  uInt8ArrayToB64,
  urlSafeRandomKey
} from '@/utils/encoding'
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

  protected async setupRecovery() {
    const { publicKey: _public, secretKey: _secret } = nacl.sign.keyPair()

    const key = await urlSafeRandomKey(16)

    publicKey.set(_public.toString())
    privateKey.set(btoa(uInt8ArrayToB64(_secret)))

    aesKey.set(key)
  }

  protected createRecoveryChannel(location: string) {}

  protected verifyKeyPair(publicKey: string, pk: Uint8Array) {
    let pubKeyUInt8: Uint8Array
    try {
      pubKeyUInt8 = b64ToUint8Array(publicKey)
    } catch {
      throw Error(`publicKey is not base64-encoded`)
    }
    if (pubKeyUInt8.length !== nacl.sign.publicKeyLength) {
      throw Error(
        `publicKey size wrong, expected: ${nacl.sign.publicKeyLength} - Actual: ${pubKeyUInt8.length}`
      )
    }

    if (!pk) {
      throw Error(`Invalid keypair: secretKey undefined`)
    }
    if (pk.length !== nacl.sign.secretKeyLength) {
      throw Error(
        `secretKey size wrong, expected: ${nacl.sign.secretKeyLength} - actual: ${pk.length}`
      )
    }

    const { publicKey: newPub } = nacl.sign.keyPair.fromSecretKey(pk)
    if (!UInt8ArrayEqual(newPub, pubKeyUInt8)) {
      throw Error(`publicKey does not match secretKey`)
    }
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
