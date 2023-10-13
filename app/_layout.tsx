import { Suspense, useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import {useFonts} from 'expo-font';
import { TamaguiProvider, Text, Theme } from "tamagui";
import { useColorScheme } from "react-native";
import tamaguiConfig from '../tamagui.config';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { AuthProvider, useAuth } from "context/auth";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  })

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if(!loaded) return null

  return (
    <AuthProvider>
      <TamaguiProvider config={tamaguiConfig}>
         <RootLayoutNav/>
      </TamaguiProvider>
    </AuthProvider>
  )
}


export function RootLayoutNav() {
  const colorScheme = useColorScheme()
  const {session, authInitialized } = useAuth()

  return (
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            <Slot/>
          </ThemeProvider>
        </Theme>
      </Suspense>

  )

}

