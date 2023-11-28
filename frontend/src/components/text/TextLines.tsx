import { Typography } from '@mui/material'
import { memo } from 'react'

import type { TypographyProps } from '@mui/material'
import type { FC } from 'react'

type Props = {
  text: string
  separator?: string | RegExp
  variant?: TypographyProps['variant']
}

/**
 * Convert newline character to <br />
 */
const TextLines: FC<Props> = ({ text, separator = '\\n', variant = 'body1' }) => {
  const lines = text.split(separator).map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))
  return <Typography variant={variant}>{lines}</Typography>
}

export default memo(TextLines)
