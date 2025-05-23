import { Router } from "@lit-labs/router"
import { html, type ReactiveControllerHost } from "lit"

export const createRouter = (classThis: ReactiveControllerHost & HTMLElement) =>
  new Router(classThis, [
    {
      path: "/",
      enter: async () => {
        await import("@/routes/index.ts")
        return true
      },
      render: () => html` <home-page></home-page>`,
    },
    {
      path: "/home",
      enter: async () => {
        await import("@/routes/home")
        return true
      },
      render: () => html` <my-home></my-home>`,
    },
    {
      path: "/project/:id",
      enter: async () => {
        await import("@/routes/verification-page.lit")
        return true
      },
      render: () => html` <my-verificationpage></my-verificationpage>`,
    },
    {
      path: "*",
      enter: async () => {
        await import("@/routes/not-found.lit")
        return true
      },
      render: () => html` <my-notfoundelement></my-notfoundelement>`,
    },
  ])
