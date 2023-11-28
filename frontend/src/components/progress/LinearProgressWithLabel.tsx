import { Box, LinearProgress, Typography } from '@mui/material'

import type { LinearProgressProps } from '@mui/material'
import type { FC } from 'react'

type Props = LinearProgressProps & { value: number }

const LinearProgressWithLabel: FC<Props> = (props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.primary'>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

export default LinearProgressWithLabel
