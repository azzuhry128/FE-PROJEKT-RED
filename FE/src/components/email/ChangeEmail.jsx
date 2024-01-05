import { Button, Flex, Input, Text, useDisclosure } from "@chakra-ui/react"
import { InputModal } from "../modal/InputModal";
import { useState } from "react";

function ChangeEmail() {
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
            <Input placeholder="new email" variant="flushed"/>
            <Input placeholder="current password"variant="flushed" />
            <Button variant="ghost" bg='' _hover={{bg: "#0F172A", color: 'white'}} onClick={(e) => handleButtonCLick('changeEmail')}>get confirmation code</Button>
            {modalType === 'changeEmail' && <InputModal header="please check your email" placeholder="enter your code here..." isOpen={isOpen} onClose={closeModal}/>}
        </Flex>
    )
}

export { ChangeEmail }