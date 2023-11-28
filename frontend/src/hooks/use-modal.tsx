import { createContext, useCallback, useContext, useState } from 'react'

import type { ModalProps } from 'components'
import type { FC, ReactNode } from 'react'

/**
 * Modal Context
 */

export type OpenModal = Pick<ModalProps, 'title' | 'contents'>

export type UseModal = ModalProps & {
  openModal: (data: OpenModal) => void
}

export const modalContext = createContext<UseModal>({} as UseModal)

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useModalProvider()
  return <modalContext.Provider value={value}>{children}</modalContext.Provider>
}

export const useModal = (): UseModal => useContext(modalContext)

const useModalProvider = (): UseModal => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [contents, setContents] = useState<ReactNode>()

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const openModal = useCallback((data: OpenModal) => {
    setIsOpen(true)
    setTitle(data.title)
    setContents(data.contents)
  }, [])

  return {
    isOpen,
    title,
    contents,
    openModal,
    closeModal,
  }
}
