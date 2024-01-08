import { useState, useRef } from "react";
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
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LoadingProgress from "./miscellaneous/LoadingProgress";

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

  function handleLoadingRoute(url) {
    setShowLoadingProgress((prev) => !prev);
    setTimeout(() => {
      navigate(url);
    }, 2000);
  }

  function register() {
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
      {showLoadingProgress ? (
        <LoadingProgress show={showLoadingProgress} />
      ) : (
        <></>
      )}

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
          <Button onClick={onOpen} bg="#93C5FD" width="full">Register</Button>
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
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AbsoluteCenter>
    </>
  );
}

export default Register;
