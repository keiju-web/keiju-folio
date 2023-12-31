import { ROUTE_PATH } from 'constants/route'

import { Box, Typography } from '@mui/material'
import { Button, CVDownloadBtn, CenterContainer, PulseStar } from 'components'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { fadeInWithTranslate } from 'styles/keyframes'

import Slides from './components/Slides'

import type { FC } from 'react'

const Home: FC = () => {
  const navigate = useNavigate()

  const onClickContactMe = useCallback(() => {
    navigate(ROUTE_PATH.Contact)
  }, [])

  return (
    <CenterContainer
      sx={{
        height: 'calc(100vh - 100px)',
        px: '0px !important',
        maxWidth: '100% !important',
      }}
    >
      <PulseStar />
      <Typography
        variant='h1'
        fontWeight='bold'
        mb={2}
        sx={{ animation: `${fadeInWithTranslate} 2s ease-in-out` }}
      >
        {'Welcome'}
      </Typography>

      <Slides />

      <Box
        mt={4}
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          alignItems: 'center',
        }}
      >
        <Button onClick={onClickContactMe}>Contact Me</Button>
        <CVDownloadBtn sx={{ ml: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 0 } }} />
      </Box>
    </CenterContainer>
  )
}

export default Home
