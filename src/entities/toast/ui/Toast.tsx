import { useStore } from '@nanostores/react'
import { twMerge } from 'tailwind-merge'

import { $toastState } from '../model/store'

export const Toast = () => {
  const { isVisible, message, type } = useStore($toastState)

  return isVisible ? (
    <div
      role="alert"
      className={twMerge(
        'fixed top-4 right-4 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-lg font-medium ring-1 ring-inset',
        type === 'success' && 'bg-green-50 text-green-700 ring-green-600/20',
        type === 'error' && 'bg-red-50 text-red-700 ring-red-600/20'
      )}
    >
      {message}
    </div>
  ) : null
}
