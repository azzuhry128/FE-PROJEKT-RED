import "@fontsource-variable/montserrat"
import { AbsoluteCenter, Button, Container, Flex,Input, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate= useNavigate()

  function register() {
    navigate("/register");
  }
  return (
    <>
    <AbsoluteCenter>
      <Container margin='auto'>
        <Flex direction="column" justifyContent='center' alignItems='center' border='1px' borderColor='#93C5FD' borderRadius='md' padding='16px'>
          <Text fontWeight='medium' fontSize="1.2rem">Please insert your Email and password </Text>
          <Input id="email" type="email" height="3rem" variant="outline" marginTop="1rem" placeholder="Email" backgroundColor="white" color="white" />
          <Input id="password" type="password" variant="outline" height="3rem" marginTop="1rem" backgroundColor="white" placeholder="Password" color="white" />
          <Button bg="#93C5FD" marginTop="1rem" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text >Dont have an account ?</Text>
            <Button onClick={register} variant="link" as="b" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </Container>
    </AbsoluteCenter>
    </>
  )
}

export default LoginPage