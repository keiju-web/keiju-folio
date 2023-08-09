import { FC } from 'react'

import { Theme } from '@emotion/react'
import { Box, SxProps } from '@mui/material'
import DOP from 'components/icon/DOP'
import DVA from 'components/icon/DVA'

const sx: SxProps<Theme> = {
  width: { sm: '100px', md: '150px' },
}

const Badges: FC = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <DVA sx={sx} />
      <DOP sx={sx} />
    </Box>
  )
}

export default Badges
