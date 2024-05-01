import { Box, Flex, IconButton, Input } from "@chakra-ui/react"
import 'boxicons'
import ContactAdapter from "../../adapters/ContactAdapter"

const Utility = () => {
    return (
        <Flex direction='column' width='24rem' height={'full'} justifyContent={'space-evenly'} boxShadow='lg'>
            <Box flex='1' bg='#EE7850' display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' padding={2}>
                <Input border='transparent' focusBorderColor="transparent" flex={1} alignItems='center' borderRadius={8} color='white' margin={0}/>
                <IconButton bg='transparent' size={'md'} borderRadius={100} _hover={{bg: 'transparent'}} _focus={{bg: 'transparent'}} icon={<box-icon name='search'></box-icon>}/>
            </Box>
            <Box flex='12' bg='#EE7850' padding='0.5rem'>
                <ContactAdapter/>
            </Box>
        </Flex>
    )
}

export default Utility