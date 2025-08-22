import { projects } from '@/states/projects'
import { levelUpProgress, userBrightId } from '@/states/user'
import { Project } from '@/types/projects'
import { getProjects, queryClient } from '@/utils/apis'
import { EvaluationCategory } from '@/utils/aura'
import { getLevelupProgress } from '@/utils/score'
import { signal, SignalWatcher } from '@lit-labs/signals'
import { css, CSSResultGroup, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@/routes/brightid'
import '@/routes/index'

const focusedProject = signal(null as Project | null)
const isPassed = signal(false)

const isBrightIDSection = signal(false)

@customElement('project-verification')
export class ProjectVerificationElement extends SignalWatcher(LitElement) {
  @property({
    type: Number
  })
  projectId!: number

  static styles?: CSSResultGroup = css`
    .title {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
      margin-bottom: 10px;
      text-align: center;
    }

    .image-container {
      width: 100%;
      height: 100px;
      margin-bottom: 5px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }

    .level-requirement {
      text-align: center;
      margin-bottom: 14px;
      font-size: 16px;
    }

    .highlight-text {
      color: var(--highlight, #15c8ec);
    }

    .steps-heading {
      color: #e4dad7;
      text-align: center;
      margin-bottom: 24px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.5px;
    }

    .timeline {
      position: relative;
      padding-left: 16px;
    }

    .step {
      display: flex;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
      text-align: left;
    }

    .step-content {
      flex: 1;
    }

    .step-title {
      color: white;
      font-size: 16px;
      font-weight: 600;
      margin: 10px 0;
      letter-spacing: -0.4px;
    }

    .step-description {
      margin-top: 4px;
      color: var(--muted, #8c8c8c);
      font-size: 14px;
    }

    .back-btn {
      display: inline-block;
      margin: 24px auto 0;
      padding: 8px 20px;
      background: var(--accent, #144bb9);
      color: #fff;
      border-radius: 6px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      transition: background 0.2s;
    }

    .back-btn:hover {
      background-color: #0d3466;
    }

    .mt-5 {
      margin-top: 20px;
    }
  `

  connectedCallback(): void {
    super.connectedCallback()

    window.parent.postMessage(JSON.stringify({ type: 'app-ready', app: 'aura-get-verified' }), '*')
    queryClient
      .ensureQueryData({
        queryKey: ['projects'],
        queryFn: getProjects
      })
      .then((res) => {
        projects.set(res)
        focusedProject.set(res.find((item) => item.id === this.projectId) ?? null)
      })
      .then(() => {
        getLevelupProgress({ evaluationCategory: EvaluationCategory.SUBJECT }).then((res) => {
          const stepsToComplete = res.requirements.filter(
            (item) => item.level === focusedProject.get()?.requirementLevel
          )

          const isPassedRequirements =
            stepsToComplete.filter((item) => item.status === 'passed').length === 0

          isPassed.set(isPassedRequirements)

          levelUpProgress.set(stepsToComplete)
        })
      })
  }

  protected onLoginWithBrightID() {
    isBrightIDSection.set(true)
  }

  protected offLoginWithBrightID() {
    isBrightIDSection.set(false)
  }

  protected onUserVerified() {
    window.parent.postMessage('{"type": "verification-success", "app": "aura-get-verified"}', '*')
  }

  protected render() {
    if (!userBrightId.get()) {
      if (isBrightIDSection.get()) {
        return html`
          <div class="mt-5"></div>
          <brightid-login
            @offBrightIDSection=${this.offLoginWithBrightID}
            withoutTitle
          ></brightid-login>
        `
      }

      return html`
        <h1 class="title">${focusedProject.get()?.name}</h1>

        <div class="image-container">
          <img
            src=${focusedProject.get()?.image ?? '/images/project-image.png'}
            alt="Project image"
            class="image"
          />
        </div>

        <div class="level-requirement">
          <span class="highlight-text">Requires Level: </span>
          <span>${focusedProject.get()?.requirementLevel}</span>
        </div>

        <home-page @onBrightLogin=${this.onLoginWithBrightID} withoutTitle></home-page>
      `
    }

    return html`
      <h1 class="title">${focusedProject.get()?.name}</h1>

      <div class="image-container">
        <img
          src=${focusedProject.get()?.image ?? '/images/project-image.png?height=160&width=300'}
          alt="Project image"
          class="image"
        />
      </div>

      <div class="level-requirement">
        <span class="highlight-text">Requires Level: </span>
        <span>${focusedProject.get()?.requirementLevel}</span>
      </div>

      ${!focusedProject.get()
        ? 'Loading ...'
        : levelUpProgress.get().filter((item) => item.status === 'incomplete').length === 0
        ? html` <div style="text-align:center;color:lightgreen;font-size:18px;font-weight:600;">
            🎉 You are already verified!<br />
            <span style="color:#dadada;font-size:14px;font-weight:400;">
              You can continue your progress in the app.
            </span>
            <br />
            <!-- <a href="/home" class="back-btn">Back to Main App</a> -->
          </div>`
        : html`
            <h3 class="steps-heading">Verification Steps</h3>
            <div class="timeline">
              ${levelUpProgress
                .get()
                .filter((item) => item.level >= focusedProject.get()!.requirementLevel)
                .map(
                  (req) => html`
                    <div class="step">
                      <div class="step-content">
                        <h5 class="step-title">${req.reason}</h5>
                        <p class="step-description">
                          Status:
                          <span style="color:${req.status === 'passed' ? 'lightgreen' : 'orange'}">
                            ${req.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  `
                )}
            </div>
          `}
    `
  }
}
