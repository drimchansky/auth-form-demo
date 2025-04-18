import { atom } from 'nanostores'

type ToastType = 'success' | 'error'

type ToastOptions = {
  isVisible: boolean
  message: string
  type: ToastType
  timeoutId?: number
}

export const $toastState = atom<ToastOptions>({
  isVisible: false,
  timeoutId: undefined,
  message: '',
  type: 'success'
})

export const showToast = (message: string, type: ToastType, duration = null) => {
  const toastOptions: ToastOptions = {
    isVisible: true,
    message,
    type
  }

  if ($toastState.get().isVisible) {
    clearTimeout($toastState.get().timeoutId)
  }

  if (duration) {
    toastOptions.timeoutId = setTimeout(() => {
      $toastState.set({
        isVisible: false,
        message: '',
        type: 'success',
        timeoutId: undefined
      })
    }, duration)
  }

  $toastState.set(toastOptions)
}

export const hideToast = () => {
  $toastState.set({
    isVisible: false,
    message: '',
    type: 'success'
  })
}
