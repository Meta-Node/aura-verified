import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'
import googleIcon from '@/assets/icons/google.svg'
import appleIcon from '@/assets/icons/apple.svg'
import contactsIcon from '@/assets/icons/contacts.svg'
import moreIcon from '@/assets/icons/thirdparties/more.svg'
import smsIcon from '@/assets/icons/thirdparties/sms.svg'
import telegramIcon from '@/assets/icons/thirdparties/telegram.svg'
import whatsappIcon from '@/assets/icons/thirdparties/whatsapp.svg'
import xIcon from '@/assets/icons/thirdparties/x.svg'
import QrCodeWithLogo from 'qrcode-with-logos'
import { userBrightId } from '@/states/user'
import { signal, SignalWatcher } from '@lit-labs/signals'

@customElement('share-page')
export class SharePage extends SignalWatcher(LitElement) {
  static styles?: CSSResultGroup = css`
    .container {
      display: flex;
      flex-direction: column;
      color: #ffffff;
    }

    .main-content {
      flex: 1;
      padding: 0rem 1rem;
      max-width: 480px;
      margin: 0 auto;
      width: 100%;
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 2rem;
    }

    .title {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }

    .text-muted {
      color: #8c8c8c;
    }

    .card {
      background: linear-gradient(to bottom, rgba(46, 51, 90, 0.26), rgba(28, 27, 51, 0.26) 100%);
      box-shadow: 0px 1px 0px 0px #ffffff40 inset;
      backdrop-filter: blur(31.5px);
      border-radius: 0.75rem;
      padding: 1rem;
      text-align: left;
      margin-bottom: 2rem;
    }

    .card-header {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }

    .icon-wrapper {
      margin-top: 0.25rem;
    }

    .card-content {
      flex: 1;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
    }

    .card-description {
      color: #8c8c8c;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .link-button {
      color: #8c8c8c;
      font-size: 0.875rem;
      text-decoration: underline;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-top: 0.5rem;
      text-align: left;
    }

    .platform-buttons {
      display: flex;
      justify-content: start;
      gap: 12px;
      margin-top: 1.5rem;
    }

    .platform-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      color: #ffffff;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 63.537%;
    }

    .platform-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to bottom, rgba(46, 51, 90, 0.26), rgba(28, 27, 51, 0.26) 100%);
      margin-bottom: 0.25rem;
    }

    .platform-label {
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    * {
      box-sizing: border-box;
    }

    .qr-container {
      padding: 1rem;
      box-sizing: border-box;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background: linear-gradient(to bottom, rgba(46, 51, 90, 0.26), rgba(28, 27, 51, 0.26) 100%);
    }

    .qr-code {
      position: relative;
      height: 300px;
    }

    .qr-image {
      object-fit: contain;
      width: 280px;
      height: 280px;
      border-radius: 12px;
    }

    .qr-logo {
      padding: 0.5rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .qr-logo svg {
      background-color: #ff3d00;
      border-radius: 0.75rem;
      padding: 0.5rem;
    }

    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
    }

    .divider-line {
      height: 1px;
      background-color: #333;
      flex: 1;
      width: 60px;
    }

    .divider-text {
      padding: 0 1rem;
      color: #8c8c8c;
    }

    /* Profile link */
    .profile-link {
      text-align: center;
      margin-bottom: 1rem;
    }

    .link {
      color: #8c8c8c;
      text-decoration: underline;
    }

    .social-buttons {
      display: flex;
      justify-content: space-around;
      margin-bottom: 3rem;
    }

    .social-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      color: #ffffff;
    }

    .social-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to bottom, rgba(46, 51, 90, 0.26), rgba(28, 27, 51, 0.26) 100%);
      margin-bottom: 0.25rem;
    }

    .social-label {
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
  `

  constructor() {
    super()

    const qrCode = new QrCodeWithLogo({
      width: 300,
      content: this.profileLink,
      logo: {
        src: '/images/brightId.svg',
        bgColor: '#333',
        borderWidth: 5
      },
      dotsOptions: {
        color: '#111'
      }
    })

    qrCode.getImage().then((res) => {
      this.linkImage.set(res.src)
    })
  }

