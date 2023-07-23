import { FC, ReactNode, createContext, useCallback, useContext, useState } from 'react'

/**
 * Modal Context
 */

export type ModalProps = {
  isOpen: boolean
  title: string
  contents: ReactNode
  openModal: (title: string, content: ReactNode) => void
  closeModal: () => void
}

export const modalContext = createContext<ModalProps>({} as ModalProps)

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useModalProvider()
  return <modalContext.Provider value={value}>{children}</modalContext.Provider>
}

export const useModal = (): ModalProps => useContext(modalContext)

const useModalProvider = (): ModalProps => {
  const [isOpen, setisOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [contents, setContents] = useState<ReactNode>(<></>)

  const openModal = useCallback((title: string, contents: ReactNode) => {
    setTitle(title)
    setContents(contents)
    setisOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setTitle('')
    setContents(<></>)
    setisOpen(false)
  }, [])

  return {
    isOpen,
    title,
    contents,
    openModal,
    closeModal,
  }
}
