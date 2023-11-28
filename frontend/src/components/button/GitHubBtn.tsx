import { REPOSITORY_URL } from 'constants/env'

import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import { memo, useCallback } from 'react'

import type { IconButtonProps } from '@mui/material/IconButton'
import type { FC } from 'react'

type Props = IconButtonProps

const GitHubBtn: FC<Props> = (props) => {
  const onClick = useCallback(() => {
    window.open(REPOSITORY_URL, '_blank')
  }, [])

  return (
    <IconButton onClick={onClick} {...props} sx={{ color: 'text.secondary', ...props.sx }}>
      <GitHubIcon fontSize='large' />
    </IconButton>
  )
}

export default memo(GitHubBtn)
