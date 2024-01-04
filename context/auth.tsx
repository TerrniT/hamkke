import { AuthSession } from "@supabase/supabase-js"
import { useRouter, useSegments, useRootNavigationState } from "expo-router"
import * as React from "react"
import { useContext, useEffect, useState, createContext } from "react"

import { db as supabaseClient } from "../helpers/db"

interface Props {
  children?: React.ReactNode
}

export interface AuthContextType {
  session: AuthSession | null | undefined
  authInitialized: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: Props) {
  const segments = useSegments()
  const router = useRouter()

  const [session, setSession] = useState<AuthSession | null>(null)
  const [authInitialized, setAuthInitialized] = useState(false)

  const navigationState = useRootNavigationState()

  useEffect(() => {
    if (!navigationState?.key || !authInitialized) return
    const inAuthGroup = segments[0] === "(auth)"

    if (!session?.user && !inAuthGroup) {
      router.replace("/(auth)/login/")
    } else if (session?.user && inAuthGroup) {
      router.replace("/(tabs)/home") // to tabs
    }
  }, [session, segments, authInitialized, navigationState?.key])

  useEffect(() => {
    if (authInitialized) return

    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: authListner } = supabaseClient.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session)
        setAuthInitialized(true)

        if (_event == "TOKEN_REFRESHED") {
          //Handle Accordinngly
        }
      },
    )

    return () => {
      authListner.subscription
    }
  }, [])

  return (
    <AuthContext.Provider value={{ session, authInitialized }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a MyUserContextProvider.`)
  }
  return context
}
