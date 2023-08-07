import { FC } from 'react'

import { Box, LinearProgress, LinearProgressProps, Typography } from '@mui/material'

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
