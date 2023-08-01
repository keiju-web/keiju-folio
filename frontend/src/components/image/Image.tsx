import { FC, memo } from 'react'

import { Box, Card, CardMedia, CardMediaProps } from '@mui/material'

type Props = CardMediaProps & {
  alt: string
}

const Image: FC<Props> = (props) => {
  return (
    <Card elevation={0} sx={{ bgcolor: 'inherit', display: 'flex', justifyContent: 'center' }}>
      <Box>
        <CardMedia {...props} ref={undefined} component='img' />
      </Box>
    </Card>
  )
}

export default memo(Image)
