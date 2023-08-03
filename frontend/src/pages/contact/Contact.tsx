import { FC } from 'react'

import { CONTACT_US_IMG_SRC } from 'constants/env'

import { Container, Grid } from '@mui/material'
import Image from 'components/image/Image'

import ContactForm from './components/ContactForm'

const Contact: FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
      }}
    >
      <Grid container spacing={4} alignItems='center'>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image image={CONTACT_US_IMG_SRC} alt='contact-us-img' />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact
