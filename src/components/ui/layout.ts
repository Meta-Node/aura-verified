import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import './footer.ts'

@customElement('app-layout')
export class AppLayout extends LitElement {
  private particlePositions = Array.from({ length: 50 }, () => ({
    width: Math.random() * 2 + 1 + 'px',
    height: Math.random() * 2 + 1 + 'px',
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%'
  }))

  static styles = css`
    .layout {
      text-align: center;
      min-height: 100vh;

      position: relative;
      margin: 0 auto;
      max-width: 400px;
      padding-bottom: 50px;
    }

    .lamp-bg {
      position: sticky;
      top: -8px;
      width: 1px;
      right: 20px;
      height: 1px;
      margin-left: auto;
      border-radius: 100000px;
      box-shadow: 8px 20px 203px 166px rgba(253, 224, 255, 0.3);
      transform: rotate3d(0, 1, 1, 63deg);
    }

    .bg-lines {
      position: fixed;
      top: 40px;
      height: 300px;
      width: 400px;
      background: url('/images/bg-linear-dashes.svg');
      z-index: -10;
    }

    .stars {
      position: absolute;
      inset: 0;
      z-index: -10;
    }

    .star {
      position: absolute;
      border-radius: 10000px;
      background: white;
      opacity: 0.2;
    }

    main {
      padding: 40px 0;
    }
  `

  render() {
    return html`
      <div class="layout">
        <div class="lamp-bg"></div>
        <div class="bg-lines"></div>

        <div class="stars">
          ${this.particlePositions.map(
            (particle, key) =>
              html` <div
                class="star"
                style="width: ${particle.width}; height: ${particle.height}; top: ${particle.top}; left: ${particle.left};"
              ></div>`
          )}
        </div>

        <main>
          <slot></slot>
        </main>
      </div>
    `
  }
}
