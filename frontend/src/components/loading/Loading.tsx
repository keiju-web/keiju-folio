import { LOADING_IMG_SRC } from 'constants/env'

import { Box } from '@mui/material'

import type { FC } from 'react'

type Props = {
  height?: string | number
  width?: string | number
}

const Loading: FC<Props> = ({ height = '100vh', width = '250px' }) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height={height}
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <img src={LOADING_IMG_SRC} alt='Loading...' style={{ width }} />
    </Box>
  )
}

export default Loading
