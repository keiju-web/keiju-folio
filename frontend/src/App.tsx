import { ROUTES } from 'constants/route'

import { CssBaseline } from '@mui/material'
// import Auth from 'components/auth/Auth'
import { Layout, ScrollToTop } from 'components'
import { useAuth } from 'hooks/use-auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import type { FC } from 'react'

const App: FC = () => {
  const { session, isAuthorizing } = useAuth()

  // if (isAuthorizing) {
  //   return <></>
  // }

  return (
    <div className='App'>
      {/* Init CSS */}
      <CssBaseline />

      {/* {session ? ( */}
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {ROUTES.map((route, key) => {
              return <Route key={key} {...route} />
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
      {/* ) : (
        <Auth />
      )} */}
    </div>
  )
}

export default App
