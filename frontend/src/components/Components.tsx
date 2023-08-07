import { FC, ReactNode, useCallback, useState } from 'react'

import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import Button from 'components/button/Button'
import Loading from 'components/loading/Loading'
import { useAuth } from 'hooks/use-auth'
import { useModal } from 'hooks/use-modal'
import { useToast } from 'hooks/use-toast'
import { SubmitHandler, useForm } from 'react-hook-form'

import Accordion from './accordion/Accordion'
import Carousel from './carousel/Carousel'
import Pacman from './icon/Pacman'
import LinearProgressWithLabel from './progress/LinearProgressWithLabel'
import { RULES } from './rhf/constant'
import { CheckboxGroupController } from './rhf/controllers/CheckBoxGroupController'
import { MultiComboBoxController } from './rhf/controllers/MultiComboBoxController'
import { SelectController } from './rhf/controllers/SelectController'
import { TextFieldController } from './rhf/controllers/TextFieldController'
import { Options } from './rhf/types'

/**
 * This is a page for confirmation of all common components on this app
 */
const Components: FC = () => {
  const { signOut } = useAuth()
  const { openModal } = useModal()
  const { openToast } = useToast()

  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false)

  const onClickOpenModal = useCallback(() => {
    openModal({ title: 'TITLE TITLE', contents: <>CONTENTS CONTENTS</> })
  }, [])

  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12}>
          <SampleCarousel />
        </Grid>

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
        <Grid item xs={5}>
          <Button
            onClick={() => {
              setIsBtnLoading(true)
              setTimeout(() => setIsBtnLoading(false), 3000)
            }}
            isLoading={isBtnLoading}
            fullWidth
          >
            Click to Load!!
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={signOut}>Sign out</Button>
        </Grid>

        <Grid item xs={12}>
          <SampleForms />
        </Grid>

        <Grid item xs={12}>
          <Accordion title='AAA'>AAAAA</Accordion>
          <Accordion title='BBB'>BBBBB</Accordion>
          <Accordion title='CCC'>CCCCC</Accordion>
        </Grid>
        <Grid item xs={12}>
          <LinearProgressWithLabel value={50} />
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
          registration={register('textField', { required: RULES.required })}
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

const createSlide = (content: string, key: number): ReactNode => (
  <Paper key={key}>
    <Typography variant='h6'>{content}</Typography>
  </Paper>
)
const slideContents = ['Slide 1', 'Slide 2', 'Slide 3']
const slides: ReactNode[] = slideContents.map((content, index) => createSlide(content, index))

const SampleCarousel = (): JSX.Element => {
  return (
    <Carousel
      slides={slides}
      autoPlay
      infiniteLoop
      transitionTime={3000}
      interval={3000}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    />
  )
}

export default Components
