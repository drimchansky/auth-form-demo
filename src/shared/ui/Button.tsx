import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Spinner } from './Spinner'

type Props = {
  isLoading: boolean
  children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ isLoading, onClick, children, disabled, ...props }) => {
  return (
    <button
      {...props}
      data-submitting={isLoading}
      className={twMerge(
        'group flex cursor-pointer items-center justify-center rounded-md bg-blue-600 py-3 text-sm text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600',
        disabled && 'cursor-default opacity-40 active:opacity-40',
        !disabled && 'hover:bg-blue-700 hover:text-gray-200 active:opacity-90',
        props.className
      )}
      onClick={event => {
        event.preventDefault()
        !disabled && onClick && onClick(event)
      }}
      type={props.type || 'button'}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
