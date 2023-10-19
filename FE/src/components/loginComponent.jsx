import { AbsoluteCenter, Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"

export function LoginComponent() {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Button variant="link" fontSize={16} fontWeight="bold" color={"#93C5FD"}>Home</Button>
      </Box>

      <AbsoluteCenter >
        <Flex direction="column" gap={4}>
          <Text textColor="twitter.100">Please insert your username and password</Text>
          <Input variant="filled" placeholder="Username" />
          <Input variant="filled" placeholder="Password" />
          <Button bg="#93C5FD" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >Dont have an account ?</Text>
            <Button variant="link" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
    </>
  )
}