import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import thumbsUpGreen from '@/assets/icons/thumbs-up.svg'

@customElement('verifier-card')
export class VerifierCard extends LitElement {
  static styles = css`
    .verifier-card {
      background-image: linear-gradient(
        to top right,
        rgba(46, 51, 90, 0.26),
        rgba(28, 27, 51, 0.26) 100%
      );
      backdrop-filter: blur(21px);
      border-radius: 24px;
      padding: 18px 20px 5px 18px;
      border-top: 1px solid #ffffff30;
    }

    p {
      color: #cfcfcf;
      font-size: 12px;
      margin: 0;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    p strong {
      color: white;
      margin-left: 5px;
    }

    .verifier-header {
      display: flex;
      align-items: flex-start;

      text-align: left;

      gap: 24px;
      margin-bottom: 16px;
    }

    .verifier-picture {
      width: 64px;
      height: 64px;
      border-radius: 6px;
      overflow: hidden;
    }

    .verifier-picture img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .verifier-info {
      flex: 1 1 auto;
    }

    .verifier-info h2 {
      margin: 0;
      font-size: medium;
      font-weight: 700;
    }

    .verifier-info p {
      margin: 4px 0 12px 0px;
      color: #dadada;
      font-size: smaller;
    }

    .level-progress {
      color: #ebebeb;
      font-size: 9px;
      font-weight: 300;
      letter-spacing: 1px;
    }

    .mt-2 {
      margin-top: 10px;
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

    .evaluation-high {
      color: #50c76b;
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      padding-top: 5px;

      display: inline-flex;
      gap: 5px;
    }
    section {
      margin-left: auto;
      width: 117.975px;
    }

    section small {
      font-size: 10px;
      color: #838383;
      margin: auto;
    }
  `

  protected render() {
    return html`
      <div class="verifier-card">
        <div class="verifier-header">
          <div class="verifier-picture">
            <img src="/images/profile-photo.png?height=64&width=64" alt="verifier picture" />
          </div>
          <div class="verifier-info">
            <h2>Ali Maktabi</h2>
            <p class="mt-2">maktabi876@gmail.com</p>
          </div>
          <p>Verifier level <strong>3</strong></p>
        </div>
        <div class="progress-bar">
          <div class="progress" style="width: 30%;"></div>
        </div>

        <section>
          <div class="evaluation-high">
            <img width="16" height="16" src="${thumbsUpGreen}" alt="thumbs up" />

            +4 Veriy High
          </div>

          <small>Evaluated you</small>
        </section>
      </div>
    `
  }
}
