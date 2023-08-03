import { ReactNode } from 'react'

import { Typography } from '@mui/material'

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

export const slides: ReactNode[] = slideContents.map((content, index) =>
  createSlide(content, index),
)
