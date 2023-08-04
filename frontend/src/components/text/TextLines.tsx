import { FC, memo } from 'react'

import { Typography, TypographyProps } from '@mui/material'

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
