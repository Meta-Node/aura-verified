import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@/components/common/verifier-card'

@customElement('verifiers-page')
export class VerifiersPage extends LitElement {
  static styles?: CSSResultGroup = css`
    .title {
      margin-top: 10px;
    }

    .filter {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }

    .filter button {
      padding: 10px 15px;
      display: flex;

      border-radius: 4000px;
      cursor: pointer;

      color: rgba(255, 255, 255, 0.64);

      text-align: center;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      border: 1px solid rgba(93, 93, 93, 0.32);

      background: #161629;
    }

    main {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `

  protected render() {
    return html`
      <h1 class="title">Verifiers</h1>

      <section class="filter">
        <button>Level 1</button>
        <button>Level 2</button>
        <button>Level 3</button>
        <button>Evaluated</button>
        <button>Didn't evaluate</button>
      </section>

      <main>
        <verifier-card></verifier-card>
        <verifier-card></verifier-card>
        <verifier-card></verifier-card>
      </main>
    `
  }
}
