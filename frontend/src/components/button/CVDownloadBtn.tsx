import { FC, memo, useCallback } from 'react'

import { ENGLISH_CV, JAPANESE_CV } from 'constants/env'

import DownloadIcon from '@mui/icons-material/Download'
import { ButtonProps, Container, Grid } from '@mui/material'
import { useModal } from 'hooks/use-modal'
import { handleDownload } from 'utils/util'

import Button from './Button'

type Props = ButtonProps

const CVDownloadBtn: FC<Props> = (props) => {
  const { openModal } = useModal()

  const onClick = useCallback(() => {
    openModal({
      title: 'Download CV',
      contents: <ModalContents />,
    })
  }, [])

  return (
    <Button {...props} onClick={onClick}>
      Download CV <DownloadIcon style={{ marginLeft: 8 }} />
    </Button>
  )
}

const ModalContents: FC = () => {
  const { closeModal } = useModal()

  const onClickJP = useCallback(() => {
    handleDownload(JAPANESE_CV, 'cv_hikichi_keiju_jp.txt')
    closeModal()
  }, [])

  const onClickEN = useCallback(() => {
    handleDownload(ENGLISH_CV, 'cv_hikichi_keiju_en.txt')
    closeModal()
  }, [])

  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          mt: 2,
          minWidth: { md: '400px' },
          '& .MuiGrid-item': {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Button onClick={onClickEN}>ENGLISH ver</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button onClick={onClickJP}>JAPANESE ver</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default memo(CVDownloadBtn)
