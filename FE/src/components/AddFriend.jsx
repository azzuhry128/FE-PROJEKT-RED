import { Button, Flex, Input, Text, useDisclosure } from "@chakra-ui/react"
import { InputModal } from "./InputModal";
import { useState } from "react";
import { AddFriendModal } from "./AddFriendModal";
import axios from "axios";
import { useTokenStore } from "../state/store";

function AddFriend() {
    // 
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const {tokenState} = useTokenStore();

    
    


    async function handleButtonCLick(reference) {
        const username = document.getElementById('username').value
        setModalType(reference)
        setIsOpen(true)

        const userIDResult = async() => await axios(`http://localhost:3000/api/accounts/username/${username}`, {
            method: 'POST',
            headers: {'Authorization': `Bearer ${tokenState}`},
        })

        const userId = await userIDResult()
        const template = "hello there !"

        const sendFriendrequest = (id, template)=> {
            const result = axios('http://localhost:3000/api/notification/', {
                method: 'POST',
                headers: {'Authorization': `Bearer ${tokenState}`},
                data: {receiver: id, message: template}
            }).then((response) => console.log(response)).catch((error) => console.log(error))
            return result
        }

        const friendRequestResult = sendFriendrequest(userId, template)
        console.log(friendRequestResult)
    }

    function closeModal() {
        setIsOpen(false)
        setModalType('')
    }

    return(
        <Flex direction="column" gap={4}>
            <Input id="username" placeholder="username" variant="flushed"/>
            <Button variant="ghost" bg='' _hover={{bg: "#0F172A", color: 'white'}} onClick={(e) => handleButtonCLick('addFriend')}>add as friend</Button>
            {modalType === 'addFriend' && <AddFriendModal header="friend request sent" isOpen={isOpen} onClose={closeModal}/>}
        </Flex>
    )
}

export { AddFriend }