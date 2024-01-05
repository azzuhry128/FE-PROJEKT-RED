import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";

function SettingModal({isOpen, onClose}){

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent position='absolute' left='0' bottom='0' margin='0.5rem' width='356px' alignSelf='start' containerProps={{ justifyContent: 'flex-end', paddingRight: '2rem' }}>
                    <ModalHeader>Settings</ModalHeader>
                    <ModalBody width='6rem'>
                        <Text>hello</Text>
                    </ModalBody>
                    <ModalFooter display="flex" gap={4}>
                        <Button onClick={onClose} colorScheme="blue">close</Button>
                    </ModalFooter>
                </ModalContent>
        </Modal>
    )
}

export default SettingModal