import { Avatar, Container, Divider, Flex, IconButton, useDisclosure } from "@chakra-ui/react"
import 'boxicons'
import { useState } from "react"
import SettingDrawer from "../drawer/SettingDrawer"
const Sidebar = () => {
    const { isOpen, onOpen, onClose} = useDisclosure()
    return(
        <>
        <Flex direction='column' borderRadius='0.5rem' width='6rem' height={'full'} bg='#EE7850' overflow='auto' justifyContent={'space-between'}>
            <Avatar size='sm' margin='1rem' alignSelf='center' visibility='hidden'/>

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
            
            <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='2'>
                <IconButton 
                        icon={<box-icon type='solid' name='cog' color="white" animation="tada-hover"/>}
                        colorScheme=''
                        _hover={{bg: 'none'}}
                        onClick={onOpen}
                    />

                <IconButton 
                        icon={<box-icon type='solid' name='door-open' color="white" animation="tada-hover"/>}
                        colorScheme=''
                        _hover={{bg: 'none'}}
                    />
            </Container>
        </Flex>

        <SettingDrawer isOpen={isOpen} onClose={onClose}/>
        </>
    )
}
export default Sidebar