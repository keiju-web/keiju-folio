import { RULES } from 'components/rhf/constant'
import { RegisterOptions } from 'react-hook-form'

export type ContactFormType = {
  name: string
  email: string
  message: string
}

export const REGISTER_OPTIONS: {
  name: RegisterOptions
  email: RegisterOptions
  message: RegisterOptions
} = {
  name: {
    required: RULES.required,
    maxLength: RULES.maxLength(20),
  },
  email: {
    pattern: RULES.email,
    maxLength: RULES.maxLength(100),
  },
  message: {
    required: RULES.required,
    maxLength: RULES.maxLength(500),
  },
}
