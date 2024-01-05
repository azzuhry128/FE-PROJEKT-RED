import { Box, Button, Center, Container, Divider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import 'boxicons'
import { useSettingMenuStore } from "../../state/store"

const SettingComponent = (props) => {
    const settingState = useSettingMenuStore((state) => state.setSettingMenuState)

    return(
        <>
        <Modal isOpen={props.isOpen} onClose={props.onClose} >
            <ModalOverlay />
            <ModalContent position="absolute" bottom='0' left='0' margin="0.5rem">
            <ModalHeader>settings</ModalHeader>
            <ModalBody display="flex" flexDirection="row" gap={3} p="0" m="0" padding="0.5rem">
                <Flex flex={1} flexDirection="column" gap={3}>
                    <Button onClick={(e) => settingState('addFriend')} display="flex" justifyContent="flex-start" bg=''  _hover={{bg: ""}} width="156px" height="2rem"  padding="0" >
                        <Box display="flex" justifyContent="center" marginRight="1rem" marginLeft="0.5rem">
                            <box-icon type='solid' name='contact'></box-icon>
                        </Box>
                        <Text color="#0F172A"  fontSize="xs" fontWeight="bold">add friend</Text>
                    </Button>

                    <Button onClick={(e) => settingState('changeEmail')} display="flex" justifyContent="flex-start" bg=''  _hover={{bg: ""}} width="156px" height="2rem"  padding="0" >
                        <Box display="flex" justifyContent="center" marginRight="1rem" marginLeft="0.5rem">
                            <box-icon type='solid' name='envelope' color="#0F172A"></box-icon>
                        </Box>
                        <Text color="#0F172A"  fontSize="xs" fontWeight="bold">change email</Text>
                    </Button>

                    <Button onClick={(e) => settingState('changePassword')} display="flex" justifyContent="flex-start" bg="" _hover={{bg: ""}} width="156px" height="2rem" padding="0">
                        <Box display="flex" justifyContent="center" marginRight="1rem" marginLeft="0.5rem">
                            <box-icon type='solid' name='lock' color="#0F172A"></box-icon>
                        </Box>
                        <Text color="#0F172A" fontSize="xs" fontWeight="bold"> change password</Text>
                    </Button>

                    <Button onClick={(e) => settingState('changeProfile')} display="flex" justifyContent="flex-start" bg='' v width="156px" height="2rem" padding="0">
                        <Box display="flex" justifyContent="center" marginRight="1rem" marginLeft="0.5rem">
                            <box-icon name='user' color="#0F172A"></box-icon>
                        </Box>
                        <Text color="#0F172A" fontSize="xs" fontWeight="bold"> change profile</Text>
                    </Button>
                </Flex>
                <Center height="screen" background="#0F172A">
                    <Divider orientation="vertical"/>
                </Center>

                <Flex flex={2}>
                    {activeSettingExtension}
                </Flex>

            </ModalBody>
        </ModalContent>
        </Modal>
    </>
    )
}

export { SettingComponent }