import { DVA_IMG_SRC } from 'constants/env'

import { Image } from 'components'
import { memo } from 'react'

import type { ImageProps } from 'components'
import type { FC } from 'react'

type Props = Omit<ImageProps, 'alt' | 'src'>

const DVA: FC<Props> = (props) => {
  return <Image src={DVA_IMG_SRC} alt='dva icon' {...props} />
}

export default memo(DVA)
