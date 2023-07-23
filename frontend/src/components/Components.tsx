import { FC, useCallback } from 'react'

import { Grid } from '@mui/material'
import Button from 'components/button/Button'
import Loading from 'components/loading/Loading'
import { useModal } from 'hooks/use-modal'

/**
 * This is a page to confirm all components at the same time
 */
const Components: FC = () => {
  const { openModal } = useModal()

  const onClickOpenModal = useCallback(() => {
    openModal('TITLE TITLE', <>CONTENTS CONTENTS</>)
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

        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  )
}

export default Components
