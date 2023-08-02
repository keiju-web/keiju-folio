import { FC, ReactNode } from 'react'

import { Box, styled } from '@mui/material'
import { CarouselProps, Carousel as ReactCarousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

type Props = Partial<CarouselProps> & {
  slides: ReactNode[]
}

// TODO: Not working
const CarouselWrapper = styled('div')`
  overflow-x: hidden;
`

/**
 * react-responsive-carousel
 * FYI. https://www.npmjs.com/package/react-responsive-carousel
 * There is a kind of bug when using "infiniteLoop" of CarouselProps that make side-scroll enable.
 */
const Carousel: FC<Props> = ({ slides, ...props }) => {
  return (
    <CarouselWrapper>
      <ReactCarousel {...props}>
        {slides.map((slide, index) => (
          <Box key={index}>{slide}</Box>
        ))}
      </ReactCarousel>
    </CarouselWrapper>
  )
}

export default Carousel
