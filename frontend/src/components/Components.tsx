import { FC, useCallback } from 'react'

import { Box, Container, Grid } from '@mui/material'
import Button from 'components/button/Button'
import Loading from 'components/loading/Loading'
import { useModal } from 'hooks/use-modal'
import { useToast } from 'hooks/use-toast'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CheckboxGroupController } from './form/controllers/CheckBoxGroupController'
import { MultiComboBoxController } from './form/controllers/MultiComboBoxController'
import { SelectController } from './form/controllers/SelectController'
import { TextFieldController } from './form/controllers/TextFieldController'
import { Options } from './form/types'
import Pacman from './icon/Pacman'

/**
 * This is a page to confirm all components at the same time
 */
const Components: FC = () => {
  const { openModal } = useModal()
  const { openToast } = useToast()

  const onClickOpenModal = useCallback(() => {
    openModal({ title: 'TITLE TITLE', contents: <>CONTENTS CONTENTS</> })
  }, [])

  return (
    <Container>
      <Grid
        container
        spacing={4}
        py={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={3}>
          <Button mode='primary'>Primay</Button>
        </Grid>
        <Grid item xs={3}>
          <Button mode='secondary'>Secondary</Button>
        </Grid>
        <Grid item xs={3}>
          <Loading height='80px' width='80px' />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={onClickOpenModal}>Modal</Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            onClick={() => {
              openToast({
                message: 'Success!!',
                severity: 'success',
              })
            }}
          >
            Success
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => {
              openToast({
                message: 'Info!!',
                severity: 'info',
              })
            }}
          >
            Info
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => {
              openToast({
                message: 'Warning!!',
                severity: 'warning',
              })
            }}
          >
            Warning
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => {
              openToast({
                message: 'Error!!',
                severity: 'error',
              })
            }}
          >
            Error
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Pacman height='100px' width='100px' />
        </Grid>
        <Grid item xs={9}>
          <SampleForms />
        </Grid>
      </Grid>
    </Container>
  )
}

type Form = {
  textField: string
  select: number | ''
  checkboxGroup: number[]
  multiComboBox: Options<string>
}
/** RHF - MUI */
const SampleForms = (): JSX.Element => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({
    defaultValues: {
      textField: '',
      select: '',
      checkboxGroup: [],
      multiComboBox: [],
    },
  })

  const onSubmit: SubmitHandler<Form> = useCallback((data) => {
    console.log(data)
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 400 }}>
      <TextFieldController<Form>
        registration={register('textField')}
        textField={{
          muiTextField: {
            label: 'Label',
          },
          fieldWrapper: {
            label: 'TextField',
            errorMessage: errors.textField?.message,
          },
        }}
      />
      <SelectController<Form>
        controller={{
          name: 'select',
          control,
        }}
        select={{
          muiTextField: {
            label: 'Label',
          },
          fieldWrapper: { label: 'Select' },
          options: [
            { label: 'option1', value: 1 },
            { label: 'option2', value: 2 },
            { label: 'option3', value: 3 },
          ],
        }}
      />
      <CheckboxGroupController<Form>
        controller={{
          name: 'checkboxGroup',
          control,
        }}
        checkboxGroup={{
          fieldWrapper: { label: 'CheckboxGroup' },
          options: [
            { label: 'option1', value: 1 },
            { label: 'option2', value: 2 },
            { label: 'option3', value: 3 },
          ],
        }}
      />
      <MultiComboBoxController<Form, string>
        controller={{
          name: 'multiComboBox',
          control,
        }}
        multiComboBox={{
          muiTextField: {
            label: 'Label',
          },
          fieldWrapper: { label: 'MultiComboBox' },
          options: [
            { label: 'option1', value: '1' },
            { label: 'option2', value: '2' },
            { label: 'option3', value: '3' },
          ],
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>{'Console.log'}</Button>
    </Box>
  )
}

export default Components
