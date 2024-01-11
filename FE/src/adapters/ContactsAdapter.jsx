import { Avatar, Box, Button, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react"

const ContactsAdapter = (props) => {
    console.log('adapting contacts...')
    return props.contacts.map((contact) => {
        if(contact.is_group_chat === true) {
            console.log('not eligible for render as contact')
        } else {
            return(
                <Container p={2}>
                <Button h="64px" display="flex" justifyContent="center" variant="ghost" _hover={{bg: "#93C5FD"}} height="64px" w="100%" p={0} m={0}>
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

export default ContactsAdapter