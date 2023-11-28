import FavoriteIcon from '@mui/icons-material/Favorite'
import { styled } from '@mui/system'
import { pulse } from 'styles/keyframes'

import type { IconProps } from '@mui/material'
import type { FC } from 'react'

const HeartIcon = styled(FavoriteIcon)({
  animation: `${pulse} 1s infinite`,
  color: 'red',
})

type Props = {
  size?: IconProps['fontSize']
}

const PulseHeart: FC<Props> = ({ size = 'medium' }) => <HeartIcon fontSize={size} />

export default PulseHeart
