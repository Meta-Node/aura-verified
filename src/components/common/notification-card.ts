import { css, html, LitElement, type CSSResultGroup } from 'lit'
import { customElement } from 'lit/decorators.js'
import thumbsUpGreen from '@/assets/icons/thumbs-up.svg'

@customElement('notification-card')
export class NotificationCard extends LitElement {
  static styles?: CSSResultGroup | undefined = css`
    .notification-card {
      background: rgba(13, 2, 13, 0);
      margin: 16px;
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .profile-section {
      width: 64px;
      height: 64px;
      background: url('../images/v134_1907.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 360px;
    }

    .content {
      flex: 1 1 auto;
      margin: 8px;
    }
    .title-section {
      display: flex;
      align-items: flex-end;
      align-self: stretch;
    }

    .timestamp {
      color: rgba(209, 209, 235, 0.62);
      text-align: right;
      text-overflow: ellipsis;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 135%; /* 20.25px */
      letter-spacing: -0.075px;
      margin-left: auto;
    }

    .user-name {
      color: #d7d7e4;
      text-overflow: ellipsis;
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.34px;
    }

    .notification-description {
      color: rgba(209, 209, 235, 0.62);
      text-overflow: ellipsis;
      font-size: 15px;
      font-style: normal;
      margin-top: 10px;
      text-align: left;
      font-weight: 400;
      line-height: 135%;
      letter-spacing: -0.075px;
    }

    .notification-description strong {
      color: #5cc975;
    }
  `
  protected render() {
    return html` <div class="notification-card">
      <div class="profile-section"></div>
      <div class="content">
        <div class="title-section">
          <span class="user-name">Aurelia Quinn</span><span class="timestamp">10:30 AM</span>
        </div>
        <div class="notification-description">
          <span class="v134_1914">Evaluated you <strong>+4 High</strong></span>
          <img width="16" height="16" src="${thumbsUpGreen}" alt="thumbs up" />
        </div>
      </div>
    </div>`
  }
}
