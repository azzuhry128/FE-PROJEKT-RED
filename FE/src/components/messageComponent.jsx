import { Text } from "@chakra-ui/react";

export function MessageComponent(props) {
  return (
    <>
      <Text color="blue">{props.message}</Text>
    </>
  )
}
