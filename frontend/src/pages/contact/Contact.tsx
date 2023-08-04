import { FC } from 'react'

import { CONTACT_US_IMG_SRC } from 'constants/env'

import { Grid } from '@mui/material'
import CenterContainer from 'components/container/CenterContainer'
import Image from 'components/image/Image'

import ContactForm from './components/ContactForm'

const Contact: FC = () => {
  return (
    <CenterContainer>
      <Grid container spacing={4} alignItems='center'>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image image={CONTACT_US_IMG_SRC} alt='contact-us-img' />
        </Grid>
      </Grid>
    </CenterContainer>
  )
}

export default Contact
