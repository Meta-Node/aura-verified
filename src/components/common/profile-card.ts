import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("profile-card")
export class ProfileCard extends LitElement {
  static styles = css`
    .profile-card {
      background-image: linear-gradient(
        to top right,
        rgba(46, 51, 90, 0.26),
        rgba(28, 27, 51, 0.26) 100%
      );
      backdrop-filter: blur(21px);
      border-radius: 24px;
      padding: 25px 20px;
      border-top: 1px solid #ffffff30;
    }

    .profile-header {
      display: flex;
      align-items: center;

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
    .profile-info {
      flex: 1 1 auto;
    }

    .profile-info h2 {
      margin: 0;
      font-size: medium;
      font-weight: 700;
    }

    .profile-info p {
      margin: 4px 0 12px 0px;
      color: #dadada;
      font-size: smaller;
    }

    .profile-stats {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 14px;
      max-width: 250px;
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
      font-size: 12px;
    }

    .level-progress {
      color: #ebebeb;
      font-size: 9px;
      font-weight: 300;
      letter-spacing: 1px;
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
  `

  protected render() {
    return html`
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
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress" style="width: 30%;"></div>
        </div>
        <slot></slot>
      </div>
    `
  }
}
