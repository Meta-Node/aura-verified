import { Router } from "@lit-labs/router"
import { html, type ReactiveControllerHost } from "lit"

export const createRouter = (classThis: ReactiveControllerHost & HTMLElement) => new Router(classThis, [
  {
    path: "/",
    enter: async () => {
      await import("@/routes/index.ts")
      return true
    },
    render: () => html`
      <home-page></home-page>`
  }
])
