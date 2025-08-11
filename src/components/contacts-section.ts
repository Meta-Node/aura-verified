import contactsIcon from '@/assets/icons/contacts.svg'
import googleIcon from '@/assets/icons/google.svg'
import { getContactsList } from '@/utils/integrations/google'
// import appleIcon from '@/assets/icons/apple.svg'

import { SignalWatcher } from '@lit-labs/signals'
import { css, CSSResultGroup, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('contacts-section')
export class ContactsSection extends SignalWatcher(LitElement) {
  static styles?: CSSResultGroup | undefined = css`
    .card {
      background: linear-gradient(to bottom, rgba(46, 51, 90, 0.26), rgba(28, 27, 51, 0.26) 100%);
      box-shadow: 0px 1px 0px 0px #ffffff40 inset;
      backdrop-filter: blur(31.5px);
      border-radius: 0.75rem;
      padding: 1rem;
      text-align: left;
      margin-bottom: 2rem;
    }

    .muted {
      color: #999999;
      font-size: 14px;
    }

    .text-xs {
      font-size: 12px;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: bold;
      font-size: 20px;
    }

    a {
      text-decoration: none;
      color: #bfb3f8;
      font-weight: bold;
    }

    .integrations {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 5px;
    }

    button {
      /* padding: 5px 22px; */
      /* background: linear-gradient(to bottom, rgba(46, 51, 90, 0.26), rgba(28, 27, 51, 0.26) 100%); */
      background-color: transparent;
      cursor: pointer;
      outline: none;
      border: none;
      color: white;
    }
  `

  constructor() {
    super()
  }

  protected onGoogleContactsClick() {
    getContactsList().then(console.log)
  }

  protected render() {
    return html` <div class="card">
      <div class="title">
        <img src="${contactsIcon}" width="24" height="24" alt="contacts" />
        Search Contacts for Verifiers
      </div>

      <p class="muted">Discover who in your contacts is in Aura.</p>
      <p class="muted text-xs">This is completely private, <a href="#">learn more</a></p>

      <div class="integrations">
        <button @click=${this.onGoogleContactsClick}>
          <img .src=${googleIcon} width="39" height="39px" alt="google" />
          <p>Google</p>
        </button>
      </div>
    </div>`
  }
}
