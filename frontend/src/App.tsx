import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from 'constants/route'

import { CssBaseline } from '@mui/material'
import Layout from 'components/layout/Layout'
import { useAuth } from 'hooks/use-auth'

const App: FC = () => {
  const { session, isAuthorizing } = useAuth()

  // // TODO: loading by isAuthorizing
  // if (!session) {
  //   return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  // }

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
