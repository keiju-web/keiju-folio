import { Alert } from '@mui/material'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'
import { forwardRef, memo } from 'react'

import type { AlertColor } from '@mui/material'
import type { SlideProps } from '@mui/material/Slide'
import type { FC } from 'react'

export type ToastProps = {
  isOpen: boolean
  message: string
  severity?: AlertColor
  closeToast: () => void
}

const SlideTransition = forwardRef<unknown, SlideProps>(function Transition(props, ref) {
  return <Slide {...props} direction='up' ref={ref} />
})

const Toast: FC<ToastProps> = (props) => {
  const { isOpen, message, severity, closeToast } = props

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={closeToast}
      message={message}
      TransitionComponent={SlideTransition}
    >
      <Alert onClose={closeToast} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default memo(Toast)
