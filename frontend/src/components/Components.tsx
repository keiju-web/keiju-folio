import { FC, useCallback } from 'react'

import { Grid } from '@mui/material'
import Button from 'components/button/Button'
import Loading from 'components/loading/Loading'
import { useModal } from 'hooks/use-modal'
import { useToast } from 'hooks/use-toast'

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
    <>
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
          <Pacman height='150px' width='150px' />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  )
}

export default Components
