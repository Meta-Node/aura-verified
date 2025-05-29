import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"
import homeIcon from "@/assets/icons/home.svg"
import activitiesIcon from "@/assets/icons/activities.svg"
import bellIcon from "@/assets/icons/bell.svg"
import profileIcon from "@/assets/icons/profile.svg"
import shareIcon from "@/assets/icons/share.svg"

const menuItems = [
  {
    icon: homeIcon,
    href: "/home",
  },
  {
    icon: activitiesIcon,
    href: "/activities",
  },
  {
    icon: bellIcon,
    href: "/notifications",
  },
  {
    icon: profileIcon,
    href: "/profile",
  },
  {
    icon: shareIcon,
    href: "/share",
  },
]

@customElement("app-footer")
export class AppFooter extends LitElement {
  static styles = css`
    .navbar {
      background-image: linear-gradient(
        to bottom,
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
      border: 1px solid #33333320;
      border-top: 1px solid #ffffff20;
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
        ${menuItems.map(
          (item) => html`
            <a href="${item.href}"> <img src="${item.icon}" /> </a>
          `,
        )}
      </div>
    `
  }
}
