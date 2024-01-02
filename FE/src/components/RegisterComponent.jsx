import { useState } from "react";
import { AbsoluteCenter, Box, Button, Center, Flex, Image, Input, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
// import { useLoginState } from "../state/store";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";
import { register } from "../api/register";
import { registerPhaseStore } from "../state/store";
import LoadingProgress from "./LoadingProgress";

export function RegisterComponent() {
  // const {emailState, passwordState, setEmailState, setPasswordState} = useLoginState()

  const {setUsernameState, setEmailState, setPasswordState} = registerPhaseStore()

  const [showLoadingProgress, setShowLoadingProgress] = useState(false);

  function handleLoadingRoute(url) {
    setShowLoadingProgress((prev) => !prev);
    setTimeout(() => {
      navigate(url);
    }, 2000);
  }

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

    handleLoadingRoute('/register/profile')
  }

  function navigator() {
    handleLoadingRoute('/login')
  }

  function navigatorToHome() {
    handleLoadingRoute('/')
  }

  return (
    <>
    {
            showLoadingProgress ?
            (
              <LoadingProgress show={showLoadingProgress} />
            ) : (
              <></>
            )
          }
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Button variant="link" fontSize={20} fontWeight="bold" color={"#93C5FD"} onClick={navigatorToHome} _hover={{textDecoration: 'none'}}>TrashTalk.io</Button>
      </Box>

      <AbsoluteCenter>
        <Flex direction="column" gap={4}>
        <Center>
            <Box boxSize='13vh' marginBottom='30px' >
              <Image src="trashtalk.png" bg='white' borderRadius='full'></Image>
            </Box>
          </Center>
          <Text textColor="twitter.100" textAlign="center">Create your new account</Text>
          <Input id="username" type="text" variant="outline" placeholder="Username" color="white" />
          <Input id="email" type="email" variant="outline" placeholder="Email" color="white" />
          <Input id="password" type="password" variant="outline" placeholder="Password" color="white" />
          <Button onClick={handleClick}  bg="#93C5FD" width="full">Register</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >Have an account ?</Text>
            <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Login !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
    </>
  )
}