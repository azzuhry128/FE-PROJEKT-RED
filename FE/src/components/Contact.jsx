import { Avatar, Box, Button, Center, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"

const Contact = (props) => {
    const dispatch = useDispatch()

    function switchContact() {
        const id = props.id
        const username = props.username
        const email = props.email

        const obj = {
            type: 'SWITCH_CONTACT',
            payload: {
                id,
                username,
                email
            }
        }

        dispatch(obj)
    }
    return(
        <Box as={Button} onClick={() => switchContact()} display="flex" bg='#f4a261' flexDirection="row" width='100%' marginY={1} justifyContent='start' height='max-content' rounded='md'>
            <Flex gap={2} padding={2}>
                <Avatar />
                <Center>
                    <Text fontWeight='medium'>{props.username}</Text>
                </Center>
            </Flex>
        </Box>
    )
}

export default Contact