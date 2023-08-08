import { FC } from 'react'

import { ABOUT_ME_IMG_SRC } from 'constants/env'

import { Typography, Box, Grow } from '@mui/material'
import { styled } from '@mui/system'
import CenterContainer from 'components/container/CenterContainer'
import Image from 'components/image/Image'

import Detail from './components/Detail'

const Highlight = styled('span')({
  color: '#ff8c00',
})

const AboutMe: FC = () => {
  return (
    <CenterContainer>
      <Box mb={-12}>
        <Grow in timeout={500}>
          <Typography variant='h3' align='center' fontWeight='bold'>
            About Me
          </Typography>
        </Grow>

        <Grow in timeout={1000}>
          <Box mt={6}>
            <Typography variant='h4'>
              {"I'm"} <Highlight>Keiju Hikichi</Highlight>, a Web Developer.
            </Typography>
          </Box>
        </Grow>

        <Detail />

        <Image src={ABOUT_ME_IMG_SRC} alt='about-me' sx={{ width: '300px' }} />
      </Box>
    </CenterContainer>
  )
}

export default AboutMe
