import { FC, memo, useMemo } from 'react'

import { Box, Card, CardMedia, CardMediaProps } from '@mui/material'
import { fadeIn } from 'styles/keyframes'

type Props = CardMediaProps & {
  height: string | number
  image: string
  alt: string
  isRadious?: boolean
}

const Image: FC<Props> = ({ isRadious = false, ...props }) => {
  const boxSx = useMemo(() => {
    if (isRadious) {
      return {
        width: props.height,
        height: props.height,
        borderRadius: '50%',
        overflow: 'hidden',
      }
    }
    return {}
  }, [isRadious, props.height])

  return (
    <Card
      elevation={0}
      sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center' }}
    >
      <Box sx={boxSx}>
        <CardMedia
          {...props}
          ref={undefined}
          component='img'
          sx={{
            animation: `${fadeIn} 4s`,
          }}
        />
      </Box>
    </Card>
  )
}

export default memo(Image)
