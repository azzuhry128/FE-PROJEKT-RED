import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

function ErrorComponent(props){

    return(
        <Modal isCentered isOpen={props.isOpen} onClose={props.onClose} bg="red" display="flex" flexDirection="column">
            <ModalOverlay bg="blackAlpha.300" backdropFilter='blur(10px) hue-rotate(90deg)'>
                <ModalContent>
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalBody>
                        <Text>{props.message}</Text>
                    </ModalBody>
                    <ModalFooter display="flex" gap={4}>
                        <Button onClick={props.close} colorScheme="blue">no</Button>
                        <Button onClick={props.onYesClick} colorScheme="red">yes</Button>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

export default ErrorComponent