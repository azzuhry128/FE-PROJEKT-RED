import { Avatar, Box, Button, Center, Collapse, Container, Divider, Fade, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Slide, Text, useDisclosure } from "@chakra-ui/react"
import 'boxicons'
import { useState } from "react"
const Sidebar = () => {
    const { isOpen, onToggle, onClose} = useDisclosure()
    return(
        <>
        <Flex direction='column' borderRadius='0.5rem' width='6rem' height={'full'} bg='#EE7850' overflow='auto' justifyContent={'space-between'}>
            <Avatar size='sm' margin='1rem' alignSelf='center'/>

            <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='8'>
                <IconButton 
                    icon={<box-icon type='solid' name='chat' color="white" animation="tada-hover" />}
                    colorScheme=''
                    _hover={{bg: '#669bbc'}}
                />

                <IconButton 
                    icon={<box-icon type='solid' name='phone' color="white" animation="tada-hover"/>}
                    colorScheme=''
                    _hover={{bg: '#669bbc'}}
                />
                <IconButton 
                    icon={<box-icon type='solid' name='group' color="white" animation="tada-hover"/>}
                    colorScheme=''
                    _hover={{bg: '#669bbc'}}
                />

                <Divider/>

                <IconButton 
                    icon={<box-icon type='solid' name='plus-circle' color="white" animation="tada-hover"/>}
                    colorScheme=''
                    _hover={{bg: '#669bbc'}}
                />
            </Container>
            <Box margin='1rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <box-icon type='solid' name='cog' color="white" animation="tada-hover"></box-icon>
            </Box>
        </Flex>
        </>
    )
}
export default Sidebar