import { css, html, LitElement, type CSSResultGroup } from "lit"
import { property, customElement } from "lit/decorators.js"
import levelImage from "@/assets/images/level.png"
import thumbsUpImage from "@/assets/images/thumbs-up.png"
import ratingImage from "@/assets/images/rating.png"
import checkboxIcon from "@/assets/icons/checkbox-green.svg"

@customElement("verification-page")
export class VerificationPage extends LitElement {
  static styles?: CSSResultGroup = css`
    .app-container {
      text-align: left;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--background);
      color: var(--foreground);

      --background: #0d0d1b;
      --foreground: #ffffff;
      --muted: #8c8c8c;
      --accent: #144bb9;
      --highlight: #15c8ec;
      --border: #1b2128;
    }

    .status-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
    }

    .time {
      font-size: 14px;
      font-weight: 500;
    }

    .status-icons {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .status-icon {
      height: 12px;
      width: 16px;
    }

    .battery-icon {
      height: 16px;
      width: 24px;
      display: flex;
      align-items: center;
    }

    .battery-outline {
      height: 12px;
      width: 12px;
      border: 2px solid white;
      border-radius: 2px;
    }

    .battery-tip {
      height: 4px;
      width: 4px;
      background-color: white;
      border-radius: 50%;
      margin-left: 2px;
    }

    .main-content {
      flex: 1;
      padding: 0 24px;
      padding-bottom: 80px;
    }

    .title {
      font-size: 30px;
      font-weight: 700;
      margin-top: 8px;
      margin-bottom: 24px;
    }

    .image-container {
      position: relative;
      width: 100%;
      height: 208px;
      margin-bottom: 16px;
      border-radius: 12px;
      overflow: hidden;
    }

    .image {
      object-fit: cover;
    }

    .level-requirement {
      text-align: center;
      margin-bottom: 32px;
    }

    .highlight-text {
      color: var(--highlight);
    }

    .steps-heading {
      color: #e4dad7;
      text-align: center;
      margin-top: 35px;

      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.7px;
    }

    .timeline {
      position: relative;
    }

    .timeline-line {
      position: absolute;
      left: 19.5px;
      top: 24px;
      width: 10px;
      height: calc(100% - 60px);
      background: rgba(224, 191, 184, 0.12);
      z-index: 0;
    }

    .step {
      display: flex;
      margin-bottom: 48px;
      position: relative;
      z-index: 10;
    }

    .step:last-child {
      margin-bottom: 0;
    }

    .step-icon {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      background-color: var(--accent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .step-content {
      margin-left: 16px;
    }

    .step-title {
      color: #e4dad7;

      text-overflow: ellipsis;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.425px;
    }

    .step-description {
      margin-top: 4px;
      color: var(--muted);
    }

    .step-list {
      margin-top: 8px;
      color: #dadada;
      list-style-type: none;
      padding-left: 0;
    }

    .step-list-item {
      display: flex;
      align-items: flex-start;
      color: rgba(235, 213, 209, 0.62);

      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 135%;
      letter-spacing: -0.075px;
    }

    .step-list-bullet {
      margin-right: 8px;
    }

    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--background);
      border-top: 1px solid var(--border);
      padding: 16px 24px;
    }

    .nav-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--muted);
    }

    .nav-button.active {
      color: var(--foreground);
    }
  `

  protected render() {
    return html` <div class="app-container">
      <div class="main-content">
        <h1 class="title">UBI Raffle Verification</h1>

        <div class="image-container">
          <img
            src="/images/project-image.png?height=208&width=368"
            alt="Business people in conversation"
            fill
            class="image"
          />
        </div>

        <div class="level-requirement">
          <span class="highlight-text">Requires Level: </span>
          <span>4</span>
        </div>

        <h2 class="steps-heading">Steps to achieving Level 4</h2>

        <div class="timeline">
          <div class="timeline-line"></div>

          <div class="step">
            <div class="step-icon">
              <img
                class=""
                width="40px"
                height="40px"
                alt="xp-levelup"
                src="${levelImage}"
              />
            </div>
            <div class="step-content">
              <h5 class="step-title">Reach Aura Level 1</h5>
              <ul class="step-list">
                <li class="step-list-item">
                  <span class="step-list-bullet">•</span>
                  <span>Find verifiers to evaluate you</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-icon">
              <img
                class=""
                width="30px"
                height="30px"
                alt="high-evaluation"
                src="${thumbsUpImage}"
              />
            </div>
            <div class="step-content">
              <h3 class="step-title">Get 2 medium evaluations</h3>
              <ul class="step-list">
                <li class="step-list-item">
                  <span class="step-list-bullet">•</span>
                  <span
                    >Get two evaluations of +2 from verifiers with level 2 or
                    higher</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-icon">
              <img
                class=""
                width="30px"
                height="30px"
                alt="star"
                src="${ratingImage}"
              />
            </div>
            <div class="step-content">
              <h3 class="step-title">Get a score of 350M+</h3>
              <p class="step-description">
                Get enough evaluations to raise your score to 350M
              </p>
            </div>
          </div>

          <div class="step">
            <div class="step-icon">
              <img
                class=""
                width="40px"
                height="40px"
                alt="checkbox"
                src="${checkboxIcon}"
              />
            </div>
            <div class="step-content">
              <h3 class="step-title">Get Verified</h3>
              <p class="step-description">Receive your verification status.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`
  }
}
