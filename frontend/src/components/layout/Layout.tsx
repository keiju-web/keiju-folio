import { ROUTES } from 'constants/route'

import { Box } from '@mui/material'
import { Error, Footer, Loading, Modal, Sidebar, Toast, SCROLL_TO_TOP_ID } from 'components'
import { useModal } from 'hooks/use-modal'
import { useToast } from 'hooks/use-toast'
import { Suspense, useMemo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import type { FC, ReactNode } from 'react'

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
          <title>{currentRoute?.name ?? 'Folio'} | keiju-folio</title>
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
            width: { md: '30%' },
            position: 'fixed',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <Sidebar />
        </Box>

        <Box
          id={SCROLL_TO_TOP_ID}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { md: '70%' },
            ml: { md: '30%' },
            height: '100vh',
            overflow: 'auto',
            bgcolor: currentRoute?.bgColor,
          }}
        >
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
              <Box component='main' my={{ xs: 8, md: 4 }}>
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
