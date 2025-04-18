import { ChangeEvent, InputHTMLAttributes, RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  labelText: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type: string
  errorMessage?: string | null
  labelClassName?: string
  inputClassName?: string
  ref?: RefObject<HTMLInputElement>
  disabled?: boolean
  name: string
  placeholder?: string
  autoComplete?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  labelText,
  value,
  onChange,
  ref,
  disabled,
  name,
  placeholder,
  type,
  autoComplete,
  labelClassName,
  inputClassName,
  errorMessage,
  ...props
}: Props) => {
  return (
    <label className={twMerge('relative', labelClassName)}>
      <span className="text-sm font-medium text-gray-700">{labelText}</span>
      <input
        className={twMerge(
          'mt-2 block w-full rounded-sm border border-solid border-gray-400 px-3 py-1.5 text-base focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600',
          inputClassName
        )}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        ref={ref}
        aria-invalid={!!errorMessage}
        aria-errormessage={errorMessage ? `${type}-error` : undefined}
        {...props}
      />
      {errorMessage && (
        <p id={`${type}-error`} className="absolute bottom-[-21px] text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </label>
  )
}
