import { FC, ReactNode, useMemo } from 'react'

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { getAllShortMessages } from 'api/short-message'
import Carousel from 'components/carousel/Carousel'
import { fadeInWithTranslate } from 'styles/keyframes'
import { useSuspenseQuery } from 'utils/react-query'

const createSlide = (message: string, key: number): ReactNode => (
  <Typography key={key} variant='h4' color='secondary.main'>
    {message}
  </Typography>
)

const Slides: FC = () => {
  const theme = useTheme()
  const isMobileSize = useMediaQuery(theme.breakpoints.down('md'))
  const { data } = useSuspenseQuery('getAllShortMessages', getAllShortMessages)

  const slides: ReactNode[] = useMemo(
    () => data?.map((d, index) => createSlide(d.message, index)),
    [data],
  )
  return (
    <Box height='50px' sx={{ animation: `${fadeInWithTranslate} 4s ease-in` }}>
      <Carousel
        slides={slides}
        axis={isMobileSize ? 'vertical' : 'horizontal'}
        autoPlay
        transitionTime={3000}
        interval={5000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      />
    </Box>
  )
}

export default Slides
