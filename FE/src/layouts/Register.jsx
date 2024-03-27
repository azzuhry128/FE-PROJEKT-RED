import {
  Box,
  useDisclosure,
  Flex,
  Image,
  Center,
  Input,
  Button,
  Text,
  VStack

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate= useNavigate()

  function login() {
    navigate("/login");
  }
  return (
    <>
      <Flex>
        <Box id="boxkiri" backgroundColor="#93C5FD" width="50%" height="56.9rem">
          <Center marginTop="15rem">
            <Image src="registerImage.png" ></Image>
          </Center>
        </Box>

        <Box id="boxkanan" width="50%" height="56.9rem">
          <Center marginTop="15rem">
            <VStack>
            <Text as = "b" textColor="#93C5FD" fontSize="1.5rem" textAlign="center" margin="0.5rem"  >Create Account</Text>
            <Input id="username" type="text" width="20rem" height="3rem" variant="outline" placeholder="Username" color="white" margin="0.5rem" />
            <Input id="email" type="email" width="20rem"  height="3rem" variant="outline" placeholder="Email" color="white" margin="0.5rem"/>
            <Image src="trashtalkBlur.png" zIndex={-1} position="absolute" marginTop="3rem" ></Image>
            <Input id="password" type="password" variant="outline" width="20rem" height="3rem" placeholder="Password" color="white" margin="0.5rem" />
            <Button bg="#93C5FD"  width="20rem" height="3rem">Sign up</Button>
            <Flex alignItems="center" justifyContent="center">
              <Text >Already Have Account ?</Text>
              <Button onClick={login} variant="link" color="#93C5FD" ml={2}>Sign in !</Button>
            </Flex>
            </VStack>
          </Center>
        </Box>

      </Flex>
    </>
  );
}

export default Register;
