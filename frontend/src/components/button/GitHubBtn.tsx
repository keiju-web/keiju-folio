import { memo, FC, useCallback } from 'react'

import { REPOSITORY_URL } from 'constants/env'

import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

type Props = IconButtonProps

const GitHubBtn: FC<Props> = (props) => {
  const onClick = useCallback(() => {
    console.log(REPOSITORY_URL)
    window.open(REPOSITORY_URL, '_blank')
  }, [])

  return (
    <IconButton onClick={onClick} color='inherit' {...props}>
      <GitHubIcon fontSize='large' />
    </IconButton>
  )
}

export default memo(GitHubBtn)
