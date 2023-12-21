import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import 'boxicons'
import { useSidebarStore } from "../state/store";
import ErrorComponent from "./ErrorComponent";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
    let { sideBarState, setSidebarState } = useSidebarStore()
    const {isOpen, onOpen, onClose} = useDisclosure()
    const navigate = useNavigate()

    function handleButtonClick(state) {
        setSidebarState(state)
        console.log(`switch state to: ${setSidebarState}`)
    }

    function redirector() {
        console.log("redirecting user")
        navigate('/login')
    }

    return(
        <>
        <Flex direction="column" justifyContent="space-between">
            <Flex bg="#0F172A" flexDirection="column" justifyContent="center" gap="6" padding="16px">
                <Button onClick={() => handleButtonClick('contacts')} colorScheme="teal" variant="link">
                    <Box padding="0.5rem">
                        <box-icon type="solid" name="phone" color="white"></box-icon>
                    </Box>
                </Button>

                <Button onClick={() => handleButtonClick('notifications')} colorScheme="teal" variant="link">
                    <Box padding="0.5rem">
                        <box-icon type='solid' name='bell' color="white"></box-icon>
                    </Box>
                </Button>

                <Button onClick={() => handleButtonClick('profile')} colorScheme="teal" variant="link">
                    <Box padding="0.5rem">
                        <box-icon type='solid' name='user-account' color="white"></box-icon>
                    </Box>
                </Button>
            </Flex>
            <Button onClick={onOpen} colorScheme="teal" variant="link">
                <Box padding="0.5rem">
                    <box-icon name='door-open' type='solid' color='white'></box-icon>
                </Box>
            </Button>
            <ErrorComponent isOpen={isOpen} close={onClose} onYesClick={redirector} title="warning" message="are you sure you want to log out"/>
        </Flex>
        </>
    )
}