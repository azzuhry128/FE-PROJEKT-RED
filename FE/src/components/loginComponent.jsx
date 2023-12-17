import { AbsoluteCenter, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
// import { useLoginState } from "../state/store";
import { login } from "../api/login";

export function LoginComponent() {
  // const {emailState, passwordState, setEmailState, setPasswordState} = useLoginState()
  
  function handleClick(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    console.log("click detected, creating payload")
    const payload = { email, password }
    // console.log(`payload value:`, payload)
    console.log("calling login function")
    login(payload)
    console.log("finished")
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Button variant="link" fontSize={16} fontWeight="bold" color={"#93C5FD"}>Home</Button>
      </Box>

      <AbsoluteCenter>
        <Flex direction="column" gap={4}>
          <Text textColor="twitter.100">Please insert your username and password</Text>
          <Input id="email" type="email" variant="outline" placeholder="Email" color="white" />
          <Input id="password" type="password" variant="outline" placeholder="Password" color="white" />
          <Button onClick={handleClick}  bg="#93C5FD" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >Dont have an account ?</Text>
            <Button variant="link" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
    </>
  )
}