import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'
import externalLinkIcon from '@/assets/icons/external-link.svg'
import googleIcon from '@/assets/icons/google.svg'
import appleIcon from '@/assets/icons/apple.svg'
import { SignalWatcher } from '@lit-labs/signals'
import { inputText, isLoginLoading } from '@/states/login'
import { clientAPI } from '@/utils/apis'
import { StateController } from '@lit-app/state'
import { userStore } from '@/states/user'
import { router } from '@/router'

@customElement('home-page')
export class HomePage extends SignalWatcher(LitElement) {
  static styles?: CSSResultGroup = css`
    .wrapper {
      margin-top: 40px;
    }
    .logo {
      width: 60px;
      height: 60px;
      box-sizing: border-box;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      flex: 1 1 auto;
    }
    h1.title {
      margin: 20px 0 0;
      font-size: 24px;
    }
    .info-text {
      margin: 15px 0 20px;
      color: #9f9f9f;
      font-size: 11px;
    }

    /* “What is Aura?” button */
    .desc-btn {
      display: inline-flex;
      align-items: center;
      background: transparent;
      border: none;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
    }
    .desc-btn span {
      margin-right: 4px;
    }

    .form-container {
      margin: 30px 0 16px;
      position: relative;
      border-radius: 12px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.05);
      overflow: hidden;
      width: 369px;
      padding: 10px;
      box-sizing: border-box;
    }
    .lamp-light {
      position: absolute;
      top: -10px;
      right: -10px;
      z-index: -1;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: 0 0 400px 150px rgba(253, 224, 255, 0.12);
    }
    h2.form-title {
      margin: 0;
      color: #d9d9d9;
      font-size: 32px;
    }
    .form-desc {
      margin: 8px 0 10px;
      color: #6c7278;
      font-size: 12px;
      text-align: center;
    }

    .email-wrapper {
      position: relative;
      margin-bottom: 16px;
    }
    .email-icon {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      color: #acb5bb;
    }
    .email-input {
      width: 100%;
      padding: 12px 16px 12px 48px;
      background: #54545421;
      border: 1px solid #545454;
      border-radius: 12px;
      color: #fff;
      font-size: 1rem;
      box-sizing: border-box;
    }
    .email-input::placeholder {
      color: #acb5bb;
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 12px 0;
      border-radius: 12px;
      font-size: 1rem;
      cursor: pointer;
    }
    .btn-email {
      background: #1d61e7;
      color: #fff;
      border: none;
      margin-bottom: 8px;
    }
    .divider {
      height: 1px;
      background: #545454;
      margin: 24px 0;
    }

    .btn-google,
    .btn-apple {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
      border-radius: 12px;
      padding: 12px 0;
      font-size: 1rem;
      cursor: pointer;
    }
    .btn-google {
      background: #fff;
      color: #000;
      border: none;
    }
    .btn-apple {
      background: #000;
      color: #fff;
      border: 1px solid #545454;
    }
    .btn-icon {
      margin-right: 15px;
      margin-bottom: 5px;
      height: 24px;
      width: 24px;
    }

    .form-footer {
      color: #787878;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: -0.22px;
      text-align: center;
      color: #acb5bb;
    }

    .bottom-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      z-index: 10;
      margin-top: 40px;
    }
    .brand {
      display: flex;
      align-items: center;
    }
    .brand-icon {
      margin-right: 8px;
      height: 32px;
      width: 32px;
      fill: #f4712f;
    }
    .brand-name {
      font-weight: bold;
      color: white;
      margin-left: 12px;
    }
    .privacy {
      color: #fff;
      text-decoration: none;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `

  state = new StateController(this, userStore)

  private onInputChange(e: Event) {
    const target = e.target as HTMLInputElement

    inputText.set(target.value)
  }

