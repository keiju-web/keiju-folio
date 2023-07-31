import { FC } from 'react'

import StarIcon from '@mui/icons-material/Star'
import { styled } from '@mui/system'
import { pulse } from 'styles/keyframes'

const PulsingIcon = styled(StarIcon)(({ theme }) => ({
  animation: `${pulse} 2s linear infinite`,
  color: theme.palette.secondary.main,
}))

type Props = {
  size?: 'small' | 'inherit' | 'medium' | 'large'
}

const PulseStar: FC<Props> = ({ size = 'medium' }) => <PulsingIcon fontSize={size} />

export default PulseStar
