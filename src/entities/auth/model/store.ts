import { map } from 'nanostores'

import { hideToast, showToast } from '@/entities/toast'
import { tryCatch } from '@/shared/lib/tryCatch'
import { validateEmail } from '@/shared/lib/validateEmail'
import { validatePassword } from '@/shared/lib/validatePassword'

import { fetchAuthMock } from '../api/fetchAuthMock'

export type UserData = {
  id: string
  email: string
  name: string
}

export const $authState = map<{
  emailError: string | null
  passwordError: string | null
  isLoading: boolean
  user: UserData | null
}>({
  emailError: null,
  passwordError: null,
  isLoading: false,
  user: null
})

export const $authFormState = map<{
  email: string
  password: string
}>({
  email: '',
  password: ''
})

export const login = async (email: string, password: string) => {
  const emailValidationResult = validateEmail(email)
  const passwordValidationResult = validatePassword(password)
  const validationResult = emailValidationResult || passwordValidationResult || false

  $authState.setKey('emailError', emailValidationResult || null)
  $authState.setKey('passwordError', passwordValidationResult || null)

  if (validationResult) return

  if (!navigator.onLine) {
    showToast('Please check your internet connection', 'error')
    return
  }

  $authState.setKey('isLoading', true)
  hideToast()

  const { data, error } = await tryCatch(fetchAuthMock(email, password))

  if (error) {
    $authState.setKey('isLoading', false)
    showToast(error.message, 'error')
    return
  }

  if (data) {
    $authState.setKey('user', data)
  }

  $authState.setKey('isLoading', false)
  $authFormState.setKey('email', '')
  $authFormState.setKey('password', '')

  showToast('Success!', 'success')
}

export const logout = () => {
  $authState.set({
    emailError: null,
    passwordError: null,
    user: null,
    isLoading: false
  })
}