  private async onSubmit() {
    isLoginLoading.set(true)
    const email = inputText.get()
    try {
      const res = await clientAPI.POST('/users/login', {
        body: {
          email,
          integration: 'email'
        }
      })

      if (res.response.status === 201 && res.data) {
        userStore.email = email

        const { id } = res.data

        userStore.brightId = id

        router.get()?.goto('/home')
      }
    } catch (e) {
      console.error(e)
    } finally {
      isLoginLoading.set(false)
    }
  }

  render() {
    return html` <div class="wrapper">
      <img src="/favicon.png" class="logo" alt="Aura" />

      <div class="container">
        <h1 class="title">Aura Get Verified</h1>
        <p class="info-text">Decentralized verification platform</p>

        <a href="/home" class="desc-btn">
          <span>What is Aura?</span>
          <img src=${externalLinkIcon} alt="Aura" />
        </a>

        <div class="form-container">
          <div class="lamp-light"></div>

          <h2 class="form-title">Sign In</h2>
          <p class="form-desc">Use one of these integrations to login</p>

          <div class="email-wrapper">
            <div class="email-icon">
              <fa-icon class="fas fa-envelope" color="#2980B9"></fa-icon>
            </div>
            <input
              .value="${inputText.get()}"
              @change=${this.onInputChange}
              type="email"
              placeholder="Enter your email"
              class="email-input"
            />
          </div>

          <button @click=${this.onSubmit} .disabled=${isLoginLoading.get()} class="btn btn-email">
            Sign in with Email
          </button>

          <div class="divider"></div>

          <button class="btn-google btn">
            <div class="btn-icon">
              <img src="${googleIcon}" alt="Google" />
            </div>
            Sign in with Google
          </button>

          <button class="btn-apple btn">
            <div class="btn-icon">
              <img src="${appleIcon}" alt="Apple" />
            </div>
            Sign in with Apple
          </button>

          <p class="form-footer">By Signing in you will agree to our privacy policy</p>
        </div>
      </div>

      <div class="bottom-bar">
        <div class="brand">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.2 0H0V3.2H3.2V0Z" fill="#F4712F" />
            <path
              d="M9.6 0.16037C9.10736 0.0601906 8.60639 0.00649803 8.1037 0H5.2V3.2H8.04445C8.9938 3.2 9.92183 3.48151 10.7112 4.00895C11.5005 4.53638 12.1158 5.28603 12.4791 6.16312C12.8424 7.04021 12.9374 8.00532 12.7522 8.93643C12.567 9.86754 12.1098 10.7228 11.4386 11.3941C10.7673 12.0654 9.91199 12.5226 8.98088 12.7078C8.04977 12.893 7.08465 12.7979 6.20756 12.4346C5.33048 12.0713 4.58082 11.4561 4.05339 10.6667C3.52596 9.87738 3.24445 8.94935 3.24445 8V5.2H0.0444446V8C0.0440559 8.55252 0.100777 9.10359 0.213704 9.64444C0.965186 13.2415 4.13259 15.9511 7.94074 16H8.1037C12.4741 15.9444 16 12.3841 16 8C16 4.12963 13.2515 0.901482 9.6 0.16037Z"
              fill="#F4712F"
            />
            <path
              d="M7.58458 10.7921C7.14524 10.7265 6.72757 10.5582 6.36556 10.3007C5.99807 10.0401 5.69842 9.6952 5.49176 9.29488C5.28509 8.89456 5.17742 8.45052 5.17778 8V5.17852H8C8.44421 5.17835 8.88219 5.28304 9.2783 5.48407C9.67442 5.68509 10.0175 5.97679 10.2796 6.33542C10.5417 6.69405 10.7155 7.10949 10.7867 7.54794C10.858 7.98639 10.8248 8.43548 10.6897 8.85866C10.5547 9.28185 10.3217 9.66718 10.0096 9.98332C9.69759 10.2995 9.31532 10.5375 8.89393 10.678C8.47254 10.8185 8.02392 10.8576 7.58458 10.7921Z"
              fill="#F4712F"
            />
          </svg>

          <span class="brand-name">Bright ID</span>
        </div>
        <a href="#" class="privacy">Privacy Policy</a>
      </div>
    </div>`
  }
}
