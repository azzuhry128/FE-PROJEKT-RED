import { Box, Button, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import ContactsAdapter from "../adapters/ContactAdapter"

function Contact(){
    console.log('rendering contact...')

    return(
        <Box display="flex" bg="#1E293B" flexDirection="column" width='356px'  borderRight='1px' borderColor='black'>
            <Flex padding='1rem' color='white' fontWeight='medium' fontSize='xl' borderBottom='1px' borderColor='black'>
                <Text>Contacts</Text>
            </Flex>
            <Flex direction='column'>

            </Flex>
        </Box>
    )
}

export default Contact