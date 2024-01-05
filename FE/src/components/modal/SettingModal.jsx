import { Box, Button, Center, Divider, Flex, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";

function SettingModal({isOpen, onClose}){
    const toast = useToast()

    function addFriendForm() {
        console.log('FROM SettingModal : running addFriend')
    }
    
    function changeEmailForm() {
        console.log('FROM SettingModal : running changeEmail')
    }
    
    function addFriendToast() {
        const receiver = document.getElementById('receiverName').value
        const tag = document.getElementById('receiverTag').value
        toast({
            position: 'top',
            title: 'success',
            description: `your friend request to ${receiver+tag} is sent, please wait for receiver confirmation`,
            status: 'success',
            duration: 9000,
            isClosable: true
        })
    }

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent position='absolute' left='0' bottom='0' margin='0.5rem' width='356px' height='256px' alignSelf='start' containerProps={{ justifyContent: 'flex-end', paddingRight: '2rem' }}>
                    <ModalHeader>Settings</ModalHeader>
                    <ModalBody>
                        <Flex gap={4} justifyContent='space-between' height='full'>
                            <Flex direction='column' gap={4} flex='1'>
                                <Button onClick={addFriendForm} w='full' colorScheme='twitter'>add friend</Button>
                                <Button onClick={changeEmailForm} w='full' colorScheme='twitter'>change email</Button>
                            </Flex>
                                <Center height='full'>
                                    <Divider orientation='vertical' />
                                </Center>
                            <Flex direction='column' gap={4} flex='1'>
                                <Flex direction='column' gap={4}>
                                    <Input id="receiverName" placeholder='username'/>
                                    <Input id='receiverTag' placeholder='tag'/>
                                    <Button onClick={addFriendToast} colorScheme='facebook'> add friend</Button>
                                </Flex>
                                {/* <Button w='full' variant='link' colorScheme='blue'>add friend</Button>
                                <Button w='full' variant='link' colorScheme='blue'>change email</Button> */}
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
        </Modal>
    )
}

export default SettingModal