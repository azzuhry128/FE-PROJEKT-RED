import { Button, Flex, Input, Text, useDisclosure } from "@chakra-ui/react"
import { InputModal } from "../modal/InputModal";
import { useState } from "react";
import { AddFriendModal } from "../modal/AddFriendModal";
import axios from "axios";
import { useTokenStore } from "../../state/store";

function AddFriend() {
    // 
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const {tokenState} = useTokenStore();

    // function closeModal() {
    //     setIsOpen(false)
    //     setModalType('')
    // }

    return(
        <Flex direction="column" gap={4}>
            <Input id="username" placeholder="username" variant="flushed"/>
            <Button variant="ghost" bg='' _hover={{bg: "#0F172A", color: 'white'}} onClick={(e) => handleButtonCLick('addFriend')}>add as friend</Button>
            {modalType === 'addFriend' && <AddFriendModal header="friend request sent" isOpen={isOpen} onClose={closeModal}/>}
        </Flex>
    )
}

export default AddFriend