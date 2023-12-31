import { Avatar, Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import 'boxicons'
import { useSidebarStore } from "../state/store";
import ErrorComponent from "./ErrorComponent";
import { useNavigate } from "react-router-dom";
import { SettingComponent } from "./SettingComponent";
import { useState } from "react";

export function Sidebar() {
    // let { sideBarState, setSidebarState } = useSidebarStore()
    const sidebarState = useSidebarStore((state) => state.setSidebarState)
    const {onOpen, onClose} = useDisclosure()
    const navigate = useNavigate()

    // console.log(sidebarState)

    // function handleButtonClick(state) {
    //     setSidebarState(state)
    //     console.log(`switch state to: ${setSidebarState}`)
    //     console.log(`current state: ${sideBarState}`)
    // }

    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    function redirector() {
        console.log("redirecting user")
        navigate('/login')
    }
    
    function settingModal() {
        setModalType('setting')
        setIsOpen(true)
    }

    function exitModal() {
        setModalType('logout')
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen('false')
        setModalType('')
    }
        
    return(
        <>
        <Flex direction="column" justifyContent="space-between">
            <Flex bg="#0F172A" flexDirection="column" justifyContent="center" gap="6">
                <Button colorScheme="teal" variant="link">
                    <Box padding="1rem">
                        <Avatar size="sm" onClick={(e) => sidebarState('profile')}/>
                    </Box>
                </Button>

                <Button onClick={(e) => sidebarState('contacts')}  colorScheme="teal" variant="link">
                    <Box padding="0.5rem">
                        <box-icon type='solid' name='chat' color="white" animation="tada-hover"></box-icon>
                    </Box>
                </Button>

                <Button onClick={(e) => sidebarState('phone')}  colorScheme="teal" variant="link">
                    <Box padding="0.5rem">
                        <box-icon type='solid' name='phone' color="white" animation="tada-hover"></box-icon>
                    </Box>
                </Button>

            </Flex>

            <Flex direction="column">
                <Button onClick={(e)=> settingModal()}  colorScheme="teal" variant="link">
                    <Box padding="0.5rem">
                        <box-icon type='solid' name='cog' color="white" animation='spin-hover'></box-icon>
                    </Box>
                </Button>

                <Button onClick={(e)=> exitModal()} colorScheme="teal" variant="link">
                    <Box padding="0.5rem">
                        <box-icon name='door-open' type='solid' color='white' animation='tada-hover'></box-icon>
                    </Box>
                </Button>
            </Flex>
        </Flex>

        {modalType === 'logout' && <ErrorComponent isOpen={isOpen} close={closeModal} onYesClick={redirector} title="warning" message="are you sure you want to log out"/>}
        {modalType === 'setting' && <SettingComponent isOpen={isOpen} onClose={closeModal} title="setting" message="welcome to message"/>}
        </>
    )
}