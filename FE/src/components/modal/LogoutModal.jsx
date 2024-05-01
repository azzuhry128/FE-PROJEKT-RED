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
import { useNavigate } from 'react-router-dom'

const LogoutModal = (props) => {
    const navigate = useNavigate()
    const wipeCache = () => {
        const keys = ['account', 'contact', 'message']
        for (const key of keys) {
            localStorage.removeItem(key)
        }
    }

    const redirectToLogin = () => {
        navigate("/login");
    }

    const handleClick = () => {
        wipeCache()
        redirectToLogin()
    }

    if(props.type != 'LogoutModal') {
        return null
    }

    return (
    <>
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
        <ModalHeader>are you sure?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <Text>your saved data will be deleted and you will have to login next time </Text>
        </ModalBody>

        <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={props.onClose}>
            no
        </Button>
        <Button onClick={() => handleClick()} colorScheme='red'>yes</Button>
        </ModalFooter>
    </ModalContent>
    </Modal>
    </>
    )
}

export default LogoutModal