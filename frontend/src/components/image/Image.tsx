import { FC, memo } from 'react'

import { Box, Card, CardMedia, CardMediaProps } from '@mui/material'

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
