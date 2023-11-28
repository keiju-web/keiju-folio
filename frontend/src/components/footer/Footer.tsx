import { Box, Container, Typography } from '@mui/material'
import { memo, useMemo } from 'react'

import type { FC } from 'react'

/** Sticky Footer */
const Footer: FC = () => {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <Box component='footer' sx={{ bgcolor: 'transparent', mt: 'auto' }}>
      <Container maxWidth='lg'>
        <Typography variant='body2' align='center'>
          Copyright &copy; {year} Keiju Hikichi
        </Typography>
      </Container>
    </Box>
  )
}

export default memo(Footer)
