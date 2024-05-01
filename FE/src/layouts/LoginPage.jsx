import "@fontsource-variable/montserrat"
import { AbsoluteCenter, Button, Container, Flex,Input, Text, useToast} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate= useNavigate()
  const toast = useToast()

  const loginAPI = async() => {    
    const response = axios.post('127.0.0.1:3000/api/auth/login/', {
        email: email,
        password: password
    })
    .then((response) => response)
    .catch((error) => console.log(error))

    return response
  }

  const loginAccount = async() => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const result = {
      status: 'invalid',
      title: 'incorrect password or email',
      content: 'please insert correct email and password'
    }

    if(email == '' || password == '') {
      return (
        toast({
          title: `please fill email and password`,
          status: 'error',
          duration: 9000,
          isClosable: true,
      })
      )
    }

    if(result.status == 'invalid') {
      return (
        toast({
          title: result.title,
          description: result.content,
          status: 'error',
          duration: 9000,
          isClosable: true,
      })
      )
    }

    // const api = loginAPI()
    // console.log(await api)
  }

  const redirectToRegister = () => {
    navigate("/register");
  }
  return (
    <>
    <AbsoluteCenter>
      <Container margin='auto'>
        <Flex direction="column" justifyContent='center' alignItems='center' border='1px' borderColor='#93C5FD' borderRadius='md' padding='16px'>
          <Text fontWeight='medium' fontSize="1.2rem">Please insert your Email and password </Text>
          <Input id="email" type="email" height="3rem" variant="outline" marginTop="1rem" placeholder="Email"/>
          <Input id="password" type="password" variant="outline" height="3rem" marginTop="1rem"placeholder="Password"/>
          <Button onClick={() => loginAccount()} bg="#93C5FD" marginTop="1rem" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text >Dont have an account ?</Text>
            <Button onClick={() => redirectToRegister()} variant="link" as="b" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </Container>
    </AbsoluteCenter>
    </>
  )
}

export default LoginPage