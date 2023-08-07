import { FC, ReactNode, Suspense, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { ROUTES } from 'constants/route'

import { Box } from '@mui/material'
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

  const currentRoute = useMemo(
    () => ROUTES.find((r) => r.path === location.pathname),
    [location.pathname],
  )

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{currentRoute?.name ?? 'Folio'}</title>
        </Helmet>
      </HelmetProvider>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            width: { sm: '30%' },
            position: 'fixed',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { sm: '70%' },
            ml: { sm: '30%' },
            height: '100vh',
            overflow: 'auto',
            bgcolor: currentRoute?.bgColor,
          }}
        >
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
              <Box component='main' mt={4}>
                {children}
              </Box>
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </Box>
      </Box>

      {/* Context Components */}
      <Modal {...modalProps} />
      <Toast {...toastProps} />
    </>
  )
}

export default Layout
