import { Container } from '@mui/material'

import type { ContainerProps } from '@mui/material'
import type { FC } from 'react'

type Props = ContainerProps

const CenterContainer: FC<Props> = ({ children, ...props }) => {
  return (
    <Container
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.sx,
      }}
    >
      {children}
    </Container>
  )
}

export default CenterContainer
