import { FC, memo } from 'react'

import { ButtonProps, Button as MuiButton } from '@mui/material'

type Props = ButtonProps & {
  mode?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const Button: FC<Props> = ({ children, mode = 'primary', size = 'medium', ...otherProps }) => {
  return (
    <MuiButton
      {...otherProps}
      color='primary'
      size={size}
      variant={mode === 'primary' ? 'contained' : 'outlined'}
      sx={{
        textTransform: 'none',
        fontSize: '1.2rem',
        ...otherProps.sx,
      }}
    >
      {children}
    </MuiButton>
  )
}

export default memo(Button)
