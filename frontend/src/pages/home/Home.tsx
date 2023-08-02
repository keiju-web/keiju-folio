import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTE_PATH } from 'constants/route'

import { Box, Container, Typography } from '@mui/material'
import Button from 'components/button/Button'
import PulseStar from 'components/icon/PulseStar'
import { fadeInWithTranslate } from 'styles/keyframes'

import Slides from './components/Slides'

const Home: FC = () => {
  const navigate = useNavigate()

  const onClickContactMe = useCallback(() => {
    navigate(ROUTE_PATH.Contact)
  }, [])

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
        padding: '0px !important',
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

      <Box mt={4}>
        <Button onClick={onClickContactMe}>Contact Me</Button>
      </Box>
    </Container>
  )
}

export default Home
