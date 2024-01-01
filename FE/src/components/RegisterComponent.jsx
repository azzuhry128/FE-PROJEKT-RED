import { AbsoluteCenter, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
// import { useLoginState } from "../state/store";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";
import { register } from "../api/register";
import { registerPhaseStore } from "../state/store";

export function RegisterComponent() {
  // const {emailState, passwordState, setEmailState, setPasswordState} = useLoginState()

  const {setUsernameState, setEmailState, setPasswordState} = registerPhaseStore()

  const navigate = useNavigate()
  
  function handleClick(){
    const username = document.getElementById('username').value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // const payload = { username, email, password }
    setUsernameState(username)
    setEmailState(email)
    setPasswordState(password)

    // register(payload)

    navigate('/register/profile')
  }

  function navigator() {
    navigate('/login')
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Button variant="link" fontSize={16} fontWeight="bold" color={"#93C5FD"}>Home</Button>
      </Box>

      <AbsoluteCenter>
        <Flex direction="column" gap={4}>
          <Text textColor="twitter.100" textAlign="center">create your new account</Text>
          <Input id="username" type="text" variant="outline" placeholder="Username" color="white" />
          <Input id="email" type="email" variant="outline" placeholder="Email" color="white" />
          <Input id="password" type="password" variant="outline" placeholder="Password" color="white" />
          <Button onClick={handleClick}  bg="#93C5FD" width="full">Register</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >have an account ?</Text>
            <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Login !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
    </>
  )
}