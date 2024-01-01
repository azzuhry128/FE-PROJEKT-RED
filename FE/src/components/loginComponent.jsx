import { AbsoluteCenter, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
// import { useLoginState } from "../state/store";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function LoginComponent() {

  const navigate = useNavigate()
  
  function handleClick(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    axios.post('http://localhost:3000/api/auth/login/', {
      email: email,
      password: password
    }).then((response) => response).catch((error) => console.log(error))
  }

  function navigator() {
    navigate('/register')
  }

  function home() {
    navigate('/')
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Button onClick={home} variant="link" fontSize={16} fontWeight="bold" color={"#93C5FD"}>Home</Button>
      </Box>

      <AbsoluteCenter>
        <Flex direction="column" gap={4}>
          <Text textColor="twitter.100">Please insert your username and password</Text>
          <Input id="email" type="email" variant="outline" placeholder="Email" color="white" />
          <Input id="password" type="password" variant="outline" placeholder="Password" color="white" />
          <Flex alignItems="center" justifyContent='start'>
            <Text textColor="white" fontSize='xs' fontWeight='medium'>forgot password ?</Text>
            <Button variant="link" color="#93C5FD" fontSize='xs' fontWeight='medium'>reset !</Button>
          </Flex>
          <Button onClick={handleClick}  bg="#93C5FD" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >Dont have an account ?</Text>
            <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
    </>
  )
}