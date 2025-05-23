import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

import "../components/common/verification-card.ts"

@customElement("my-home")
export class HomeElement extends LitElement {
  static styles = css`
    .status-bar {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .profile-card-wrapper {
      position: relative;
    }

    .profile-card {
      margin: 32px 0;
      background-image: linear-gradient(
        to top right,
        rgba(46, 51, 90, 0.26),
        rgba(28, 27, 51, 0.26) 100%
      );
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
          <verification-card
            name="UBI Raffle Verification"
            status="In Progress"
            levelRequirement="4"
            stepsCompleted="2"
            totalSteps="5"
          ></verification-card>
          <verification-card
            name="UBI Raffle Verification"
            status="In Progress"
            levelRequirement="4"
            stepsCompleted="2"
            totalSteps="5"
          ></verification-card>
        </div>
      </div>
    `
  }
}
