import { useState } from "react";
import { 
  AbsoluteCenter, 
  Box, 
  Center, 
  Flex, 
  Image, 
  Input, 
  Text, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button, } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
import { useNavigate } from "react-router-dom";
import LoadingProgress from "./miscellaneous/LoadingProgress";

import {

} from '@chakra-ui/react'

function Register() {
  const [showLoadingProgress, setShowLoadingProgress] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()

  function handleLoadingRoute(url) {
    setShowLoadingProgress((prev) => !prev);
    setTimeout(() => {
      navigate(url);
    }, 2000);
  }

  function register(){
    console.log("registering...")
    const username = document.getElementById('username').value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
  }

  function navigator() {
    handleLoadingRoute('/login')
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
          <Button onClick={onOpen}  bg="#93C5FD" width="full">Register</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >Have an account ?</Text>
            <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Login !</Button>
          </Flex>
        </Flex>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>select profile picture</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
        
      </AbsoluteCenter>
    </>
  )
}

export default Register