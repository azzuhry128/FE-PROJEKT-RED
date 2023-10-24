import { AbsoluteCenter, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
import { useState } from "react";

export function LoginComponent(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setSHow] = useState(false)


  function onEmailChangeHandler(event) {
    setEmail(event.target.value)
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value)
  }

  function homeClickHandler() {
    props.onHomeClick()
  }

  function registerClickHandler() {
    props.onRegisterClick()
  }

  const loginClickHandler = async () => {
    try {
      const response = await postLoginData(email, password)
      const { token } = response.token
      uploadTokenToStorage(await token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Button onClick={homeClickHandler} variant="link" fontSize={16} fontWeight="bold" color={"#93C5FD"}>Home</Button>
      </Box>

      <AbsoluteCenter >
        <Flex direction="column" gap={4}>
          <Text textColor="twitter.100">Please insert your username and password</Text>
          <Input onChange={onEmailChangeHandler} variant="outline" placeholder="Email" color="white" />
          <Input onChange={onPasswordChangeHandler} variant="outline" placeholder="Password" type={show ? 'text' : 'password'} color="white" />
          <Button onClick={loginClickHandler} bg="#93C5FD" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >Dont have an account ?</Text>
            <Button onClick={registerClickHandler} variant="link" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
    </>
  )
}