import { FC, ReactNode, Suspense, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { ROUTES } from 'constants/route'

import { Box, Grid } from '@mui/material'
import Error from 'components/error/Error'
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
          <Box component='main'>
            <ErrorBoundary fallback={<Error />}>
              <Suspense fallback={<Loading />}>
                <Box my={4}>{children}</Box>
              </Suspense>
            </ErrorBoundary>
            {/* Context Components */}
            <Modal {...modalProps} />
            <Toast {...toastProps} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
