import { css, html, LitElement, type CSSResultGroup } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("share-page")
export class SharePage extends LitElement {
  static styles?: CSSResultGroup = css`
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #0d0d1b;
      color: #ffffff;
    }

    .main-content {
      flex: 1;
      padding: 2rem 1rem;
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
      background-color: #0d0d1b;
      border: 1px solid #333;
      border-radius: 0.75rem;
      padding: 1rem;
      margin-bottom: 1.5rem;
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

    /* Platform buttons */
    .platform-buttons {
      display: flex;
      justify-content: space-around;
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
    }

    .platform-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #111;
      margin-bottom: 0.25rem;
    }

    .platform-label {
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .qr-container {
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: center;
    }

    .qr-code {
      width: 16rem;
      height: 16rem;
      position: relative;
    }

    .qr-image {
      object-fit: contain;
    }

    .qr-logo-container {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .qr-logo {
      background-color: #ffffff;
      padding: 0.5rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .qr-logo svg {
      width: 3rem;
      height: 3rem;
      background-color: #ff3d00;
      border-radius: 0.75rem;
      padding: 0.5rem;
    }

    /* Divider */
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
    }

    .divider-text {
      padding: 0 1rem;
      color: #8c8c8c;
    }

    /* Profile link */
    .profile-link {
      text-align: center;
      margin-bottom: 2rem;
    }

    .link {
      color: #8c8c8c;
      text-decoration: underline;
    }

    /* Social buttons */
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
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #111;
      margin-bottom: 0.25rem;
    }

    .social-label {
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    /* Footer */
    .footer {
      border-top: 1px solid #333;
      background-color: #0d0d1b;
    }

    .nav-container {
      display: flex;
      justify-content: space-around;
      padding: 1rem 0;
      max-width: 480px;
      margin: 0 auto;
    }

    .nav-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      color: #8c8c8c;
    }

    .nav-icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    /* Responsive adjustments */
    @media (max-width: 480px) {
      .main-content {
        padding: 1.5rem 1rem;
      }

      .qr-code {
        width: 14rem;
        height: 14rem;
      }

      .social-buttons {
        margin-bottom: 2rem;
      }

      .platform-icon,
      .social-icon {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    @media (max-width: 360px) {
      .title {
        font-size: 1.5rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .qr-code {
        width: 12rem;
        height: 12rem;
      }

      .platform-icon,
      .social-icon {
        width: 2.25rem;
        height: 2.25rem;
      }

      .platform-label,
      .social-label {
        font-size: 0.75rem;
      }
    }
  `

