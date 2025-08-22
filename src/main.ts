import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import './styles.css'

import { createRouter } from '@/router'

import './components/ui/layout.ts'

import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/rating/rating.js'
import '@shoelace-style/shoelace/dist/themes/dark.css'
import '@shoelace-style/shoelace/dist/themes/light.css'

import 'fa-icons'
import { fetchNewNotifications } from './lib/notifications'
import { userBrightId } from './states/user'

@customElement('my-app')
export class MyApp extends LitElement {
  interval: ReturnType<typeof setInterval> | undefined

  private router = createRouter(this)

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
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
