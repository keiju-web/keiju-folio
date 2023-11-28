import 'index.css'

import { ENVIRONMENT } from 'constants/env'
import { muiTheme, queryClient } from 'constants/global-settings'

import { ThemeProvider } from '@mui/material/styles'
import { AuthProvider } from 'hooks/use-auth'
import { ModalProvider } from 'hooks/use-modal'
import { ToastProvider } from 'hooks/use-toast'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'

import App from './App'
import reportWebVitals from './reportWebVitals'

import type { SetupWorker } from 'msw'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

if (ENVIRONMENT === 'local') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker }: { worker: SetupWorker } = require('./mocks/browser')
  worker.start({
    // Turn off the warnings
    onUnhandledRequest: 'bypass',
  })
}

root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <ToastProvider>
            <ThemeProvider theme={muiTheme}>
              <App />
            </ThemeProvider>
          </ToastProvider>
        </ModalProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
