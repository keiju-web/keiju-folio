import { FC } from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconProps } from '@mui/material'
import { styled } from '@mui/system'
import { pulse } from 'styles/keyframes'

const HeartIcon = styled(FavoriteIcon)({
  animation: `${pulse} 1s infinite`,
  color: 'red',
})

type Props = {
  size?: IconProps['fontSize']
}

const PulseHeart: FC<Props> = ({ size = 'medium' }) => <HeartIcon fontSize={size} />

export default PulseHeart
