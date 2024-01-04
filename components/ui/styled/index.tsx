import { GetProps, View, styled } from "tamagui" // or '@tamagui/core'

const StyledView = styled(View, {
  name: "StyledView",
  paddingHorizontal: 16,
  flex: 1,
  backgroundColor: "#000",
  alignItems: "center",
  justifyContent: "center",
})

export type StyledViewProps = GetProps<typeof StyledView>

export { StyledView }
