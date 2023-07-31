import { FC, useCallback } from 'react'

import { Box, Container, Grid, Paper } from '@mui/material'
import Button from 'components/button/Button'
import Loading from 'components/loading/Loading'
import { useModal } from 'hooks/use-modal'
import { useToast } from 'hooks/use-toast'
import { SubmitHandler, useForm } from 'react-hook-form'

import Pacman from './icon/Pacman'
import { CheckboxGroupController } from './rhf-form/controllers/CheckBoxGroupController'
import { MultiComboBoxController } from './rhf-form/controllers/MultiComboBoxController'
import { SelectController } from './rhf-form/controllers/SelectController'
import { TextFieldController } from './rhf-form/controllers/TextFieldController'
import { Options } from './rhf-form/types'

/**
 * This is a page for confirmation of all common components on this app
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
            sx={{
              backgroundColor: (theme) => theme.palette.success.main,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.success.dark,
              },
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
            sx={{
              backgroundColor: (theme) => theme.palette.info.main,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.info.dark,
              },
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
            sx={{
              backgroundColor: (theme) => theme.palette.warning.main,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.warning.dark,
              },
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
            sx={{
              backgroundColor: (theme) => theme.palette.error.main,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.error.dark,
              },
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
/**
 * RHF - MUI
 * FYI. https://www.react-hook-form.com/get-started#IntegratingwithUIlibraries
 **/
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
    <Paper>
      <Box p={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
    </Paper>
  )
}

export default Components
