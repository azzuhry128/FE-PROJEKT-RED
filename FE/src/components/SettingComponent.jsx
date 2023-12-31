import { Box, Button, Center, Container, Divider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import 'boxicons'
import { useSettingMenuStore } from "../state/store"

const SettingComponent = (props) => {
    const settingState = useSettingMenuStore((state) => state.setSettingMenuState)

    function handleButtonClick(reference) {
        console.log(`${reference} button is clicked`)
        setSettingMenu(reference)
    }

    return(
        <>
        <Modal isOpen={props.isOpen} onClose={props.onClose} >
            <ModalOverlay />
            <ModalContent position="absolute" bottom='0' left='0' margin="0.5rem">
            <ModalHeader bg="#0F172A" color="white">settings</ModalHeader>
            <ModalBody bg="#0F172A" display="flex" flexDirection="row" gap={3} p="0" m="0" padding="0.5rem">
                <Flex flex={1} flexDirection="column" gap={3}>
                    <Button onClick={(e) => settingState('changeEmail')} display="flex" justifyContent="flex-start"  bg="transparent" width="156px" height="2rem" _hover={{bg: "#93C5FD"}} padding="0" >
                        <Box display="flex" justifyContent="center" marginRight="1rem" marginLeft="0.5rem">
                            <box-icon type='solid' name='envelope' color='white'></box-icon>
                        </Box>
                        <Text color='white' fontSize="xs">change email</Text>
                    </Button>

                    <Button onClick={(e) => settingState('changePassword')} display="flex" justifyContent="flex-start"  bg="transparent" width="156px" height="2rem" _hover={{bg: "#93C5FD"}} padding="0">
                        <Box display="flex" justifyContent="center" marginRight="1rem" marginLeft="0.5rem">
                            <box-icon type='solid' name='lock' color='white'></box-icon>
                        </Box>
                        <Text color='white' fontSize="xs"> change password</Text>
                    </Button>

                    <Button onClick={(e) => settingState('changeProfile')} display="flex" justifyContent="flex-start"  bg="transparent" width="156px" height="2rem" _hover={{bg: "#93C5FD"}} padding="0">
                        <Box display="flex" justifyContent="center" marginRight="1rem" marginLeft="0.5rem">
                            <box-icon name='user' color='white'></box-icon>
                        </Box>
                        <Text color='white' fontSize="xs"> change profile</Text>
                    </Button>
                </Flex>
                <Center height="screen">
                    <Divider orientation="vertical"/>
                </Center>

                <Flex flex={2}>
                    <Text color="white">Hello there</Text>
                </Flex>

            </ModalBody>
        </ModalContent>
        </Modal>
    </>
    )
}

export { SettingComponent }