import CloseIcon from '@mui/icons-material/Close'
import {
  Modal as MuiModal,
  Box,
  Typography,
  Divider,
  IconButton,
  Slide,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { memo, useMemo } from 'react'

import type { FC, ReactNode } from 'react'

export type ModalProps = {
  isOpen: boolean
  title: string
  contents: ReactNode
  closeModal: () => void
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, title, contents, closeModal } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const modalContents = useMemo(
    () => (
      <Box sx={isMobile ? mobileBoxSxProps : boxSxProps}>
        <IconButton onClick={closeModal} sx={{ position: 'absolute', top: '8px', right: '8px' }}>
          <CloseIcon />
        </IconButton>

        <Typography id='modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box id='modal-description' mb={2}>
          {contents}
        </Box>
      </Box>
    ),
    [contents, isMobile, title],
  )

  return (
    <MuiModal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      {isMobile ? (
        <Slide direction='up' in={isOpen} mountOnEnter unmountOnExit>
          {modalContents}
        </Slide>
      ) : (
        modalContents
      )}
    </MuiModal>
  )
}

const boxSxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
  overflowY: 'auto',
  maxHeight: '80%',
}

const mobileBoxSxProps = {
  ...boxSxProps,
  position: 'fixed',
  top: 'auto',
  bottom: 0,
  left: 0,
  right: 0,
  transform: 'none',
  borderRadius: '20px 20px 0 0',
}

export default memo(Modal)
