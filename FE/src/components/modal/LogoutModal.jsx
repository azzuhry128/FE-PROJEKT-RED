import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

function LogoutModal({isOpen, onClose}){

    function exit() {
        const navigate = useNavigate()
        navigate('/login')
    }

    return(
        <Modal isCentered isOpen={isOpen} onClose={onClose} bg="red" display="flex" flexDirection="column">
            <ModalOverlay bg="blackAlpha.100" backdropFilter='blur(10px)'>
                <ModalContent>
                    <ModalHeader>you will be logged out</ModalHeader>
                    <ModalBody>
                        <Text>are you sure about that ?</Text>
                    </ModalBody>
                    <ModalFooter display="flex" gap={4}>
                        <Button onClick={onClose} colorScheme="blue">no</Button>
                        <Button onClick={exit} colorScheme='red'>yes</Button>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

export default LogoutModal