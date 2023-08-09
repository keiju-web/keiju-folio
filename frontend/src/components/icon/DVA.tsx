import { FC, memo } from 'react'

import { DVA_IMG_SRC } from 'constants/env'

import Image, { ImageProps } from 'components/image/Image'

type Props = Omit<ImageProps, 'alt' | 'src'>

const DVA: FC<Props> = (props) => {
  return <Image src={DVA_IMG_SRC} alt='dva icon' {...props} />
}

export default memo(DVA)
