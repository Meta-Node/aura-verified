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

  @storage({ key: 'profilePicture' })
  @property({})
  profilePicture = ''

  @storage({ key: 'phoneNumber' })
  @property({})
  phoneNumber = ''
}

export const userStore = new UserState()
