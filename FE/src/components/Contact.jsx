import { Box, Button, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import axios from "axios"
import ContactsAdapter from "../adapters/ContactsAdapter"
import { useEffect, useState } from "react"

function Contact(){
    console.log('rendering contact...')
    const storedContacts = JSON.parse(localStorage.getItem('contacts'))

    return(
        <Box display="flex" bg="#1E293B" flexDirection="column" width='356px'  borderRight='1px' borderColor='black'>
            <Flex padding='1rem' color='white' fontWeight='medium' fontSize='xl' borderBottom='1px' borderColor='black'>
                <Text>Contacts</Text>
            </Flex>
            <Flex>
                {<ContactsAdapter contacts={storedContacts}/>}
            </Flex>
        </Box>
    )
}

export default Contact