import { AbsoluteCenter, Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
// import { useLoginState } from "../state/store";
import { login } from "../api/login";
import { useState } from "react";
import { InputModal } from "./InputModal";

function ResetPassword() {
    const [isOpen, setIsopen] = useState(false)
    const [modalType, setModalType] = useState('')

    const [componentType, setComponentType] = useState(true)

    function handleClick(reference){
        // console.log('getting reset password confirmation code')
        setModalType(reference)
        setIsopen(true)
    }

    function closeModal() {
        setIsopen(false)
        setModalType('')
    }

    function componentSwitcher() {
        const email = document.getElementById('email')
        const emailValue = email.value
        if(emailValue !== '') {
            setComponentType(false)
            email.value = ''
        }
    }

    return (
    <>
    <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Button variant="link" fontSize={16} fontWeight="bold" color={"#93C5FD"}>Home</Button>
    </Box>
    {componentType ? 
    
    <AbsoluteCenter>
        <Flex width='28rem' height='12rem' direction="column" gap={4} bg='white' padding='4' borderRadius='md'>
                <Text textColor="black" textAlign="center" fontWeight='medium'>reset password</Text>
                <Input id="email" name="email" type="email" variant="flushed" placeholder="enter your email" isRequired/>
            <Button onClick={(e) => componentSwitcher()}  bg="#93C5FD" width="full">get verification code</Button>
        </Flex>
    </AbsoluteCenter>
    
    : 
    
    <AbsoluteCenter>
        <Flex width='28rem' height='12rem' direction="column" gap={4} bg='white' padding='4' borderRadius='md'>
            <Text textColor="black" textAlign="center" fontWeight='medium'>reset password</Text>
            <Input id="resetPassword" type="password" variant="flushed" placeholder="insert code..." required/>
            <Button onClick={(e) => handleClick('resetPasswordModal')}  bg="#93C5FD" width="full">confirm</Button>
        </Flex>
    </AbsoluteCenter>
    }

    {/* //this one sync's with the state of stored reset password code inside localstorage */}
    {modalType === 'resetPasswordModal' && <InputModal header="new password" placeholder="insert new password..." isOpen={isOpen} onClose={closeModal} />}
    </>
    )
}

export { ResetPassword }