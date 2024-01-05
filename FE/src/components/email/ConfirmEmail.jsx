import { AbsoluteCenter, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"

function ConfirmEmail() {
    
    function handleButtonClick() {
        const confirmation = document.getElementById('confirmation').value
        // calls an api to pass the code to serrver for further processing
        console.log(`confirmed : ${confirmation}`)
    }
    return (
        <>
        <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
            <Button variant="link" fontSize={16} fontWeight="bold" color={"#93C5FD"}>Previous</Button>
        </Box>

        <AbsoluteCenter bg="white" padding="1rem" width="32rem" borderRadius="0.5rem">
            <Flex direction="column" gap={4}>
                <Text textColor="#93C5FD" fontWeight="medium" textAlign="center">confirm your email</Text>
                <Input id="confirmation" variant="flushed" placeholder="confirmation code..."/>
                <Button onClick={handleButtonClick} bg="#93C5FD" width="full">confirm email</Button>
            </Flex>
        </AbsoluteCenter></>
    )
}

export {ConfirmEmail}