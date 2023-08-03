import { FC, ReactNode } from 'react'

import { Box, Typography } from '@mui/material'
import Carousel from 'components/carousel/Carousel'
import { fadeInWithTranslate } from 'styles/keyframes'

const createSlide = (content: string, key: number): ReactNode => (
  <Typography key={key} variant='h4' color='secondary.main'>
    {content}
  </Typography>
)

const slideContents = [
  "I'm a Full-Stack 🌏developer",
  "🖐️I'm Keiju Hikichi",
  'I graduated from a four-year university🏫 in Japan',
  'My favorite 💻technology is React',
  'Feel free to contact me!!',
] as const

const slides: ReactNode[] = slideContents.map((content, index) => createSlide(content, index))

const Slides: FC = () => {
  return (
    <Box height='50px' sx={{ animation: `${fadeInWithTranslate} 4s ease-in` }}>
      <Carousel
        slides={slides}
        axis='horizontal'
        autoPlay
        transitionTime={3000}
        interval={7000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      />
    </Box>
  )
}

export default Slides