  protected render() {
    return html` <div class="container">
      <main class="main-content">
        <div class="header">
          <h1 class="title">Find Verifiers</h1>
          <p class="subtitle">Found 2 verifiers. 1 evaluated you.</p>
          <p class="text-muted">Need at least 1 more evaluation to level up</p>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="icon-wrapper">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  rx="2"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="9" cy="10" r="2" stroke="white" strokeWidth="2" />
                <path
                  d="M15 8H17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 12H17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 16H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div class="card-content">
              <h2 class="card-title">Search Contacts for Verifiers</h2>
              <p class="card-description">
                Discover who in your contacts is in Aura.
              </p>
              <button class="link-button">Why is this private?</button>
            </div>
          </div>

          <div class="platform-buttons">
            <button class="platform-button">
              <div class="platform-icon google">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="#34A853"
                  />
                </svg>
              </div>
              <span class="platform-label">Google</span>
            </button>
            <button class="platform-button">
              <div class="platform-icon apple">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.94 5.19C15.88 4.03 16.57 2.52 16.38 1C15.03 1.05 13.4 1.88 12.43 3.03C11.55 4.05 10.71 5.61 10.93 7.07C12.42 7.19 14 6.35 14.94 5.19Z"
                    fill="white"
                  />
                  <path
                    d="M18.74 12.77C18.74 9.27 21.69 8.17 21.82 8.11C20.21 5.71 17.76 5.36 16.89 5.33C14.76 5.11 12.74 6.64 11.66 6.64C10.58 6.64 8.92 5.36 7.14 5.39C4.83 5.42 2.69 6.77 1.53 8.9C-0.82 13.2 0.93 19.5 3.19 22.93C4.31 24.61 5.67 26.5 7.43 26.45C9.16 26.39 9.8 25.33 11.89 25.33C13.97 25.33 14.56 26.45 16.37 26.42C18.22 26.39 19.39 24.71 20.47 23.02C21.76 21.08 22.27 19.18 22.3 19.08C22.24 19.05 18.75 17.61 18.74 12.77Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span class="platform-label">Apple</span>
            </button>
            <button class="platform-button">
              <div class="platform-icon contacts">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span class="platform-label">Contacts</span>
            </button>
          </div>
        </div>

        <div class="qr-container">
          <div class="qr-code">
            <image
              src="/placeholder.svg?height=256&width=256"
              alt="QR Code"
              width="{256}"
              height="{256}"
              class="qr-image"
            />
            <div class="qr-logo-container">
              <div class="qr-logo">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                    fill="white"
                  />
                  <path d="M15 8H9V16H15V8Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="divider">
          <div class="divider-line"></div>
          <span class="divider-text">Or</span>
          <div class="divider-line"></div>
        </div>

        <div class="profile-link">
          <a href="#" class="link"> Aura Profile Link </a>
        </div>

        <div class="social-buttons">
          <button class="social-button">
            <div class="social-icon twitter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.41 16.38C6.13 16.89 6.99 17.17 7.89 17.17C6.37 18.38 4.49 19.03 2.56 19C2.22 19 1.88 18.98 1.54 18.93C3.44 20.15 5.7 20.84 8 20.84C16 20.84 20.33 14.25 20.33 8.58C20.33 8.39 20.33 8.2 20.32 8.01C21.16 7.41 21.88 6.66 22.46 5.79V6Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="social-label">Twitter</span>
          </button>
          <button class="social-button">
            <div class="social-icon whatsapp">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="#25D366"
                />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="#25D366"
                />
                <path
                  d="M16.7 7.3C15.4 6 13.7 5.3 11.9 5.3C8.2 5.3 5.2 8.3 5.2 12C5.2 13.2 5.5 14.3 6.1 15.3L5 19L8.8 17.9C9.7 18.4 10.8 18.7 11.9 18.7C15.6 18.7 18.6 15.7 18.6 12C18.6 10.2 17.9 8.5 16.7 7.3ZM11.9 17.3C10.9 17.3 9.9 17 9 16.5L8.8 16.4L6.6 17.1L7.3 15L7.2 14.8C6.6 13.9 6.3 12.9 6.3 11.9C6.3 9 8.7 6.6 11.9 6.6C13.4 6.6 14.8 7.2 15.8 8.2C16.8 9.2 17.4 10.6 17.4 12.1C17.3 14.9 14.8 17.3 11.9 17.3ZM14.8 13.2C14.6 13.1 13.8 12.7 13.6 12.6C13.4 12.5 13.3 12.5 13.2 12.7C13.1 12.9 12.7 13.3 12.6 13.4C12.5 13.5 12.4 13.5 12.2 13.4C11.4 13 10.8 12.7 10.2 11.9C10 11.6 10.3 11.6 10.5 11.2C10.6 11.1 10.5 11 10.5 10.9C10.4 10.8 10.1 10 10 9.7C9.9 9.3 9.7 9.4 9.6 9.4C9.5 9.4 9.4 9.4 9.3 9.4C9.2 9.4 9 9.5 8.8 9.7C8.6 9.9 8.2 10.3 8.2 11.1C8.2 11.9 8.8 12.7 8.9 12.8C9 12.9 10.1 14.6 11.8 15.3C13.1 15.9 13.5 15.9 14 15.8C14.3 15.8 15 15.4 15.1 15.1C15.2 14.8 15.2 14.5 15.2 14.4C15.1 14.3 15 14.3 14.8 14.2V13.2Z"
                  fill="#25D366"
                />
              </svg>
            </div>
            <span class="social-label">Whatsapp</span>
          </button>
          <button class="social-button">
            <div class="social-icon telegram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="#0088CC"
                />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="#0088CC"
                />
                <path
                  d="M9.8 14.5L9.74 14.15L9.4 14.25C8.2 14.67 7.25 15 6.5 15.12C7.5 14.42 8.37 13.5 9.14 12.4C9.86 11.37 10.22 10.27 10.22 9.22C10.22 8.5 10.03 7.9 9.67 7.4C9.3 6.9 8.8 6.5 8.17 6.25C7.55 6 6.85 5.87 6.1 5.87C5.35 5.87 4.67 6 4.05 6.25C3.42 6.5 2.92 6.9 2.55 7.4C2.18 7.9 2 8.5 2 9.22C2 9.95 2.18 10.55 2.55 11.05C2.92 11.55 3.42 11.95 4.05 12.2C4.67 12.45 5.35 12.57 6.1 12.57C6.4 12.57 6.7 12.55 7 12.5L7.35 12.45L7.25 12.8C7.12 13.42 6.95 14 6.75 14.55C7.5 14.42 8.45 14.1 9.65 13.67L10 13.57L9.95 13.92C9.9 14.12 9.85 14.32 9.8 14.5ZM6.1 11.87C5.5 11.87 4.95 11.77 4.45 11.57C3.95 11.37 3.55 11.07 3.25 10.7C2.95 10.32 2.8 9.82 2.8 9.22C2.8 8.62 2.95 8.12 3.25 7.75C3.55 7.37 3.95 7.07 4.45 6.87C4.95 6.67 5.5 6.57 6.1 6.57C6.7 6.57 7.25 6.67 7.75 6.87C8.25 7.07 8.65 7.37 8.95 7.75C9.25 8.12 9.4 8.62 9.4 9.22C9.4 9.82 9.25 10.32 8.95 10.7C8.65 11.07 8.25 11.37 7.75 11.57C7.25 11.77 6.7 11.87 6.1 11.87Z"
                  fill="#0088CC"
                />
              </svg>
            </div>
            <span class="social-label">Telegram</span>
          </button>
          <button class="social-button">
            <div class="social-icon sms">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
                  fill="white"
                />
                <path
                  d="M7 9H17V11H7V9ZM7 12H14V14H7V12ZM7 6H17V8H7V6Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="social-label">SMS</span>
          </button>
          <button class="social-button">
            <div class="social-icon more">
              <MoreHorizontal class="icon" />
            </div>
            <span class="social-label">More</span>
          </button>
        </div>
      </main>

      <footer class="footer">
        <div class="nav-container">
          <button class="nav-button">
            <Home class="nav-icon" />
          </button>
          <button class="nav-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="nav-icon"
            >
              <path
                d="M13.5 8.5L14.5 9.5L5.5 18.5H4.5V17.5L13.5 8.5ZM16 2C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3C17 3.26522 16.8946 3.51957 16.7071 3.70711C16.5196 3.89464 16.2652 4 16 4C15.7348 4 15.4804 3.89464 15.2929 3.70711C15.1054 3.51957 15 3.26522 15 3C15 2.73478 15.1054 2.48043 15.2929 2.29289C15.4804 2.10536 15.7348 2 16 2ZM21.7 6.29C21.8 6.19 21.9 6.1 22 6C22.553 6 23 5.553 23 5C23 4.447 22.553 4 22 4C21.9 4 21.8 4.1 21.7 4.1L19.5 6.3L17.8 4.6C17.3 4.1 16.7 4 16 4L16.9 4.9L7 14.8V17.1L15.8 8.3L19.2 11.7L21.7 6.3V6.29Z"
                fill="#8c8c8c"
              />
            </svg>
          </button>
          <button class="nav-button">
            <Bell class="nav-icon" />
          </button>
          <button class="nav-button">
            <User class="nav-icon" />
          </button>
          <button class="nav-button">
            <Share2 class="nav-icon" />
          </button>
        </div>
      </footer>
    </div>`
  }
}
