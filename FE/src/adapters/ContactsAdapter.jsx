import { Avatar, Box, Button, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { useSelectedContactStore } from "../state/store"
import { useEffect } from "react"

const ContactsAdapter = (props) => {

    async function setChatState(setID, setName, setImage) {
        // console.log('updating the state')
        useSelectedContactStore.setState({id:setID, name:setName, iamge:setImage })
    }

    async function adapter(contact) {
        console.log('adapting contacts...')
        // const messages = await getMessages(contact.chat_room_id)
        setChatState(contact.chat_room_id, contact.account.username, contact.image)
    }

    if (props.contacts === null) {
        console.log('contacts is null')
    } else {
        return props.contacts.map((contact) => {
            if(contact.is_group_chat === true) {
                console.log('not eligible for render as contact')
            } else {
                return(
                    <Container p={2} key={contact.account_id}>
                    <Button onClick={(e) => adapter(contact)} h="64px" display="flex" justifyContent="center" variant="ghost" _hover={{bg: "#93C5FD"}} height="64px" w="100%" p={0} m={0}>
                        <Grid w="full" templateRows='repeat(2 , 1fr)' templateColumns='repeat(3, 1fr)'>
                            <GridItem display="flex" justifyContent="center" alignContent="center" alignItems="center" rowSpan={2} colSpan={1}>
                                <Avatar></Avatar>
                            </GridItem>
                            <GridItem colSpan={2} color="white" textAlign="start">{contact.account.username}</GridItem>
                            {/* <GridItem my="auto" colSpan={2} color="white" textAlign="start" fontSize="xs">#{contact.tag}</GridItem> */}
                        </Grid>
                    </Button>
                    </Container>
                )
            }
        })
    }

}

export default ContactsAdapter