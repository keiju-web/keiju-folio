import { Box, Typography, useTheme } from '@mui/material'
import { getAllShortMessages } from 'api/short-message'
import { Carousel } from 'components'
import { useMemo } from 'react'
import { fadeInWithTranslate } from 'styles/keyframes'
import { useSuspenseQuery } from 'utils/react-query'

import type { Theme } from '@mui/material'
import type { FC, ReactNode } from 'react'

const createSlide = (message: string, key: number, theme: Theme): ReactNode => (
  <Typography
    key={key}
    color='secondary.main'
    sx={{
      fontSize: {
        xs: theme.typography.h5.fontSize,
        sm: theme.typography.h3.fontSize,
      },
    }}
  >
    {message}
  </Typography>
)

const Slides: FC = () => {
  const theme = useTheme()
  const { data } = useSuspenseQuery('getAllShortMessages', getAllShortMessages)

  const slides: ReactNode[] = useMemo(
    () => data?.map((d, index) => createSlide(d.message, index, theme)),
    [data],
  )
  return (
    <Box height='50px' sx={{ animation: `${fadeInWithTranslate} 4s ease-in` }}>
      <Carousel
        slides={slides}
        axis='horizontal'
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
