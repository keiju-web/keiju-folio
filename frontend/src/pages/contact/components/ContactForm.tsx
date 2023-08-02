import { FC } from 'react'

import { Box, Paper, Typography } from '@mui/material'
import Button from 'components/button/Button'
import { TextFieldController } from 'components/rhf/controllers/TextFieldController'
import { SubmitHandler, useForm } from 'react-hook-form'

type Form = {
  name: string
  email: string
  message: string
}

const ContactForm: FC = () => {
  const {
    register,
    // control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data)
  }

  return (
    <Paper elevation={8} sx={{ p: 4 }}>
      <Box display='flex' justifyContent='center' mb={4}>
        <Typography variant='h4' borderBottom={6} borderColor='#6495ed'>
          Get in Touch
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextFieldController<Form>
          registration={register('name')}
          textField={{
            muiTextField: {
              label: 'Name',
            },
            fieldWrapper: {
              errorMessage: errors.name?.message,
            },
          }}
        />
        <TextFieldController<Form>
          registration={register('email')}
          textField={{
            muiTextField: {
              label: 'Email',
            },
            fieldWrapper: {
              errorMessage: errors.email?.message,
            },
          }}
        />
        <TextFieldController<Form>
          registration={register('message')}
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
        <Button onClick={handleSubmit(onSubmit)}>Send Message</Button>
      </Box>
    </Paper>
  )
}

export default ContactForm
