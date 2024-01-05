import { Avatar, Container, Flex, Text } from "@chakra-ui/react"

function Extension() {
    return(
        <Flex direction="column" width='356px' bg="#1E293B">
            <Text padding='1.5rem' color='white'>profile</Text>
            <Container direction='column' padding='rem' gap={4}>
                <Avatar/>
                <Text color='white' padding='0.5rem' >tag</Text>
                <Text color='white' padding='0.5rem'>username</Text>
                {/* <Text color='white' padding='0.5rem'>bio</Text> */}
            </Container>
        </Flex>
    )
}

export default Extension