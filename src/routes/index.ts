import { LitElement, html, css } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("home-page")
export class HomePage extends LitElement {
  static styles = css`
    .wrapper {
      margin-top: 80px;
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
      color: #fff;
      cursor: pointer;
    }
    .desc-btn span {
      margin-right: 4px;
    }

    /* form box */
    .form-container {
      margin: 30px 0 16px;
      position: relative;
      border-radius: 12px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.05);
      padding: 24px;
      overflow: hidden;
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
      margin: 8px 0 24px;
      color: #6c7278;
      font-size: 0.875rem;
      text-align: center;
    }

    /* email input */
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
      background: transparent;
      border: 1px solid #545454;
      border-radius: 12px;
      color: #fff;
      font-size: 1rem;
    }
    .email-input::placeholder {
      color: #acb5bb;
    }

    /* buttons */
    .btn {
      display: block;
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
      margin-right: 8px;
      height: 24px;
      width: 24px;
    }

    .form-footer {
      text-align: center;
      color: #acb5bb;
      font-size: 0.875rem;
    }

    /* bottom bar */
    .bottom-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      z-index: 10;
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
      color: #000;
    }
    .privacy {
      color: #fff;
      text-decoration: none;
    }
  `

  render() {
    return html`
      <div class="wrapper">
        <img src="/favicon.png" class="logo" alt="Aura" />

        <div class="container">
          <h1 class="title">Aura Get Verified</h1>
          <p class="info-text">Decentralized verification platform</p>

          <button class="desc-btn">
            <span>What is Aura?</span>
            <lit-icon icon="plus" iconset="iconset"></lit-icon>
          </button>

          <div class="form-container">
            <div class="lamp-light"></div>

            <h2 class="form-title">Sign In</h2>
            <p class="form-desc">Use one of these integrations to login</p>

            <div class="email-wrapper">
              <div class="email-icon"><MailIcon /></div>
              <input
                type="email"
                placeholder="Enter your email"
                class="email-input"
              />
            </div>

            <button class="btn btn-email">Sign in with Email</button>

            <div class="divider"></div>

            <button class="btn-google btn">
              <div class="btn-icon">
                <!-- Google SVG here -->
              </div>
              Sign in with Google
            </button>

            <button class="btn-apple btn">
              <div class="btn-icon">
                <!-- Apple SVG here -->
              </div>
              Sign in with Apple
            </button>

            <p class="form-footer">
              By Signing in you will agree to our privacy policy
            </p>
          </div>
        </div>

        <div class="bottom-bar">
          <div class="brand">
            <svg class="brand-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path fill="#0d0d1b" d="M12 6v12M6 12h12" />
            </svg>
            <span class="brand-name">Bright ID</span>
          </div>
          <a href="#" class="privacy">Privacy Policy</a>
        </div>
      </div>
    `
  }
}
