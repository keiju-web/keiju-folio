import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from 'constants/route'

import { CssBaseline } from '@mui/material'
// import Auth from 'components/auth/Auth'
import Layout from 'components/layout/Layout'
import ScrollTop from 'components/util/ScrollToTop'
import { useAuth } from 'hooks/use-auth'

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
        <ScrollTop />
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
