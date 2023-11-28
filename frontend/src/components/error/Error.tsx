import { Typography, Container, Box } from '@mui/material'
import { Button } from 'components'
import { useNavigate } from 'react-router-dom'

import type { FC } from 'react'

const Error: FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Container maxWidth='sm'>
      <Typography variant='h1' align='center' color='textPrimary' gutterBottom>
        404
      </Typography>
      <Typography variant='h5' align='center' color='textPrimary' paragraph>
        Not Found
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleGoBack}>Back</Button>
      </Box>
    </Container>
  )
}

export default Error
