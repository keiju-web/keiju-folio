import StarIcon from '@mui/icons-material/Star'
import { styled } from '@mui/system'
import { pulse } from 'styles/keyframes'

import type { IconProps } from '@mui/material'
import type { FC } from 'react'

const PulsingIcon = styled(StarIcon)(({ theme }) => ({
  animation: `${pulse} 2s linear infinite`,
  color: theme.palette.secondary.main,
}))

type Props = {
  size?: IconProps['fontSize']
}

const PulseStar: FC<Props> = ({ size = 'medium' }) => <PulsingIcon fontSize={size} />

export default PulseStar
