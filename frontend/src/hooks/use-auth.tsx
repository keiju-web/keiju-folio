/* eslint-disable @typescript-eslint/no-extra-semi */
import { supabase } from 'constants/global-settings'

import { useState, useEffect, createContext, useCallback, useContext } from 'react'

import type { Session } from '@supabase/supabase-js'
import type { FC, ReactNode } from 'react'

/**
 * Auth Context
 */

export type User = {
  id: string
  email: string
}

export type Auth = {
  session: Session | null
  user: User
  isAuthorizing: boolean
  signOut: () => void
}

export const authContext = createContext<Auth>({} as Auth)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useAuthProvider()
  return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuth = (): Auth => useContext(authContext)

const useAuthProvider = (): Auth => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User>({ id: '', email: '' })
  const [isAuthorizing, setIsAuthorizing] = useState<boolean>(true)

  const signOut = useCallback(() => {
    supabase.auth.signOut()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        setIsAuthorizing(true)
        const {
          data: { session },
        } = await supabase.auth.getSession()
        setSession(session)
        setUser({
          id: session?.user.id ?? '',
          email: session?.user.email ?? '',
        })
      } catch (e) {
        // TOOD: Toast?
        console.log('authorizing error')
      } finally {
        setIsAuthorizing(false)
      }
    })()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { session, user, isAuthorizing, signOut }
}
