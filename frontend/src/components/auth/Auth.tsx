import { FC } from 'react'

import { supabase } from 'constants/global-settings'

import { Box } from '@mui/material'
import { Auth as SupabaseAuth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const Auth: FC = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      bgcolor='#f5f5f5'
    >
      <Box width='80%' maxWidth='300px'>
        <SupabaseAuth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'facebook', 'twitter']}
        />
      </Box>
    </Box>
  )
}

export default Auth
