import { FC, memo } from 'react'

import { DOP_IMG_SRC } from 'constants/env'

import Image, { ImageProps } from 'components/image/Image'

type Props = Omit<ImageProps, 'alt' | 'src'>

const DOP: FC<Props> = (props) => {
  return <Image src={DOP_IMG_SRC} alt='dva icon' {...props} />
}

export default memo(DOP)
