import React, { useState } from 'react';
import { Box, Button, Center, Divider, Flex, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast, } from "@chakra-ui/react";
import axios from "axios";
import 'boxicons';

function SettingModal({ isOpen, onClose }) {
    const toast = useToast();
    const [activeForm, setActiveForm] = useState("addFriend");

    async function getReceiverID(username, token) {
        console.log('getting receivers id')
        const result = async () => await axios(`http://localhost:3000/api/accounts/username/${username}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        })

        return result
    }

    async function sendNotification(receiverID, message) {
        console.log('sending notification')
        const result = async () => await axios(`http://localhost:3000/api/notification/`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            data: { 'receiver': receiverID, 'message': message }
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
        setActiveForm("addFriend");
    }

    function changeEmailForm() {
        console.log('FROM SettingModal : running changeEmail')
        setActiveForm("changeEmail");
    }

    function addFriendToast() {
        const receiver = document.getElementById('receiverName').value
        const tag = document.getElementById('receiverTag').value
        toast({
            position: 'top',
            title: 'success',
            description: `your friend request to ${receiver + tag} is sent, please wait for receiver confirmation`,
            status: 'success',
            duration: 9000,
            isClosable: true
        })
    }

    // Fungsi untuk menangani perubahan email
    function handleChangeEmail() {
        // Logika untuk meng-handle perubahan email di sini
        console.log('Handling email change');
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent position='absolute' left='0' bottom='0' margin='0.5rem' width='356px' height='230px' alignSelf='start' containerProps={{ justifyContent: 'flex-end', paddingRight: '2rem' }}>
                <ModalHeader>Settings</ModalHeader>
                <ModalBody>
                    <Flex gap={4} justifyContent='space-between' height='full'>
                        {/* assignment 1 */}
                        <Flex direction='column' gap={4} flex='1'>
                            <Button onClick={addFriendForm} w='full' leftIcon={<box-icon name='user-plus' type='solid' color='#0F172A' />} variant='ghost' _hover={{ bg: 'blackAlpha.200', color: '#0F172A' }}>Add Friend</Button>
                            <Button onClick={changeEmailForm} w='full' leftIcon={<box-icon type='solid' name='envelope' color='#0F172A' />} variant='ghost' _hover={{ bg: 'blackAlpha.200', color: '#0F172A' }}>Change Email</Button>
                        </Flex>
                        <flex mt='0' >
                            <Divider height='100px' orientation='vertical' mt='0' />
                        </flex>
                        {/* assignment 2 */}
                        <Flex direction='column' gap={4} flex='1'>
                            {activeForm === "addFriend" && (
                                <Flex direction='column' gap={4}>
                                    <Input id="receiverName" mt={33} placeholder='Username' />
                                    <Button onClick={sendFriend} colorScheme='facebook' right={100} mt={5}>Add Friend</Button>
                                </Flex>
                            )}
                            {activeForm === "changeEmail" && (
                                <Flex direction='column' gap={4}>
                                    <Input id="oldEmail" placeholder='Old Email' />
                                    <Input id="newEmail" placeholder='New Email' />
                                    <Button onClick={handleChangeEmail} colorScheme='facebook' right={100} mt={-0.5}>Done</Button>
                                </Flex>
                            )}
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