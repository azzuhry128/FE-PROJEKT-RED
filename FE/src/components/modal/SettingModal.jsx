import { Box, Button, Center, Divider, Flex, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";

function SettingModal({isOpen, onClose}){
    const toast = useToast()

    async function getReceiverID(username, token) {
        console.log('getting receivers id')
        const result = async() =>  await axios(`http://localhost:3000/api/accounts/username/${username}`, {
            method: 'GET',
            headers: {'Authorization': `Bearer ${token}`},
        })
    
        return result
    }
    
    async function sendNotification(receiverID, message) {
        console.log('sending notification')
        const result = async() =>  await axios(`http://localhost:3000/api/notification/`, {
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`},
            data: {'receiver': receiverID, 'message': message}
        })

        return result
    }
    
    async function sendFriend() {
        const username = document.getElementById('receiverName').value
        const message = 'hello there !'
        const token = localStorage.getItem('loggedInToken')
    
        const receiverID = await getReceiverID(username, token)
        sendNotification(receiverID, message)
        addFriendToast
    }

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
                                    <Button onClick={sendFriend} colorScheme='facebook'> add friend</Button>
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