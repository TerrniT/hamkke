import { Text, View, styled } from "tamagui"

export const Container = styled(View, {
  name: "Container",
  marginTop: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#777777",
})

export default function Unmatched() {
  return (
    <Container>
      <Text color="$purple10" fontSize={30}>
        404
      </Text>
    </Container>
  )
}
