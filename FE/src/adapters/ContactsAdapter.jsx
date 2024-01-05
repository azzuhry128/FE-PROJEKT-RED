import { Box, Flex, Text } from "@chakra-ui/react"
import Contact from "../components/sidebar/Contact"

const ContactsAdapter = () => {
    const array = []
    const mappedContact = array.map((contact) => {
        return <Contact id={contact.account_id} username={contact.account.user.profile_name} lastMessage={contact.lastMessage} tag={contact.account.username.split('#')[1]} room={contact.chatRoom.chat_room_id} key={contact.account.username.split('#')[1]}/>
    })

    return(
        //redesigned contacts
        <Box display="flex" bg="#1E293B" flexDirection="column" padding="1rem" width='356px'>
            <Flex padding='0.5rem' color='white' fontWeight='medium' fontSize='xl'>
                <Text>Contacts</Text>
            </Flex>
            <Flex>
                {mappedContact}
            </Flex>
        </Box>
    )
}

export default ContactsAdapter