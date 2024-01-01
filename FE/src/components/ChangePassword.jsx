import { Button, Flex, Input, Text, useDisclosure } from "@chakra-ui/react"
import { InputModal } from "./InputModal";
import { useState } from "react";

function ChangePassword() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    function handleButtonCLick(reference) {
        setModalType(reference)
        setIsOpen(true)
    }


    function closeModal() {
        setIsOpen('false')
        setModalType('')
    }
    return(
        <Flex direction="column" gap={4}>
            <Input placeholder="new password" variant="flushed"/>
            <Button variant="ghost" bg='' _hover={{bg: "#0F172A", color: 'white'}} onClick={(e) => handleButtonCLick('changePassword')}>get confirmation code</Button>
            {modalType === 'changePassword' && <InputModal header="please check your email" placeholder="enter your code here..." isOpen={isOpen} onClose={closeModal}/>}
        </Flex>
    )
}

export { ChangePassword }