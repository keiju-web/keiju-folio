import { Box } from '@mui/material'
import { DOP, DVA } from 'components'

import type { Theme } from '@emotion/react'
import type { SxProps } from '@mui/material'
import type { FC } from 'react'

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
