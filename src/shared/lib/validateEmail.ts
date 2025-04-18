/** */
export const validateEmail = (email: string): false | string => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (email.trim() === '') {
    return 'Please enter your email'
  }

  if (!emailRegex.test(email)) {
    return 'Please enter valid email'
  }

  return false
}
