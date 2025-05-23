import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("app-footer")
export class AppFooter extends LitElement {
  static styles = css`
    .navbar {
      background-image: linear-gradient(
        to top right,
        rgba(46, 51, 90, 0.26),
        rgba(28, 27, 51, 0.26) 100%
      );

      z-index: 30;
      position: fixed;
      bottom: 2px;
      left: 50%;
      width: 350px;
      max-width: 98vw;
      transform: translateX(-50%);
      backdrop-filter: blur(24px);
      padding: 16px;
      border: 1px solid #33333360;
      border-top: 1px solid #ffffff30;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar button {
      background: transparent;
      outline: none;
      border: none;
      color: #aaaaaa;
      cursor: pointer;
    }

    .navbar svg {
      width: 40px;
      height: 40px;
      background: transparent;
    }
  `

  render() {
    return html`
      <div class="navbar">
        <button>
          <fa-icon size="20px" class="fas fa-home active"></fa-icon>
        </button>
        <button>
          <fa-icon size="20px" class="fas fa-sliders-h inactive"></fa-icon>
        </button>
        <button>
          <fa-icon size="20px" class="fas fa-bell inactive"></fa-icon>
        </button>
        <button>
          <fa-icon size="20px" class="fas fa-user inactive"></fa-icon>
        </button>
        <button>
          <fa-icon size="20px" class="fas fa-share inactive"></fa-icon>
        </button>
      </div>
    `
  }
}
