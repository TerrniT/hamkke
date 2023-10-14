import { useAuth } from "context/auth"
import { Slot } from "expo-router"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useColorScheme } from "react-native"
import {ThemeProvider, DarkTheme, DefaultTheme} from "@react-navigation/native"

export default function RootLayoutNav() {
  const colorScheme = useColorScheme()
  const {session, authInitialized } = useAuth()

  if(!authInitialized && !session) return null

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </ThemeProvider>

  )

}

