import { FC, ReactNode, Suspense, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { ROUTES } from 'constants/route'

import { Box, Grid } from '@mui/material'
import Error from 'components/error/Error'
import Footer from 'components/footer/Footer'
import Loading from 'components/loading/Loading'
import Modal from 'components/modal/Modal'
import Sidebar from 'components/sidebar/Sidebar'
import Toast from 'components/toast/Toast'
import { useModal } from 'hooks/use-modal'
import { useToast } from 'hooks/use-toast'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider, Helmet } from 'react-helmet-async'

type Props = {
  children: ReactNode
}

/**
 * Common layout
 * TODO： Responsive design
 */
const Layout: FC<Props> = ({ children }) => {
  const location = useLocation()
  const modalProps = useModal()
  const toastProps = useToast()

  const title = useMemo(() => {
    const route = ROUTES.find((route) => route.path === location.pathname)
    return route?.name ?? 'Folio'
  }, [location.pathname])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <Grid container>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Box
              component='main'
              sx={{
                flex: '1',
              }}
            >
              <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                  <Box my={4}>{children}</Box>
                </Suspense>
              </ErrorBoundary>
            </Box>
            <Footer />
          </Box>
        </Grid>
      </Grid>

      {/* Context Components */}
      <Modal {...modalProps} />
      <Toast {...toastProps} />
    </>
  )
}

export default Layout
