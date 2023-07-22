import { FC } from 'react'

import { Grid } from '@mui/material'
import Button from 'components/button/Button'
import Loading from 'components/loading/Loading'

/** For Confirmation */
const Components: FC = () => {
  return (
    <Grid container spacing={4} py={4}>
      <Grid item xs={3}>
        <Button mode='primary'>Primay</Button>
      </Grid>
      <Grid item xs={3}>
        <Button mode='secondary'>Secondary</Button>
      </Grid>
      <Grid item xs={3}>
        <Loading height='100%' width='80px' />
      </Grid>
    </Grid>
  )
}

export default Components
