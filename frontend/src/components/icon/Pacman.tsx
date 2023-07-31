import { CSSProperties, FC } from 'react'

import { PACMAN_IMG_SRC } from 'constants/env'

type Props = {
  height?: string | number
  width?: string | number
  sx?: CSSProperties
}

const Pacman: FC<Props> = ({ height = 'auto', width = 'auto', sx }) => {
  return <img src={PACMAN_IMG_SRC} alt='pacman' style={{ height, width, ...sx }} />
}

export default Pacman
