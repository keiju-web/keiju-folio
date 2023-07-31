import { FC } from 'react'

import { Container } from '@mui/material'
import Button from 'components/button/Button'
import { TextFieldController } from 'components/form/controllers/TextFieldController'
import { SubmitHandler, useForm } from 'react-hook-form'

type Form = {
  name: string
}

// const { data } = useSuspenseQuery('getAllContacts', () => getAllContacts())
const Contact: FC = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({
    defaultValues: {
      name: '',
    },
  })

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data)
  }

  return (
    <Container>
      <TextFieldController<Form>
        registration={register('name')}
        textField={{
          muiTextField: {
            label: 'Name',
          },
          fieldWrapper: {
            errorMessage: errors.name?.message,
            required: true,
          },
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </Container>
  )
}

export default Contact
