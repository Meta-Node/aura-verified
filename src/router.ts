import { Router } from "@lit-labs/router"
import { html, type ReactiveControllerHost } from "lit"

export const createRouter = (classThis: ReactiveControllerHost & HTMLElement) =>
  new Router(classThis, [
    {
      path: "/",
      enter: async () => {
        await import("@/routes/index.lit")
        return true
      },
      render: () => html` <home-page></home-page>`,
    },
    {
      path: "/home",
      enter: async () => {
        await import("@/routes/home.lit")
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
      render: () => html` <verification-page></verification-page>`,
    },
    {
      path: "*",
      enter: async () => {
        await import("@/routes/not-found.lit")
        return true
      },
      render: () => html` <not-found></not-found>`,
    },
  ])
