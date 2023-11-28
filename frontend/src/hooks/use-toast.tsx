import { createContext, useCallback, useContext, useState } from 'react'

import type { AlertColor } from '@mui/material'
import type { ToastProps } from 'components'
import type { FC, ReactNode } from 'react'

/**
 * Toast Context
 */

export type OpenToast = Pick<ToastProps, 'message' | 'severity'>

export type UseToast = ToastProps & {
  openToast: (data: OpenToast) => void
}

export const toastContext = createContext<UseToast>({} as UseToast)

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useToastProvider()
  return <toastContext.Provider value={value}>{children}</toastContext.Provider>
}

export const useToast = (): UseToast => useContext(toastContext)

const useToastProvider = (): UseToast => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [severity, setSeverity] = useState<AlertColor>()

  const closeToast = useCallback(() => {
    setIsOpen(false)
  }, [])

  const openToast = useCallback((data: OpenToast) => {
    setIsOpen(true)
    setMessage(data.message)
    setSeverity(data.severity)
  }, [])

  return {
    isOpen,
    message,
    severity,
    openToast,
    closeToast,
  }
}
