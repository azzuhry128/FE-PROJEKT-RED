import { useState, useRef } from "react";
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
import LoadingProgress from "./miscellaneous/LoadingProgress";

import {

} from '@chakra-ui/react'
import axios from "axios";

function Register() {
  const [showLoadingProgress, setShowLoadingProgress] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // variable untuk popupnya
  const [selectedImage, setSelectedImage] = useState(null); // State untuk menyimpan gambar yang dipilih


  // biar kalau tombol di klick keluar pop up
  const openFileUploader = () => {
    fileInputRef.current.click();
  };
  // setelah di klick trs di apain?
  const handleFileSelect = (event) => {
    event.preventDefault();

    const selectedFile = event.currentTarget.files[0];
    console.log('File selected:', selectedFile ? selectedFile.name : 'No file selected');
    setSelectedImage(selectedFile);

  };
  // const selectedImage = []

  function handleLoadingRoute(url) {
    setShowLoadingProgress((prev) => !prev);
    setTimeout(() => {
      navigate(url);
    }, 2000);
  }


  async function confirmUserData() {
    console.log("confirming data...")
    // const data = []
    const usernameInput = document.getElementById('username').value
    const emailInput = document.getElementById("email").value
    const passwordInput = document.getElementById("password").value

    const data = {
      username: usernameInput,
      email: emailInput,
      password: passwordInput
    }

    // onOpen()
    return data
  }

  async function imageRename() {
    console.log('renaming image...')

    const newImageName = Date.now()
    const renamedImage = new File([selectedImage[0]], newImageName, { type: selectedImage.type })

    return renamedImage
  }

  //TODO upload image to firebase
  async function uploadImageToFirebase() {
    console.log('uploading image to firebase...')
  }

  async function register() {
    console.log('registering...')

    const data = await confirmUserData()
    const image = await imageRename()

    const result = await axios('http://localhost:3000/api/auth/register/', {
      method: 'POST',
      data: { 'username': data.username, 'email': data.email, 'password': data.password, 'image': image.name }
    }).then((response) => response).catch((error) => console.log(error))

    console.log(result)
  }

  function navigator() {
    handleLoadingRoute('/login')
  }



  return (
    <>
      {showLoadingProgress ? (
        <LoadingProgress show={showLoadingProgress} />
      ) : (
        <></>
      )}

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
            <Button onClick={onOpen} bg="#93C5FD"  width="20rem" height="3rem">Sign up</Button>
            <Flex alignItems="center" justifyContent="center">
              <Text textColor="white">Already Have Account ?</Text>
              <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Sign in !</Button>
            </Flex>
            </VStack>
          </Center>
        </Box>

      </Flex>






      {/* <AbsoluteCenter>
        <Flex direction="column" gap={4}>
          <Center>
            <Box boxSize='13vh' marginBottom='30px' >
              
            </Box>
          </Center>
          <Text textColor="twitter.100" textAlign="center">Create your new account</Text>
          <Input id="username" type="text" variant="outline" placeholder="Username" color="white" />
          <Input id="email" type="email" variant="outline" placeholder="Email" color="white" />
          <Input id="password" type="password" variant="outline" placeholder="Password" color="white" />
          <Button onClick={onOpen}  bg="#93C5FD" width="full">Confirm</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white">Have an account ?</Text>
            <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Login !</Button>
          </Flex>
        </Flex>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Select Profile Picture</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                <Box backgroundColor="#EFFFFD" borderRadius="md" boxShadow="md" width="20rem" height="22rem" marginLeft="2.5rem">
                  <Center>
                    <Image src={selectedImage ? URL.createObjectURL(selectedImage) : "BlankAvatar.jpg"} bg='white' boxSize="10rem" borderRadius='full' marginTop="1rem"></Image>
                  </Center>
                  <Text color="black" marginTop="1rem" marginLeft="6.7rem">Drag and Drop </Text>
                  <Text color="black" marginLeft="8rem">a Picture </Text>
                  <Text color="black" marginLeft="6.7rem">━━━━━ Or ━━━━━ </Text>
                  <Button id="TombolBrowse" onClick={openFileUploader} width="7.5rem" marginLeft="6.3rem" marginTop="0.5rem" backgroundColor="black" textColor="white">
                    Browse
                    <Input type="file" onChange={handleFileSelect} ref={fileInputRef} style={{ display: 'none' }} />
                  </Button>
                </Box>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={register}>
                confirm
            </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AbsoluteCenter> */}
    </>
  );
}

export default Register;
