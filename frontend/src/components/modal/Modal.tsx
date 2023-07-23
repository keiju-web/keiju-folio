import { FC } from 'react'

import { Modal as MuiModal, Box, Typography, Divider } from '@mui/material'
import { ModalProps } from 'hooks/use-modal'

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
        <Typography id='modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography id='modal-description' variant='body1' mb={2}>
          {contents}
        </Typography>
      </Box>
    </MuiModal>
  )
}

const boxSxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
}

export default Modal
