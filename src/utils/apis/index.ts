import createClient from 'openapi-fetch'
import type { paths } from '@/lib/schema'
import type { BrightID } from '@/types/brightid'
import { QueryClient } from '@tanstack/query-core'

export const clientAPI = createClient<paths>({
  baseUrl: import.meta.env.VITE_SOME_GET_VERIFIED_API
})

export const auraNodeAPI = createClient({
  baseUrl: import.meta.env.VITE_SOME_AURA_BACKEND_URL
})

export const queryClient = new QueryClient()

export const getBrightId = async (id: string) => {
  const res = await auraNodeAPI.GET(`/brightid/v6/users/${id}/profile` as never)

  return (res.data as BrightID | undefined)?.data
}
