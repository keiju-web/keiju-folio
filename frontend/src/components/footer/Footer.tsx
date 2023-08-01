import { FC, memo, useMemo } from 'react'

import { Box, Container, Typography } from '@mui/material'

const Footer: FC = () => {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <Box component='footer' sx={{ bgcolor: 'transparent', color: '#000' }}>
      <Container maxWidth='lg'>
        <Typography variant='body1' align='center'>
          Copyright &copy; {year} Keiju Hikichi
        </Typography>
      </Container>
    </Box>
  )
}

export default memo(Footer)
