import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTE_PATH } from 'constants/route'

import { Box, Typography } from '@mui/material'
import Button from 'components/button/Button'
import PulseStar from 'components/icon/PulseStar'
import { fadeInWithTranslate } from 'styles/keyframes'

const Home: FC = () => {
  const navigate = useNavigate()

  const onClickContactMe = useCallback(() => {
    navigate(ROUTE_PATH.Contact)
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
      }}
    >
      <PulseStar />
      <Typography
        variant='h1'
        fontWeight='bold'
        mb={4}
        sx={{ animation: `${fadeInWithTranslate} 2s ease-in-out` }}
      >
        {'Welcome'}
      </Typography>

      <Typography
        variant='h3'
        color='secondary.main'
        sx={{ animation: `${fadeInWithTranslate} 4s ease-in` }}
      >
        {"I'm a Full-Stack developer"}
      </Typography>

      <Box mt={4}>
        <Button onClick={onClickContactMe}>Contact Me</Button>
      </Box>
    </Box>
  )
}

export default Home
