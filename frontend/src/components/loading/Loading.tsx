import { FC } from 'react'

import { LOADING_IMG_SRC } from 'constants/env'

import { Box } from '@mui/material'

type Props = {
  height?: string | number
  width?: string | number
}

const Loading: FC<Props> = ({ height = '100vh', width = '250px' }) => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height={height}>
      <img src={LOADING_IMG_SRC} alt='Loading...' style={{ width, marginBottom: '150px' }} />
    </Box>
  )
}

export default Loading
