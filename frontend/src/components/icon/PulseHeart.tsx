import { FC } from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite'
import { styled } from '@mui/system'
import { pulse } from 'styles/keyframes'

const HeartIcon = styled(FavoriteIcon)({
  animation: `${pulse} 1s infinite`,
  color: 'red',
})

type Props = {
  size?: 'small' | 'inherit' | 'medium' | 'large'
}

const PulseHeart: FC<Props> = ({ size = 'medium' }) => <HeartIcon fontSize={size} />

export default PulseHeart
