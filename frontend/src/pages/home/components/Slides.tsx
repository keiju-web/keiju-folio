import { FC } from 'react'

import { Box } from '@mui/material'
import Carousel from 'components/carousel/Carousel'
import { fadeInWithTranslate } from 'styles/keyframes'

import { slides } from './constant'

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
