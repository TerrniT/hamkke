import { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { db } from "helpers/db"
import { useToastState } from '@tamagui/toast'
import { useAuthStore, useLoadingStore } from 'stores/auth/store'
import { AuthError, User } from '@supabase/supabase-js'
import { StyledView } from 'components/ui/styled'

import { Button, SizableText, Spinner, XStack, Input, Label, YStack, H1 } from 'tamagui'

export default function Auth() {
  const { isLoading, setLoading } = useLoadingStore()
  const { login } = useAuthStore()

  // We might changed this lines - maybe useForm() hoook or sommething else
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toast = useToastState()

  async function signInWithEmail() {
    setLoading(true);
    login(email, password)
      .then(() => {
        toast?.show({
          variant: "left-accent",
          placement: "top",
          title: "Succesfull !",
          bg: "green.500",
        });
      })
      .catch((error: AuthError) => {
        console.log("Login failed", error);
        toast?.show({
          variant: "left-accent",
          placement: "top",
          title: "Login failed",
          description: error.message,
          bg: "danger.500",
        });
      })
      .finally(() => setLoading(false));
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await db.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <StyledView>
      <XStack
        marginBottom="$9"
        justifyContent='space-between'
        alignItems='center'
        width="100%"
      >
        <H1>Login</H1>
      </XStack>
      <XStack>
        <Input flex={1} size="$4" value={email} placeholder="Email" autoCapitalize={'none'} onChangeText={(text) => setEmail(text)} />
      </XStack>
      <XStack marginTop="$4">
        <Input flex={1} size="$4" value={password} secureTextEntry placeholder="Password" autoCapitalize={'none'} onChangeText={(text) => setPassword(text)} />
      </XStack>
      <XStack marginTop="$7">
        <Button theme="pink" size="$5" width="100%" disabled={isLoading} color="$purple11" onPress={() => signInWithEmail()}>
          {isLoading ? <Spinner size="small" color="$purple0Light" /> : 'Sign In'}
        </Button>
      </XStack>
      <XStack
        marginTop="$4"
        justifyContent='space-between'
        alignItems='center'
        width="100%"
        paddingHorizontal="$2"
      >
        <SizableText size="$3" color="$gray5">Forgot Passoword?</SizableText>
      </XStack>
      <XStack
        marginTop="$10"
        justifyContent='space-between'
        alignItems='center'
        width="100%"
        paddingHorizontal="$7"
      >
        <SizableText size="$3" color="$purple11">Don't have an account ?</SizableText>
        <Button paddingHorizontal="$5" disabled={isLoading} onPress={() => signUpWithEmail()}>Sign Up</Button>
      </XStack>
    </StyledView >
  )
}

const styles = StyleSheet.create({
})
