import { IFramePorjectVerification } from '@/components/iframe-project-verification'
import { createComponent, EventName } from '@lit/react'
import * as React from 'react'

export const MyComponentReact = createComponent({
  tagName: 'my-component',
  elementClass: IFramePorjectVerification,
  react: React,
  events: {
    onReady: 'on-ready' as EventName,
    onVerificationSuccess: 'on-verification-success' as EventName<Event>
  }
})
