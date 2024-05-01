import {
  Box,
  useDisclosure,
  Flex,
  Image,
  Center,
  Input,
  Button,
  Text,
  VStack,
  useToast

} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate= useNavigate()
  const toast = useToast()

  function redirectToLogin() {
    navigate("/login");
  }

  const registerAccount = async() => {
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const response = axios.post('127.0.0.1:3000/api/auth/register/', {
        username: username,
        email: email,
        password: password,
    })
    .then((response) => response)
    .catch((error) => console.log(error))

    const result = {
      status: 'invalid',
      title: 'email already registered',
      content: 'pleases use different email or login'
    }

    if(result.status == 'invalid') {
      return(
        toast({
          title: `${result.title}`,
          description: `${result.content}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
      })
      )
    }

    return (
      toast({
        title: `${result}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
    })
    )
}

  return (
    <>
      <Flex>
        <Box id="boxkiri" backgroundColor="#93C5FD" width="50%" height='100vh' alignContent='center'>
          <Center>
            <Image src="registerImage.png" ></Image>
          </Center>
        </Box>

        <Box id="boxkanan" width="50%" height='100vh' alignContent='center'>
          <Center>
            <VStack>
            <Text as = "b" textColor="#93C5FD" fontSize="1.5rem" textAlign="center" margin="0.5rem"  >Create Account</Text>
            <Input id="username" type="text" width="20rem" height="3rem" variant="outline" placeholder="Username" margin="0.5rem" />
            <Input id="email" type="email" width="20rem"  height="3rem" variant="outline" placeholder="Email" margin="0.5rem"/>
            <Image src="trashtalkBlur.png" zIndex={-1} position="absolute" marginTop="3rem" ></Image>
            <Input id="password" type="password" variant="outline" width="20rem" height="3rem" placeholder="Password" margin="0.5rem" />
            <Button onClick={() => registerAccount()} bg="#93C5FD"  width="20rem" height="3rem">Sign up</Button>
            <Flex alignItems="center" justifyContent="center">
              <Text >Already Have Account ?</Text>
              <Button onClick={redirectToLogin} variant="link" color="#93C5FD" ml={2}>Sign in !</Button>
            </Flex>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </>
  );
}

export default Register;
