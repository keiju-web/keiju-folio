import { FC, ReactNode, memo } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import { Modal as MuiModal, Box, Typography, Divider, IconButton } from '@mui/material'

export type ModalProps = {
  isOpen: boolean
  title: string
  contents: ReactNode
  closeModal: () => void
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, title, contents, closeModal } = props

  return (
    <MuiModal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <Box sx={boxSxProps}>
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

export default memo(Modal)
