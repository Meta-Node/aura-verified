import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@/components/common/notification-card'

@customElement('notifications-page')
export class NotificationsPage extends LitElement {
  static styles?: CSSResultGroup = css`
    section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .filter {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .chip {
      border-radius: 13px;
      border: 1px solid rgba(93, 93, 93, 0.32);
      background: #161629;
      padding: 5px 10px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.64);
    }

    h1 {
      margin-top: 0;
    }
  `
  protected render() {
    return html`
      <section>
        <h1>Notifications</h1>

        <div class="filter">
          <div class="chip">Alert</div>
          <div class="chip">Evaluations</div>
          <div class="chip">Level</div>
        </div>
        <notification-card></notification-card>
        <notification-card></notification-card>
        <notification-card></notification-card>
        <notification-card></notification-card>
        <notification-card></notification-card>
        <notification-card></notification-card>
      </section>
    `
  }
}
