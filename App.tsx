import { TamaguiProvider } from "tamagui";
import Main from "./components/pages/main";
import { useFonts } from 'expo-font'
import { db } from "./helpers/db"
import tamaguiConfig from './tamagui.config'
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import Auth from "./components/pages/auth";
import { ToastManager } from "./components/ui/ToastManager";

export default function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [isLoaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  })


  useEffect(() => {
    db.auth.getSession().then(({ data: { session } }) => {
      console.log(session)
      setSession(session)
    })

    db.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  if (!isLoaded) {
    return null;
  }


  return (
    <TamaguiProvider config={tamaguiConfig}>
      <>
        {session ? <Main /> : <Auth />}
        <ToastManager />
      </>
    </TamaguiProvider>
  )
}

