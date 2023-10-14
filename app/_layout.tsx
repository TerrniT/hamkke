import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from '../tamagui.config';
import { AuthProvider } from "context/auth";
import RootLayoutNav from "layouts/root";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  })

  useEffect(() => {
    if (error) throw error;
  }, [error])


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null

  return (
    <AuthProvider>
      <TamaguiProvider config={tamaguiConfig}>
        <RootLayoutNav />
      </TamaguiProvider>
    </AuthProvider>
  )
}