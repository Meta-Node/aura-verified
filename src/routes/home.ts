import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("my-home")
export class HomeElement extends LitElement {
  static styles = css`

    .status-bar {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .signal {
      display: flex;
      align-items: flex-end;
      gap: 2px;
    }

    .signal-bar {
      width: 4px;
      background-color: white;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }

    .signal-bar:nth-child(1) {
      height: 8px;
    }

    .signal-bar:nth-child(2) {
      height: 12px;
    }

    .signal-bar:nth-child(3) {
      height: 16px;
    }

    .signal-bar:nth-child(4) {
      height: 20px;
    }

    .wifi {
      margin-left: 4px;
    }

    .wifi svg {
      width: 16px;
      height: 16px;
    }

    .battery {
      width: 24px;
      height: 12px;
      background-color: white;
      border-radius: 2px;
    }

    .profile-card-wrapper {
      position: relative;

    }

    .profile-card {
      margin: 32px 0;
      background-image: linear-gradient(to top right, rgba(46, 51, 90, 0.26), rgba(28, 27, 51, 0.26) 100%);
      backdrop-filter: blur(21px);
      border-radius: 24px;
      padding: 15px;
      border-top: 1px solid #ffffff30;
    }

    .profile-header {
      display: flex;
      align-items: start;

      text-align: left;

      gap: 24px;
      margin-bottom: 16px;
    }

    .profile-picture {
      width: 64px;
      height: 64px;
      border-radius: 6px;
      overflow: hidden;
    }

    .profile-picture img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-info h2 {
      font-size: small;
      font-weight: 700;
    }

    .profile-info p {
      color: #dadada;
      font-size: smaller;
    }

    .profile-stats {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .stat {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .stat span:first-child {
      color: #dadada;
    }

    .stat span:last-child {
      font-weight: 700;
      font-size: 16px;
    }

    .level-progress {
      color: #ccc;
      font-size: 12px;
    }

    .progress-bar {
      width: 100%;
      height: 12px;
      background-color: #313042;
      border-radius: 2px;
      overflow: hidden;
    }

    .progress {
      height: 100%;
      background-color: #5500ff;
      border-radius: 9999px;
    }

    .apps-section {
      text-align: left;
      padding: 0 16px;
      margin-bottom: 32px;
    }

    .apps-section h2 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    .verification-card {
      background-color: rgba(21, 22, 44, 0.8);
      backdrop-filter: blur(4px);
      border-radius: 24px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .card-header h3 {
      font-size: 20px;
      font-weight: 700;
    }

    .status {
      padding: 4px 16px;
      border-radius: 9999px;
      font-size: 14px;
    }

    .status.in-progress {
      background-color: #0093b1;
      color: white;
    }

    .status.completed {
      background-color: rgba(5, 150, 105, 0.2);
      color: #10b981;
    }

    .level-requirement {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }

    .level-requirement span:first-child {
      color: #15c8ec;
    }

    .level-requirement span:last-child {
      font-weight: 700;
    }

    .progress-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .continue-button {
      width: 100%;
      background-color: #2f6de9;
      color: white;
      padding: 16px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 18px;
      text-align: center;
    }

    .verified {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .checkmark {
      background-color: #10b981;
      border-radius: 50%;
      padding: 12px;
      margin-bottom: 16px;
    }

    .checkmark svg {
      width: 24px;
      height: 24px;
      color: white;
    }

    .verified-date {
      color: #747474;
    }



    .profile-card-bg {
      position: absolute;
      inset: 3px;
      border-radius: 24px;
      z-index: -10;
    }
  `

  protected render() {
    return html`
      <div class="body">
        <div class="profile-card-wrapper">

          <div class="profile-card">
            <div class="profile-header">
              <div class="profile-picture">
                <img
                  src="/images/profile-photo.png?height=64&width=64"
                  alt="Profile picture"
                />
              </div>
              <div class="profile-info">
                <h2>Ali Maktabi</h2>
                <p>maktabi876@gmail.com</p>
              </div>
            </div>
            <div class="profile-stats">
              <div class="stat">
                <span>Level</span>
                <span>3</span>
              </div>
              <div class="stat">
                <span>Score</span>
                <span>150M</span>
              </div>
              <div class="level-progress">Level 4 at <strong>500M</strong></div>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 30%;"></div>
            </div>

        </div>
        </div>
          <div class="profile-card-bg">
            <div class="profile-header">
              <div class="profile-picture">
                <img
                  src="/images/profile-photo.png?height=64&width=64"
                  alt="Profile picture"
                />
              </div>
              <div class="profile-info">
                <h2>Ali Maktabi</h2>
                <p>maktabi876@gmail.com</p>
              </div>
            </div>
            <div class="profile-stats">
              <div class="stat">
                <span>Level</span>
                <span>3</span>
              </div>
              <div class="stat">
                <span>Score</span>
                <span>150M</span>
              </div>
              <div class="level-progress">Level 4 at 500M</div>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 30%;"></div>
            </div>
          </div>

        <div class="apps-section">
          <h2>Apps needing verification</h2>
          <div class="verification-card">
            <div class="card-header">
              <h3>UBI Raffle Verification</h3>
              <div class="status in-progress">In Progress</div>
            </div>
            <div class="level-requirement">
              <span>Requires Level:</span>
              <span>4</span>
            </div>
            <div class="progress-info">
              <span>Progress</span>
              <span>2/5 completed</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 40%;"></div>
            </div>
            <button class="continue-button">Continue</button>
          </div>
          <div class="verification-card">
            <div class="card-header">
              <h3>Project Gamma</h3>
              <div class="status completed">Completed</div>
            </div>
            <div class="level-requirement">
              <span>Requires Level:</span>
              <span>3</span>
            </div>
            <div class="verified">
              <div class="checkmark">
                <svg
                  class="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <span class="verified-date">Verified on Mar 15, 2025</span>
            </div>
          </div>
        </div>

       
      </div>
    `
  }
}
