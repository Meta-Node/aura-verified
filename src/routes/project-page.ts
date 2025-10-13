import '@/components/common/profile-card'
import { pushRouter } from '@/router'
import { projects } from '@/states/projects'
import { levelUpProgress } from '@/states/user'
import { Project } from '@/types/projects'
import { getProjects, queryClient } from '@/utils/apis'
import { EvaluationCategory } from '@/utils/aura'
import { getLevelupProgress } from '@/utils/score'
import { signal, SignalWatcher } from '@lit-labs/signals'
import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const focusedProject = signal(null as Project | null)

@customElement('project-landing')
export class ProjectLandingElement extends SignalWatcher(LitElement) {
  @property({
    type: Number
  })
  projectId!: number

  static styles?: CSSResultGroup = css`
    .project-image {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      margin-bottom: 24px;
    }

    .continue-button {
      background-color: #007bff;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
    }

    @media (max-width: 600px) {
      .container {
        padding: 10px;
      }

      h1 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
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
      levelUpProgress.set(res.requirements)
    })
  }

  protected render() {
    const project = focusedProject.get()
    if (!project) return html`<p>Loading...</p>`

    return html`
      <div class="container">
        ${project.image
          ? html`<img src="${project.image}" alt="${project.name}" class="project-image" />`
          : ''}
        <h1>${project.name} Verification</h1>
        <p>${project.description || 'No description available.'}</p>
        <p>To get your reward, you must get verified through Aura first.</p>
        <button class="continue-button" @click=${() => pushRouter(`/verify/${project.id}`)}>
          Continue
        </button>
      </div>
    `
  }
}
