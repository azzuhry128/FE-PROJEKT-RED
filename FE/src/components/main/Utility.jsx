import { Avatar, Box, Button, Center, Collapse, Container, Divider, Fade, Flex, IconButton, Input, Slide, Text, useDisclosure } from "@chakra-ui/react"
import 'boxicons'
const Utility = () => {
    return (
        <Flex direction='column' width='24rem' height={'full'} overflow='auto' justifyContent={'space-evenly'} gap={1}>
            <Box flex='1' bg='#EE7850' borderRadius='0.5rem' display='flex' flexDirection='row' justifyContent='space-evenly' alignItems='center' gap={2} padding={2}>
                {/* <Text fontSize={'xl'} color='white'>Chat</Text> */}
                <Input border='transparent' focusBorderColor="transparent" flex={1} alignItems='center' borderRadius={8} color='white' margin={0}/>
                <IconButton size={'md'} borderRadius={100} icon={<box-icon name='search'></box-icon>}/>
            </Box>
            <Box flex='12' bg='#EE7850' borderRadius='0.5rem' padding={2}>
            </Box>
        </Flex>
    )
}

export default Utility