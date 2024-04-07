import { Avatar, Box, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const ContactInfoAdapter = () => {
    const contactState = useSelector((state) => state.contact)

    return (
        <>
        {contactState && contactState['contact_username'] && (
            <Box display='flex' flexDirection='row' padding={2} justifyContent='center' alignItems='center' gap={2}>
                <Avatar/>
                <Box display='flex' flexDirection='column'>
                    <Text fontWeight='medium' fontSize='lg'>{contactState['contact_username']}</Text>
                    <Text fontWeight='medium'>{contactState['contact_email']}</Text>
                </Box>
            </Box>
        )}
        </>
    )
}

export default ContactInfoAdapter