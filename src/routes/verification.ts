import checkboxIcon from '@/assets/icons/checkbox-green.svg'
import levelImage from '@/assets/images/level.png'
import { projects } from '@/states/projects'
import { levelUpProgress } from '@/states/user'
import type { Project } from '@/types/projects'
import { getProjects, queryClient } from '@/utils/apis'
import { EvaluationCategory } from '@/utils/aura'
import { getLevelupProgress } from '@/utils/score'
import { signal, SignalWatcher } from '@lit-labs/signals'
import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const focusedProject = signal(null as Project | null)

const isPassed = signal(false)

@customElement('verification-page')
export class VerificationPage extends SignalWatcher(LitElement) {
  @property({
    type: Number
  })
  projectId!: number

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
      object-fit: contain;
      height: 208px;
      width: 368px;
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

    .back-btn {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 24px;
      background: var(--accent, #144bb9);
      color: #fff;
      border-radius: 8px;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      box-shadow: 0 2px 8px rgba(20, 75, 185, 0.08);
      transition: background 0.2s;
    }

    .back-btn:hover {
      background-color: #0d3466;
    }

    .nav-button.active {
      color: var(--foreground);
    }
  `

  connectedCallback(): void {
    super.connectedCallback()

    const fetchData = queryClient
      .ensureQueryData({
        queryKey: ['projects'],
        queryFn: getProjects
      })
      .then((res) => {
        projects.set(res)

        focusedProject.set(res.find((item) => item.id === this.projectId) ?? null)
      })

    getLevelupProgress({ evaluationCategory: EvaluationCategory.SUBJECT }).then((res) => {
      isPassed.set(res.isUnlocked)
      levelUpProgress.set(res.requirements)
    })
  }

  protected render() {
    return html` <div class="app-container">
      <div class="main-content">
        <h1 class="title">${focusedProject.get()?.name}</h1>

        <div class="image-container">
          <img
            src=${focusedProject.get()?.image ?? '/images/project-image.png?height=208&width=368'}
            alt="Business people in conversation"
            class="image"
          />
        </div>

        <div class="level-requirement">
          <span class="highlight-text">Requires Level: </span>
          <span>${focusedProject.get()?.requirementLevel}</span>
        </div>

        ${!focusedProject.get()
          ? 'Loading ....'
          : levelUpProgress
              .get()
              .filter((item) => item.level <= focusedProject.get()!.requirementLevel).length === 0
          ? html`<div
              style="text-align:center;margin:32px 0;color:lightgreen;font-size:20px;font-weight:600;"
            >
              🎉 You are already verified!<br />
              <span style="color:#dadada;font-size:16px;font-weight:400;"
                >You can continue your progress in the app.</span
              >
              <br />
              <a href="/home" class="back-btn">Back to Main App</a>
            </div>`
          : html`
              <div class="timeline">
                <div class="timeline-line"></div>

                ${levelUpProgress
                  .get()
                  .filter((item) => item.level >= focusedProject.get()!.requirementLevel)
                  .map(
                    (req, idx) => html`
                      <div class="step">
                        <div class="step-icon">
                          <img
                            class=""
                            width="40px"
                            height="40px"
                            alt="${req.status === 'passed' ? 'checkbox' : 'levelup'}"
                            src="${req.status === 'passed' ? checkboxIcon : levelImage}"
                          />
                        </div>
                        <div class="step-content">
                          <h5 class="step-title">${req.reason}</h5>
                          <p class="step-description">
                            Status:
                            <span style="color:${req.status === 'passed' ? 'lightgreen' : 'orange'}"
                              >${req.status}</span
                            >
                          </p>
                        </div>
                      </div>
                    `
                  )}
              </div>
            `}
      </div>
    </div>`
  }
}