  private get profileLink() {
    return `https://aura.brightid.org/subject/${userBrightId.get()}/`
  }

  linkImage = signal('')

  private handleShare(platform: string) {
    const url = this.profileLink
    const text = 'Check out my Aura profile!'
    let shareUrl = ''

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(text)}`
        window.open(shareUrl, '_blank')
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
        window.open(shareUrl, '_blank')
        break
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
          text
        )}`
        window.open(shareUrl, '_blank')
        break
      case 'sms':
        shareUrl = `sms:?body=${encodeURIComponent(text + ' ' + url)}`
        window.open(shareUrl)
        break
      case 'more':
        if (navigator.share) {
          navigator.share({ title: 'Aura Profile', text, url })
        } else {
          navigator.clipboard.writeText(url)
          alert('Link copied to clipboard!')
        }
        break
      default:
        break
    }
  }

  protected render() {
    return html` <div class="container">
      <main class="main-content">
        <div class="header">
          <h1 class="title">Find Verifiers</h1>
          <!-- <p class="subtitle">Found 2 verifiers. 1 evaluated you.</p> -->
          <p class="text-muted">Need at least 1 more evaluation to level up</p>
        </div>

        <!-- <div class="card">
          <div class="card-header">
            <div class="icon-wrapper">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="2" />
                <circle cx="9" cy="10" r="2" stroke="white" strokeWidth="2" />
                <path d="M15 8H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 16H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div class="card-content">
              <h2 class="card-title">Search Contacts for Verifiers</h2>
              <p class="card-description">Discover who in your contacts is in Aura.</p>
              <button class="link-button">Why is this private?</button>
            </div>
          </div>

          <div class="platform-buttons">
            <button class="platform-button">
              <div class="platform-icon google">
                <img src="${googleIcon}" width="24" height="24" alt="apple" />
              </div>
              <span class="platform-label">Google</span>
            </button>
            <button class="platform-button">
              <div class="platform-icon apple">
                <img src="${appleIcon}" width="24" height="24" alt="apple" />
              </div>
              <span class="platform-label">Apple</span>
            </button>
            <button class="platform-button">
              <div class="platform-icon contacts">
                <img src="${contactsIcon}" alt="contacts" />
              </div>
              <span class="platform-label">Contacts</span>
            </button>
          </div>
        </div> -->

        <div class="qr-container">
          <div class="qr-code">
            <div class="qr-logo-container">
              <div class="qr-logo">
                <img class="qr-image" .src="${this.linkImage.get()}" alt="qr code" />
              </div>
            </div>
          </div>
          <div class="divider">
            <div class="divider-line"></div>
            <span class="divider-text">Or</span>
            <div class="divider-line"></div>
          </div>

          <div class="profile-link">
            <a href="${this.profileLink}" target="_blank" class="link"> Aura Profile Link </a>
          </div>
        </div>
        <div class="social-buttons">
          <button class="social-button" @click=${() => this.handleShare('twitter')}>
            <div class="social-icon twitter">
              <img src="${xIcon}" width="24" height="24" alt="x" />
            </div>
            <span class="social-label">Twitter</span>
          </button>
          <button class="social-button" @click=${() => this.handleShare('whatsapp')}>
            <div class="social-icon whatsapp">
              <img src="${whatsappIcon}" width="24" height="24" alt="whatsapp" />
            </div>
            <span class="social-label">Whatsapp</span>
          </button>
          <button class="social-button" @click=${() => this.handleShare('telegram')}>
            <div class="social-icon telegram">
              <img src="${telegramIcon}" width="24" height="24" alt="telegram" />
            </div>
            <span class="social-label">Telegram</span>
          </button>
          <button class="social-button" @click=${() => this.handleShare('sms')}>
            <div class="social-icon sms">
              <img src="${smsIcon}" width="24" height="24" alt="sms" />
            </div>
            <span class="social-label">SMS</span>
          </button>
          <button class="social-button" @click=${() => this.handleShare('more')}>
            <div class="social-icon more">
              <img src="${moreIcon}" width="24" height="24" alt="x" />
            </div>
            <span class="social-label">More</span>
          </button>
        </div>
      </main>
    </div>`
  }
}
