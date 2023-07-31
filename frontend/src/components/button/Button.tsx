import { ButtonHTMLAttributes, FC, memo } from 'react'

import { Button as MuiButton } from '@mui/material'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
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
      }}
    >
      {children}
    </MuiButton>
  )
}

export default memo(Button)
