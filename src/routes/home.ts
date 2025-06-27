import '../components/common/verification-card.ts'
import '../components/common/verification-card-skeleton.ts'
import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@/components/common/profile-card.ts'
import {
  levelUpProgress,
  userEmail,
  userFirstName,
  userLastName,
  userProfilePicture
} from '@/states/user.ts'
import { getProjects, queryClient } from '@/utils/apis/index.ts'
import { signal, SignalWatcher } from '@lit-labs/signals'
import { map } from 'lit/directives/map.js'
import { projects } from '@/states/projects.ts'
import { getLevelupProgress } from '@/utils/score.ts'
import { EvaluationCategory } from '@/utils/aura.ts'

const isLoading = signal(true)

@customElement('my-home')
export class HomeElement extends SignalWatcher(LitElement) {
  static styles?: CSSResultGroup = css`
    .status-bar {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    h2 {
      margin-top: 40px;
      margin-left: 12px;
    }

    .profile-card-wrapper {
      position: relative;
    }

    .apps-section {
      text-align: left;
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

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
    const fetchData = queryClient
      .ensureQueryData({
        queryKey: ['projects'],
        queryFn: getProjects
      })
      .then((res) => {
        projects.set(res)
        isLoading.set(false)
      })

    getLevelupProgress({ evaluationCategory: EvaluationCategory.SUBJECT }).then((res) => {
      levelUpProgress.set(res.requirements)
    })
  }

  protected render() {
    return html` <div class="body">
      <div class="profile-card-wrapper">
        <profile-card
          .firstName=${userFirstName.get()}
          .lastName=${userLastName.get()}
          .email=${userEmail.get()}
          .image=${userProfilePicture.get()}
        ></profile-card>

        <profile-card
          .firstName=${userFirstName.get()}
          .lastName=${userLastName.get()}
          .email=${userEmail.get()}
          .image=${userProfilePicture.get()}
          class="profile-card-bg"
        ></profile-card>
      </div>

      <div class="apps-section">
        <h2>Apps needing verification</h2>

        ${isLoading.get()
          ? html`
              <verification-card-skeleton></verification-card-skeleton>
              <verification-card-skeleton></verification-card-skeleton>
              <verification-card-skeleton></verification-card-skeleton>
            `
          : map(projects.get(), (project) => {
              const totalSteps = levelUpProgress
                .get()
                .filter((item) => item.level <= project.requirementLevel)

              const stepsCompleted = totalSteps.filter((item) => item.status === 'passed').length

              return html`
                <verification-card
                  .status=${stepsCompleted === 0
                    ? 'Not Started'
                    : stepsCompleted < totalSteps.length
                    ? 'In progress'
                    : 'Completed'}
                  .name=${project.name}
                  .levelRequirement=${project.requirementLevel}
                  .stepsCompleted="${stepsCompleted}"
                  .totalSteps="${totalSteps.length}"
                  .projectId=${project.id}
                ></verification-card>
              `
            })}
      </div>
    </div>`
  }
}
