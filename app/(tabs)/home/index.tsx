import { SheetDemo } from "components/ui/AlertDialog"
import { StyledView } from "components/ui/styled/index"
import { useAuthStore } from "stores/auth/store"
import { Button } from "tamagui"

export default function Main() {
  const { logout } = useAuthStore()

  async function logoutOnPress() {
    logout()
  }
  return (
    <StyledView>
      <Button themeInverse size="$3" onPress={() => logoutOnPress()}>
        Log Out
      </Button>
      <SheetDemo />
    </StyledView>
  )
}
