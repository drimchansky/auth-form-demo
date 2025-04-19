import { UserData } from '../model/store'

export const fetchAuthMock = (email: string, _password: string, delay = 4000, isError = false): Promise<UserData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!navigator.onLine || isError) {
        reject(new Error('Something went wrong'))
      } else {
        resolve({ id: '1', email, name: 'Test User' })
      }
    }, delay)
  })
}
