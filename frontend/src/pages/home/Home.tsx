import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTE_PATH } from 'constants/route'

import { Box, Typography } from '@mui/material'
import Button from 'components/button/Button'
import CenterContainer from 'components/container/CenterContainer'
import PulseStar from 'components/icon/PulseStar'
import { fadeInWithTranslate } from 'styles/keyframes'

import Slides from './components/Slides'

const Home: FC = () => {
  const navigate = useNavigate()

  const onClickContactMe = useCallback(() => {
    navigate(ROUTE_PATH.Contact)
  }, [])

  return (
    <CenterContainer
      sx={{
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
    </CenterContainer>
  )
}

export default Home
