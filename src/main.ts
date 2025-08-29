import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import './styles.css'

import { createRouter } from '@/app'

import './components/ui/layout.ts'

import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/rating/rating.js'
import '@shoelace-style/shoelace/dist/themes/dark.css'
import '@shoelace-style/shoelace/dist/themes/light.css'

import { fetchNewNotifications } from './lib/notifications'
import {
  userBrightId,
  userEmail,
  userFirstName,
  userLastName,
  userProfilePicture
} from './states/user'

function onInjectLogin(
  brightId: string,
  email: string | null,
  firstName: string | undefined,
  lastName: string | undefined,
  profilePicture: string | null
) {
  userBrightId.set(brightId)
  if (email) userEmail.set(email)

  if (firstName) userFirstName.set(firstName)

  if (lastName) userLastName.set(lastName)

  if (profilePicture) userProfilePicture.set(profilePicture)
}

@customElement('my-app')
export class MyApp extends LitElement {
  interval: ReturnType<typeof setInterval> | undefined

  private router = createRouter(this)

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()

    window.addEventListener('message', (event) => {
      console.log('[New Message]', event.data)
      if (event.origin !== 'https://aura-get-verified.vercel.app') return

      const data = JSON.parse(event.data)

      if (data.type !== 'signin-sync') return

      const loginData = data.data

      onInjectLogin(
        loginData.brightId,
        loginData.email,
        loginData.firstName,
        loginData.lastName,
        loginData.picture
      )
    })
    const brightId = userBrightId.get()

    if (!brightId) return

    fetchNewNotifications(brightId)

    this.interval = setInterval(() => {
      if (brightId) fetchNewNotifications(brightId)
    }, 5 * 60 * 1000)
  }

  disconnectedCallback(): void {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    return html` ${this.router.outlet()} `
  }
}
