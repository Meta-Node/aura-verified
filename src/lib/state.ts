import { signal } from '@lit-labs/signals'

// TODO: add validator to this function so it doesn't accept any invalid types
export const localStorageSignal = <T = string>(key: string, initialValue: T) => {
  const storage = localStorage.getItem(key)
  const state = signal<T>(storage ? (JSON.parse(storage) as T) || initialValue : initialValue)

  return {
    get: () => state.get(),
    set: (value: T) => {
      localStorage.setItem(key, JSON.stringify(value))
      state.set(value)
    }
  }
}
