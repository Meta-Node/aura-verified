import { Contact } from '@/utils/integrations/contacts'
import { signal } from '@lit-labs/signals'
import { localStorageSignal } from '../state'

export const isContactsLoading = signal(false)

export const contactsList = localStorageSignal(
  'contacts',
  [] as Contact[],
  (value) => JSON.parse(value ?? '[]'),
  (value) => JSON.stringify(value)
)

export const hashedContactsList = localStorageSignal<string[]>(
  'contactsHashed',
  [] as string[],
  (value) => JSON.parse(value ?? '[]'),
  (value) => JSON.stringify(value)
)

export const foundAuraPlayersFromContact = localStorageSignal(
  'auraPlayers',
  [] as { name: string; value: string }[],
  (value) => JSON.parse(value ?? '[]'),
  (value) => JSON.stringify(value)
)
