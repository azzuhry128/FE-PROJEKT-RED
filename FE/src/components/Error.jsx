import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

export function Error(props){
    return(
        <ModalOverlay bg="blackAlpha.300" backdropFilter='blur(10px) hue-rotate(90deg)'>
            <Modal isCentered isOpen={open} onClose={close} bg="red" display="flex" flexDirection="column">
                <ModalContent>
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalBody>
                        <Text>{props.title}</Text>
                        <Text>{props.message}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onclose} colorScheme="blue">close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ModalOverlay>
    )
}