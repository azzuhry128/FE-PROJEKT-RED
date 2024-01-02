import { Button, Flex, Input, Text, useDisclosure } from "@chakra-ui/react"
import { InputModal } from "./InputModal";
import { useState } from "react";
import { AddFriendModal } from "./AddFriendModal";

function AddFriend() {
    // 
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    function handleButtonCLick(reference) {
        setModalType(reference)
        setIsOpen(true)
    }


    function closeModal() {
        setIsOpen(false)
        setModalType('')
    }

    return(
        <Flex direction="column" gap={4}>
            <Input placeholder="username" variant="flushed"/>
            <Input placeholder="tag"variant="flushed" />
            <Button variant="ghost" bg='' _hover={{bg: "#0F172A", color: 'white'}} onClick={(e) => handleButtonCLick('addFriend')}>add as friend</Button>
            {modalType === 'addFriend' && <AddFriendModal header="friend request send" isOpen={isOpen} onClose={closeModal}/>}
        </Flex>
    )
}

export { AddFriend }