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

  return (
    <div className='App'>
      {/* Init CSS */}
      <CssBaseline />

      {session ? (
        <BrowserRouter>
          <Layout>
            <Routes>
              {ROUTES.map((route, key) => {
                return <Route key={key} {...route} />
              })}
            </Routes>
          </Layout>
        </BrowserRouter>
      ) : (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='100vh'
          bgcolor='#f5f5f5'
        >
          <Box width='80%' maxWidth='300px'>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={['google', 'facebook', 'twitter']}
            />
          </Box>
        </Box>
      )}
    </div>
  )
}

export default App
