import { Avatar, Box, Button, Center, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import switch_contact from "../actions/switch_contact"
import { useDispatch } from "react-redux"
import callStackLog from "../log/callStackLog"

const Contact = (props) => {
    const dispatch = useDispatch()

    function switchContact() {
        // callStackLog('switchContact')
        const value = props.account_id
        const obj = switch_contact(value)
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