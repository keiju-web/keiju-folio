import { FC, useCallback } from 'react'

import { MESSAGE } from 'constants/message'

import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import EmailIcon from '@mui/icons-material/Email'
import { Box, InputAdornment, Paper, Fade, Typography } from '@mui/material'
import { addContacts } from 'api/contact'
import Button from 'components/button/Button'
import { RULES } from 'components/rhf/constant'
import { TextFieldController } from 'components/rhf/controllers/TextFieldController'
import { useToast } from 'hooks/use-toast'
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form'
import { InsertContact } from 'types/contact'
import { useCommonMutation } from 'utils/react-query'

type ContactFormType = {
  name: string
  email: string
  message: string
}

const REGISTER_OPTIONS: {
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

const ContactForm: FC = () => {
  const { openToast } = useToast()
  /** POST Contact */
  const mutation = useCommonMutation(addContacts, {
    onSuccess: () => {
      openToast({
        message: MESSAGE.SUCCESSFUL,
        severity: 'success',
      })
      reset()
    },
  })

  /** Form Settings */
  const {
    register,
    // control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactFormType>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  /** Send message */
  const onSubmit: SubmitHandler<ContactFormType> = useCallback(
    (data) => {
      const reqData: InsertContact[] = [data]
      mutation.mutate(reqData)
    },
    [mutation],
  )

  return (
    <Fade in timeout={2000}>
      <Paper elevation={8} sx={{ p: 4 }}>
        <Box display='flex' justifyContent='center' mb={4}>
          <Typography variant='h4' borderBottom={6} borderColor='#6495ed'>
            Get in Touch
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TextFieldController<ContactFormType>
            registration={register('name', REGISTER_OPTIONS.name)}
            textField={{
              muiTextField: {
                placeholder: 'Name',
                InputProps: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountBoxIcon />
                    </InputAdornment>
                  ),
                },
              },
              fieldWrapper: {
                errorMessage: errors.name?.message,
              },
            }}
          />
          <TextFieldController<ContactFormType>
            registration={register('email', REGISTER_OPTIONS.email)}
            textField={{
              muiTextField: {
                placeholder: 'Email',
                InputProps: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                },
              },
              fieldWrapper: {
                errorMessage: errors.email?.message,
              },
            }}
          />
          <TextFieldController<ContactFormType>
            registration={register('message', REGISTER_OPTIONS.message)}
            textField={{
              muiTextField: {
                multiline: true,
                label: 'Message',
                placeholder: 'Write your message here...',
                rows: 10,
              },
              fieldWrapper: {
                errorMessage: errors.message?.message,
              },
            }}
          />

          <Button sx={{ mt: 2 }} onClick={handleSubmit(onSubmit)} isLoading={mutation.isLoading}>
            <EmailIcon sx={{ mr: 1 }} />
            Send Message
          </Button>
        </Box>
      </Paper>
    </Fade>
  )
}

export default ContactForm
