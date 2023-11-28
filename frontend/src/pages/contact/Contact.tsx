import { CONTACT_US_IMG_SRC } from 'constants/env'

import { Grid, Hidden } from '@mui/material'
import { Image, CenterContainer } from 'components'

import ContactForm from './components/ContactForm'

import type { FC } from 'react'

const Contact: FC = () => {
  return (
    <CenterContainer>
      <Grid container spacing={4} alignItems='center'>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={6}>
            <Image image={CONTACT_US_IMG_SRC} alt='contact-us-img' />
          </Grid>
        </Hidden>
      </Grid>
    </CenterContainer>
  )
}

export default Contact
