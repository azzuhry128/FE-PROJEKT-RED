import { Avatar, Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import 'boxicons'
import ProfileModal from "./modal/ProfileModal";
import NotificationDrawer from "./NotificationDrawer";
import SettingModal from "./modal/SettingModal";
import LogoutModal from "./modal/LogoutModal";

//framer motion
function Sidebar() {
    console.log('rendering sidebar...')
    const {isOpen : isProfileOpen, onClose : onProfileClose, onOpen : onProfileOpen} = useDisclosure()
    const {isOpen : isRequestOpen, onClose : onRequestClose, onOpen : onRequestOpen} = useDisclosure()
    const {isOpen : isSettingOpen, onClose : onSettingClose, onOpen : onSettingOpen} = useDisclosure()
    const {isOpen : isLogoutOpen, onClose : onLogoutClose, onOpen : onLogoutOpen} = useDisclosure()


    function profileModal(refs) {
        if (refs === 'profile') {
            console.log('opening profile modal')
            onProfileOpen()
        }
    }

    function requestDrawer(refs) {
        if(refs === 'request') {
            console.log('opening drawer')
            onRequestOpen()
        }
    }

    function settingModal(refs) {
        if (refs === 'setting') {
            console.log('opening setting modal')
            onSettingOpen()
        }
    }

    function logoutModal(refs) {
        if (refs === 'logout') {
            console.log('opening logout modal')
            onLogoutOpen()
        }
    }
    
    return(
        <>
        <Flex direction="column" justifyContent="space-between">
            <Flex bg="#0F172A" flexDirection="column" justifyContent="center" gap="6">
                <Button colorScheme="teal" variant="link" onClick={() => profileModal('profile')}>
                    <Box padding="1rem">
                        <Avatar size="sm"/>
                    </Box>
                </Button>

                <Button colorScheme="teal" variant="link">
                    <Box padding="0.5rem">
                        <box-icon type='solid' name='chat' color="white" animation="tada-hover"></box-icon>
                    </Box>
                </Button>

                <Button colorScheme="teal" variant="link" onClick={(e)=> requestDrawer('request')}>
                    <Box padding="0.5rem">
                        <box-icon type='solid' name='bell' color="white" animation="tada-hover"></box-icon>
                    </Box>
                </Button>

            </Flex>

            <Flex direction="column">

                <Button colorScheme="teal" variant="link" onClick={(e)=> settingModal('setting')}>
                    <Box padding="0.5rem">
                        <box-icon type='solid' name='cog' color="white" animation='spin-hover'></box-icon>
                    </Box>
                </Button>

                <Button colorScheme="teal" variant="link" onClick={(e)=> logoutModal('logout')}>
                    <Box padding="0.5rem">
                        <box-icon name='door-open' type='solid' color='white' animation='tada-hover'></box-icon>
                    </Box>
                </Button>
            </Flex>
        </Flex>

        <ProfileModal isOpen={isProfileOpen} onClose={onProfileClose}/>
        <NotificationDrawer isOpen={isRequestOpen} onClose={onRequestClose}/>
        <SettingModal isOpen={isSettingOpen} onClose={onSettingClose}/>
        <LogoutModal isOpen={isLogoutOpen} onClose={onLogoutClose}/>

        {/* {modalType === 'logout' && <ErrorComponent isOpen={isOpen} close={closeModal} onYesClick={redirector} title="warning" message="are you sure you want to log out"/>}
        {modalType === 'setting' && <SettingComponent isOpen={isOpen} onClose={closeModal} title="setting" message="welcome to message"/>} */}
        </>
    )
}

export default Sidebar