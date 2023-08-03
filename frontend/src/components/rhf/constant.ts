/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const RULES = {
  required: 'Required',
  email: {
    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    message: 'Invalid email format',
  },
  minLength: (value: number) => {
    return {
      value,
      message: `Must be at least ${value} characters`,
    }
  },
  maxLength: (value: number) => {
    return {
      value,
      message: `Must be at most ${value} characters`,
    }
  },
}
