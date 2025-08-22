import appleIcon from '@/assets/icons/apple.svg'
import brightIDIcon from '@/assets/icons/brightid.svg'
import EmailIcon from '@/assets/icons/email.svg'
import externalLinkIcon from '@/assets/icons/external-link.svg'
import googleIcon from '@/assets/icons/google.svg'
import spinnerIcon from '@/assets/icons/spinner.svg'
import { auth } from '@/lib/firebase'
import { pushRouter } from '@/router'
import { inputText, isLoginLoading } from '@/states/login'
import {
  userBrightId,
  userEmail,
  userFirstName,
  userLastName,
  userPhoneNumber,
  userProfilePicture
} from '@/states/user'
import { clientAPI } from '@/utils/apis'
import { SignalWatcher } from '@lit-labs/signals'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const generateUUID = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const appleSignInOptions = {
  clientID: 'org.brightid.get-verified',
  redirectUri: 'https://aura-get-verified.vercel.app/sign-in-with-apple',
  state: generateUUID(),
  responseMode: 'form_post',
  scope: 'name email'
} as const

declare const AppleID: any

@customElement('home-page')
export class LoginPage extends SignalWatcher(LitElement) {
  @property({
    type: Boolean
  })
  withoutTitle: boolean = false

  constructor() {
    super()
    AppleID.auth.init({
      clientId: appleSignInOptions.clientID,
      scope: appleSignInOptions.scope,
      redirectURI: appleSignInOptions.redirectUri,
      state: appleSignInOptions.state,
      usePopup: true
    })

    if (userBrightId.get()) {
      pushRouter('/home')
    }
  }

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
      border: 1px solid #5f5f5f;
      background: rgba(255, 255, 255, 0.05);
      overflow: hidden;
      width: 369px;
      max-width: 100vw;
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

    .mini-divider {
      margin: 10px 0;
      padding-bottom: 12px;
      border-bottom: 1px solid #a5a5a575;
    }

    .btn-google,
    .btn-apple {
      display: flex;
      align-items: center;
      justify-content: center;
      /* margin-bottom: 16px; */
      border-radius: 12px;
      padding: 12px 0;
      font-size: 1rem;
      cursor: pointer;
    }
    .btn-google {
      background: #fff;
      color: #000;
      border: 1px solid #5c5c5c;
    }
    .btn-apple {
      background: #000;
      color: #fff;
      border: 1px solid #545454;
    }
    .btn-brightid {
      background: #202020;
      color: white;
      transition: all;
      border: 1px solid #545454;
    }

    .btn-brightid:hover {
      background: #1f1f1f;
    }

    .btn-brightid .btn-icon {
      margin-bottom: 0;
    }
    .btn-icon {
      margin-right: 15px;
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
      gap: 50px;
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

    .loading-wrapper {
      height: 369px;
      display: grid;
      place-items: center;
    }

    .loading-wrapper h2 {
      margin: 0;
    }

    .loading-wrapper img {
      margin-top: 20px;
      animation: spin 1s linear infinite;
    }

    .mini-integrations {
      display: flex;
      gap: 5px;
    }

    .mini-integrations button {
      justify-content: center !important;
      height: 50px !important;
      margin-bottom: 0 !important;
      padding: 0 !important;
    }

    .mini-integrations button .btn-icon {
      margin: 0 !important;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .integration-info {
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;
      color: #acb5bb;
      margin-left: 10px;
    }

    .mini-integration-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 1 auto;
    }

    .mini-info {
      position: absolute;
      bottom: -13px;
      font-size: 0.7rem;
      color: #acb5bb;
      white-space: nowrap;
    }

    .btn-wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
    }

