import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, XStack } from 'tamagui';
import { SheetDemo } from '../ui/AlertDialog';
import { StyledView } from "../ui/styled";
import { Session } from '@supabase/supabase-js';
import { useAuthStore } from '../../store/store';

// interface Props {
//   session: Session
// }

// session: Props
export default function Main() {

  const { logout } = useAuthStore()

  async function logoutOnPress() {
    logout()
  }


  return (
    <StyledView>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <XStack>
        <Input flex={1} size="$3" />
        {/* {{ session }} */}
      </XStack>
      <Button themeInverse size="$3" onPress={() => logoutOnPress()}>
        Log Out
      </Button>
      <SheetDemo />
    </StyledView>
  )
}

const styles = StyleSheet.create({

});


