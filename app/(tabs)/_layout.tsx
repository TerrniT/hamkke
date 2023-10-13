import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../../tamagui.config";
import { ToastManager } from "components/ui/ToastManager";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Tabs>
        <Tabs.Screen name="home" options={{title: "Home"}}  />
        <Tabs.Screen name="settings" options={{title: "Settings"}}  />
      </Tabs>
      <ToastManager />
    </TamaguiProvider>
  )
}
