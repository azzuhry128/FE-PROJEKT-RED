import { Avatar, Box, Button, Center, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react"

function Contact(props){
    return(
        <Box as={Button} display="flex" bg='#f4a261' flexDirection="row" width='100%' marginY={1} justifyContent='start' height='max-content' rounded='md'>
            <Flex gap={2} padding={2}>
                <Avatar/>
                <Center>
                    <Text fontWeight='medium'>{props.name}azzuhry</Text>
                </Center>
            </Flex>
        </Box>
    )
}

export default Contact