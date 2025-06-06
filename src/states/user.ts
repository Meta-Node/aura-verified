import { State, property, storage } from '@lit-app/state'

class UserState extends State {
  @storage({ key: 'email' })
  @property({})
  email = ''

  @storage({ key: 'brightId' })
  @property({})
  brightId = ''

  @storage({ key: 'firstName' })
  @property({})
  firstName = ''

  @storage({ key: 'lastName' })
  @property({})
  lastName = ''
}

export const userStore = new UserState()
