import { FC } from 'react'

import { ABOUT_ME_IMG_SRC } from 'constants/env'
import { MESSAGE } from 'constants/message'

import { Container, Typography, Box, Grow } from '@mui/material'
import { styled } from '@mui/system'
import { getAllAboutMe } from 'api/about-me'
import Image from 'components/image/Image'
import TextLines from 'components/text/TextLines'
import { useToast } from 'hooks/use-toast'
import { useSuspenseQuery } from 'utils/react-query'

const Highlight = styled('span')({
  color: '#ff8c00',
})

const AboutMe: FC = () => {
  const { openToast } = useToast()
  const { data } = useSuspenseQuery('about-me', getAllAboutMe, {
    onError: () =>
      openToast({
        message: MESSAGE.FAILED,
        severity: 'error',
      }),
  })

  return (
    <Container>
      <Box>
        <Grow in={true} timeout={1000}>
          <Typography variant='h3' align='center' fontWeight='bold'>
            About Me
          </Typography>
        </Grow>

        <Grow in={true} timeout={2000}>
          <Box mt={6}>
            <Typography variant='h4'>
              {"I'm"} <Highlight>Keiju Hikichi</Highlight>, a Web Developer.
            </Typography>
          </Box>
        </Grow>

        {data.map((d, i) => {
          return (
            <Grow key={i} in={true} timeout={i * 1000 + 2000}>
              <Box mt={4}>
                <TextLines text={d.content} />
              </Box>
            </Grow>
          )
        })}

        <Image src={ABOUT_ME_IMG_SRC} alt='about-me' sx={{ width: '300px' }} />
      </Box>
    </Container>
  )
}

export default AboutMe
