import { useStore } from '@nanostores/react'
import { ChangeEvent } from 'react'

import { $authFormState, $authState, login } from '@/entities/auth'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

export const AuthForm = () => {
  const { email, password } = useStore($authFormState)
  const { isLoading, emailError, passwordError } = useStore($authState)

  const onSubmit = () => {
    login(email, password)
  }

  return (
    <div className="my-5 w-full max-w-[480px] rounded-xl bg-white px-7 py-12 shadow-xl">
      <h1 className="text-center text-2xl font-bold">Authentication form</h1>

      <form className="flex flex-col">
        <Input
          labelText="E-mail"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => $authFormState.setKey('email', e.target.value)}
          name="email"
          disabled={isLoading}
          labelClassName="mt-10"
          placeholder="Enter your email"
          type="email"
          autoComplete="email"
          required
          errorMessage={emailError}
        />

        <Input
          labelText="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => $authFormState.setKey('password', e.target.value)}
          name="password"
          disabled={isLoading}
          labelClassName="mt-6"
          placeholder="Enter your password"
          type="password"
          autoComplete="current-password"
          required
          errorMessage={passwordError}
        />

        <Button isLoading={isLoading} type="submit" className="mt-10" onClick={onSubmit} disabled={isLoading}>
          Sign in
        </Button>
      </form>
    </div>
  )
}
