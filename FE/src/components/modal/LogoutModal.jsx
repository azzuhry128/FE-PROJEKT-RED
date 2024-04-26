import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    AbsoluteCenter,
    Center,
    Text,
} from '@chakra-ui/react'

const LogoutModal = (props) => {
    if(props.type != 'LogoutModal') {
        return null
    }

    return (
    <>
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <Text>are you sure you want to logout?</Text>
        </ModalBody>

        <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={props.onClose}>
            no
        </Button>
        <Button colorScheme='red'>yes</Button>
        </ModalFooter>
    </ModalContent>
    </Modal>
    </>
    )
}

export default LogoutModal