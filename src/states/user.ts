import { localStorageSignal } from '@/lib/state'

export const userEmail = localStorageSignal('_email', '')
export const userBrightId = localStorageSignal('_brightId', '')
export const userFirstName = localStorageSignal('_firstName', '')
export const userLastName = localStorageSignal('_lastName', '')
export const userProfilePicture = localStorageSignal('_profilePicture', '')
export const userPhoneNumber = localStorageSignal('_phoneNumber', '')
