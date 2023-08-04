import { FC, memo } from 'react'

import { CircularProgress, Box } from '@mui/material'
import { ButtonProps, Button as MuiButton } from '@mui/material'

type Props = ButtonProps & {
  mode?: 'primary' | 'secondary'
  size?: ButtonProps['size']
  isLoading?: boolean
}

const Button: FC<Props> = ({
  children,
  mode = 'primary',
  size = 'medium',
  isLoading = false,
  ...otherProps
}) => {
  return (
    <MuiButton
      {...otherProps}
      disabled={isLoading}
      color={isLoading ? 'inherit' : 'primary'}
      size={size}
      variant={mode === 'primary' ? 'contained' : 'outlined'}
      sx={{
        position: 'relative',
        textTransform: 'none',
        fontSize: '1.2rem',
        ...otherProps.sx,
      }}
    >
      {isLoading ? (
        <Box color='white' display='flex'>
          <CircularProgress size={32} color='inherit' />
        </Box>
      ) : (
        children
      )}
    </MuiButton>
  )
}

export default memo(Button)
