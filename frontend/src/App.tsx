import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { supabase } from 'constants/global-settings'
import { ROUTES } from 'constants/route'

import { Box, CssBaseline } from '@mui/material'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Layout from 'components/layout/Layout'
import { useAuth } from 'hooks/use-auth'

const App: FC = () => {
  const { session, isAuthorizing } = useAuth()

  if (isAuthorizing) {
    return <></>
  }

  if (!session) {
    return (
      <Box display='flex' justifyContent='center'>
        <Box width='300px'>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            // TODO: Enabled
            providers={['google', 'facebook', 'twitter']}
          />
        </Box>
      </Box>
    )
  }

  return (
    <div className='App'>
      {/* Init CSS */}
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            {ROUTES.map((route, key) => {
              return <Route key={key} {...route} />
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
