import { Box, Button, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import axios from "axios"

function Contact(){
    console.log('rendering contact...')
    // const socket = io('http://localhost:3000')
    const contactsArray = []

    async function fetchContacts() {
        const contacts = await axios('http://localhost:3000/api/chat/', {
            headers: {
                'Authorization': `Bearer`
            }
        }).then((response) => response).catch((error) => error)

        contactsArray.push(contacts)
    }

    async function contactsAdapter(data) {
        contactsArray.map((contact) => {
            return (
                <Container p={2}>
                <Button h="64px" display="flex" justifyContent="center" variant="ghost" _hover={{bg: "#93C5FD"}} height="64px" w="100%" p={0} m={0}>
                    <Grid w="full" templateRows='repeat(2 , 1fr)' templateColumns='repeat(3, 1fr)'>
                        <GridItem display="flex" justifyContent="center" alignContent="center" alignItems="center" rowSpan={2} colSpan={1}>
                            <Avatar>{contact.image}</Avatar>
                        </GridItem>
                        <GridItem colSpan={2} color="white" textAlign="start">{contact.username}</GridItem>
                        <GridItem my="auto" colSpan={2} color="white" textAlign="start" fontSize="xs">#{contact.tag}</GridItem>
                    </Grid>
                </Button>
                </Container>
            )
        })
    }

    return(
        //redesigned contacts
        <Box display="flex" bg="#1E293B" flexDirection="column" padding="1rem" width='356px'>
            <Flex padding='0.5rem' color='white' fontWeight='medium' fontSize='xl'>
                <Text>Contacts</Text>
            </Flex>
            <Flex>
                {/* <contactsAdapter/> */}
            </Flex>
        </Box>
    )
}

export default Contact