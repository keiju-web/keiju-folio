import { Box, Card, CardMedia } from '@mui/material'
import { memo } from 'react'

import type { CardMediaProps } from '@mui/material'
import type { FC } from 'react'

export type ImageProps = CardMediaProps & {
  alt: string
}

const Image: FC<ImageProps> = (props) => {
  return (
    <Card elevation={0} sx={{ bgcolor: 'inherit', display: 'flex', justifyContent: 'center' }}>
      <Box>
        <CardMedia {...props} ref={undefined} component='img' />
      </Box>
    </Card>
  )
}

export default memo(Image)