    .btn-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #acb5bb;
      margin-top: 4px;
      margin-bottom: 5px;
    }

    .green {
      color: #00ffbb;
    }

    .yellow {
      color: #ffe81a;
    }

    .orange {
      color: #ff811a;
    }
  `

  private onInputChange(e: Event) {
    const target = e.target as HTMLInputElement

    inputText.set(target.value)
  }

  private async createBrightId(email: string) {
    const res = await clientAPI.POST('/login', {
      body: {
        email,
        integration: 'email'
      }
    })

    if (res.response.status === 200 && res.data) {
      userEmail.set(email)

      const { id } = res.data

      userBrightId.set(id)
      return id
    }

    throw new Error('Failed to create BrightID' + res.error)
  }

  private async onSubmit() {
    isLoginLoading.set(true)
    const email = inputText.get()
    try {
      const res = await this.createBrightId(email)

      if (res && !this.withoutTitle) {
        pushRouter('/home')
      }
    } catch (e) {
      console.error(e)
    } finally {
      isLoginLoading.set(false)
    }
  }

  private async signInWithGoogle() {
    isLoginLoading.set(true)
    try {
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider)

      if (!res.user) {
        isLoginLoading.set(false)
        return
      }

      userEmail.set(res.user.email!)

      const id = await this.createBrightId(userEmail.get())

      const [firstName, lastName] = res.user.displayName?.split(' ') ?? []

      userFirstName.set(firstName ?? 'Unknown')
      userLastName.set(lastName ?? '')
      userProfilePicture.set(res.user.photoURL ?? '')
      userPhoneNumber.set(res.user.phoneNumber ?? '')

      if (!this.withoutTitle) pushRouter('/home')
    } catch (error) {
      console.error('Error signing in with Google:', error)
      isLoginLoading.set(false)
    }
  }

  private async signInWithBrightID() {
    if (!this.withoutTitle) {
      pushRouter('/brightid')
      return
    }

    this.dispatchEvent(new CustomEvent('onBrightLogin', { bubbles: true, composed: true }))
  }

  private async signInWithApple() {
    isLoginLoading.set(true)
    try {
      const data = await AppleID.auth.signIn()

      // Debug log

      if (!data.authorization) {
        throw new Error('Authorization data is missing')
      }

      const email = data.authorization.user?.email
      const firstName = data.authorization.user?.name?.firstName
      const lastName = data.authorization.user?.name?.lastName

      if (!email) {
        throw new Error('Email is required for registration')
      }

      userEmail.set(email)
      const id = await this.createBrightId(email)

      userBrightId.set(id)
      // Only update name if provided by Apple
      if (firstName) userFirstName.set(firstName)
      if (lastName) userLastName.set(lastName)
      userProfilePicture.set('')
      userPhoneNumber.set('')

      pushRouter('/home')
    } catch (error) {
      console.error('Error signing in with Apple:', error)
      // Add more detailed error logging
      if (error instanceof Error) {
        console.error('Error details:', error.message)
      }
    } finally {
      isLoginLoading.set(false)
    }
  }

  render() {
    if (this.withoutTitle) {
      return html` <div class="">
        ${isLoginLoading.get()
          ? html`
              <div class="loading-wrapper">
                <div>
                  <h2>Signing Up</h2>
                  <img src="${spinnerIcon}" alt="spinner" />
                </div>
              </div>
            `
          : html`
              <h2 class="form-title">Sign In</h2>
              <p class="form-desc">Use one of these integrations to login</p>
              <div class="email-wrapper">
                <div class="email-icon">
                  <img width="25" height="25" src="${EmailIcon}" alt="email" />
                </div>
                <input
                  .value="${inputText.get()}"
                  @input=${this.onInputChange}
                  type="email"
                  placeholder="Enter your email"
                  class="email-input"
                />
              </div>

              <div class="btn-wrapper">
                <button
                  @click=${this.onSubmit}
                  .disabled=${isLoginLoading.get()}
                  class="btn btn-email"
                >
                  Sign in with Email
                </button>
                <div class="btn-info">
                  <span>Security: Medium</span>
                  <span>Setup: 1 min</span>
                </div>
              </div>

              <div class="mini-divider">Or</div>

              <div class="mini-integrations">
                <div class="mini-integration-wrapper">
                  <button @click=${this.signInWithGoogle} class="btn-google btn">
                    <div class="btn-icon">
                      <img src="${googleIcon}" width="24" height="24" alt="Google" />
                    </div>
                  </button>
                  <div class="mini-info">Security: Low</div>
                </div>

                <div class="mini-integration-wrapper">
                  <button
                    @click=${this.signInWithApple}
                    id="appleid-signin"
                    data-color="black"
                    data-border="true"
                    data-type="sign in"
                    class="btn-apple btn"
                  >
                    <div class="btn-icon">
                      <img src="${appleIcon}" width="24" height="24" alt="Apple" />
                    </div>
                  </button>
                  <div class="mini-info">Security: Medium</div>
                </div>

                <div class="mini-integration-wrapper">
                  <button
                    @click=${this.signInWithBrightID}
                    id="brightid-signin"
                    data-color="black"
                    data-border="true"
                    data-type="sign in"
                    class="btn-brightid btn"
                  >
                    <img
                      class="btn-icon"
                      width="20"
                      height="20"
                      src="${brightIDIcon}"
                      alt="bright id"
                    />
                  </button>
                  <div class="mini-info green">Security: High</div>
                </div>
              </div>
            `}
      </div>`
    }

    return html`
      <div class="wrapper">
        <img src="/favicon.png" class="logo" alt="Aura" />

        <div class="container">
          <h1 class="title">Aura Get Verified</h1>
          <p class="info-text">Decentralized verification platform</p>

          <a href="https://brightid.gitbook.io/aura" target="_blank" class="desc-btn">
            <span>What is Aura?</span>
            <img src=${externalLinkIcon} alt="Aura" />
          </a>

          <div class="form-container">
            <div class="lamp-light"></div>

            ${isLoginLoading.get()
              ? html`
                  <div class="loading-wrapper">
                    <div>
                      <h2>Signing Up</h2>
                      <img width="25" height="25" src="${spinnerIcon}" alt="spinner" />
                    </div>
                  </div>
                `
              : html`
              <h2 class="form-title">Sign In</h2>
              <p class="form-desc">Use one of these integrations to login</p>
              <div class="email-wrapper">
                <div class="email-icon">
                  <img width="20" height="20" src="${EmailIcon}" alt="email" />
                </div>
                <input
                  .value="${inputText.get()}"
                  @input=${this.onInputChange}
                  type="email"
                  placeholder="Enter your email"
                  class="email-input"
                />
              </div>

              <div class="btn-wrapper">
                <button @click=${
                  this.onSubmit
                } .disabled=${isLoginLoading.get()} class="btn btn-email">
                  Sign in with Email
                </button>
                <div class="btn-info">
                  <span>Security: Medium</span>
                  <span>Setup: 1 min</span>
                </div>
              </div>

              <div class="divider"></div>

              <div class="btn-wrapper">
                <button @click=${this.signInWithGoogle} class="btn-google btn">
                  <div class="btn-icon">
                    <img src="${googleIcon}" width="24" height="24" alt="Google" />
                  </div>
                  Sign in with Google
                </button>
                <div class="btn-info">
                  <span>Security: Low</span>
                  <span>Setup: 1 min</span>
                </div>
              </div>

              <div class="btn-wrapper">
                <button @click=${
                  this.signInWithApple
                } id="appleid-signin" data-color="black" data-border="true" data-type="sign in" class="btn-apple btn">
                  <div class="btn-icon">
                    <img src="${appleIcon}" width="24" height="24" alt="Apple" />
                  </div>
                  Sign in with Apple
                </button>
                <div class="btn-info">
                  <span>Security: Medium</span>
                  <span>Setup: 1 min</span>
                </div>
              </div>

              <div class="btn-wrapper">
                <button @click=${
                  this.signInWithBrightID
                } id="brightid-signin" data-color="black" data-border="true" data-type="sign in" class="btn-brightid btn">
                    <img class="btn-icon" width="20" height="20" src="${brightIDIcon}" alt="bright id" />
                  Sign in with BrightID
                </button>
                <div class="btn-info green">
                  <span>Security: High</span>
                  <span>Setup: 5 min</span>
                </div>
              </div>

              <p class="form-footer">By Signing in you will agree to our privacy policy</p>
            </div>
            `}
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
            <a href="/privacy-policy" class="privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    `
  }
}
