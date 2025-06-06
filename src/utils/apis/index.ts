import createClient, { type Middleware } from 'openapi-fetch'
import type { paths } from '@/lib/schema'

export const clientAPI = createClient<paths>({
  baseUrl: import.meta.env.VITE_SOME_GET_VERIFIED_API
})
