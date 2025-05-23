import { css, html, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("verification-card")
export class VerificationCard extends LitElement {
  @property({})
  name = "UBI Raffle Verification"

  @property({})
  status = "In Progress"

  @property({ type: Number })
  levelRequirement = 4

  @property({ type: Number })
  stepsCompleted = 2

  @property({ type: Number })
  totalSteps = 4

  static styles = css`
    .verification-card {
      background: linear-gradient(
        to top right,
        rgba(46, 51, 90, 0.26),
        rgba(28, 27, 51, 0.26) 100%
      );
      backdrop-filter: blur(4px);
      border: 1px solid #444;
      border-radius: 12px;
      padding: 14px 10px;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .card-header h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
    }

    .status {
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: smaller;
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
      padding: 10px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 15px;
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
  `

  render() {
    return html`
      <div class="verification-card">
        <div class="card-header">
          <h3>${this.name}</h3>
          <div class="status in-progress">${this.status}</div>
        </div>
        <div class="level-requirement">
          <span>Requires Level:</span>
          <span>${this.levelRequirement}</span>
        </div>
        <div class="progress-info">
          <span>Progress</span>
          <span>${this.stepsCompleted}/${this.totalSteps} completed</span>
        </div>
        <div class="progress-bar">
          <div
            class="progress"
            style="width: ${(this.stepsCompleted / this.totalSteps) * 100}%;"
          ></div>
        </div>
        <button class="continue-button">Continue</button>
      </div>
    `
  }
}
