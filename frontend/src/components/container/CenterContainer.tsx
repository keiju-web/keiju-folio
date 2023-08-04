import { FC } from 'react'

import { Container, ContainerProps } from '@mui/material'

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
        height: 'calc(100vh - 100px)',
        ...props.sx,
      }}
    >
      {children}
    </Container>
  )
}

export default CenterContainer
