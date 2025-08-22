import { Router } from '@lit-labs/router'
import { signal } from '@lit-labs/signals'
import { html, type ReactiveControllerHost } from 'lit'

export const router = signal(null as null | Router)

if (!('URLPattern' in globalThis)) {
  await import('urlpattern-polyfill')
}

export const pushRouter = (path: string) => {
  history.pushState('', '', path)
  router.get()?.goto(path)
}

export const createRouter = (classThis: ReactiveControllerHost & HTMLElement) => {
  const routerValue = new Router(classThis, [
    {
      path: '/',
      enter: async () => {
        await import('@/routes/index')
        return true
      },
      render: () => html` <app-layout> <home-page></home-page></app-layout>`
    },
    {
      path: '/home',
      enter: async () => {
        await import('@/routes/home')
        return true
      },
      render: () => html`<app-layout> <my-home></my-home> <app-footer></app-footer> </app-layout> `
    },
    {
      path: '/projects/:id',
      enter: async () => {
        await import('@/routes/verification')
        return true
      },
      render: ({ id }) =>
        html`<app-layout>
          <verification-page .projectId=${Number(id)}></verification-page> <app-footer></app-footer>
        </app-layout> `
    },
    {
      path: '/activities',
      enter: async () => {
        await import('@/routes/verifiers')
        return true
      },
      render: () =>
        html`<app-layout>
          <verifiers-page></verifiers-page> <app-footer></app-footer>
        </app-layout> `
    },
    {
      path: '/notifications',
      enter: async () => {
        await import('@/routes/notifications')
        return true
      },
      render: () =>
        html`<app-layout>
          <notifications-page></notifications-page> <app-footer></app-footer>
        </app-layout> `
    },
    {
      path: '/share',
      enter: async () => {
        await import('@/routes/share')
        return true
      },
      render: () =>
        html`<app-layout> <share-page></share-page> <app-footer></app-footer> </app-layout> `
    },
    {
      path: '/privacy-policy',
      enter: async () => {
        await import('@/routes/privacy-policy')
        return true
      },
      render: () => html`<app-layout> <privacy-policy></privacy-policy> </app-layout> `
    },
    {
      path: '/dev',
      enter: async () => {
        await import('@/routes/dev')
        return true
      },
      render: () => html`<app-layout> <dev-page></dev-page> </app-layout> `
    },
    {
      path: '/profile',
      enter: async () => {
        await import('@/routes/profile')
        return true
      },
      render: () =>
        html`<app-layout> <profile-page></profile-page> <app-footer></app-footer> </app-layout> `
    },
    {
      path: '/brightid',
      enter: async () => {
        await import('@/routes/brightid')
        return true
      },
      render: () => html`<app-layout> <brightid-login></brightid-login></app-layout>`
    },
    {
      path: '/embed/projects/:id',
      enter: async () => {
        await import('@/components/project-verification')
        return true
      },
      render: ({ id }) =>
        html`<app-layout isEmbeded>
          <project-verification .projectId=${Number(id)}></project-verification
        ></app-layout>`
    },
    {
      path: '*',
      enter: async () => {
        await import('@/routes/not-found')
        return true
      },
      render: () => html`<app-layout> <not-found></not-found></app-layout>`
    }
  ])

  router.set(routerValue)

  return routerValue
}
