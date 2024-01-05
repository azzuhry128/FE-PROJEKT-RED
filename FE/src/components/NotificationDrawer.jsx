import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Flex,
    Text,
    Container,
    Avatar,
} from '@chakra-ui/react'
import React from 'react'

function NotificationDrawer({isOpen, onClose}) {
    return (
    <>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Friend request</DrawerHeader>

            <DrawerBody>
                <Flex justifyContent='space-between' shadow='lg' margin='0.5rem' borderRadius='md'>
                    <Flex gap={4} p={2}>
                        <Avatar/>
                        <Flex direction='column' justifyContent='space-between'>
                            <Text fontSize='sm' fontWeight='medium'>azzuhry128</Text>
                            <Text fontSize='sm' fontWeight='medium'>#177013</Text>
                        </Flex>
                    </Flex>
                    <Button variant='ghost' colorScheme='blue' height='' borderLeftRadius='0'>accept</Button>
                </Flex>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
    )
}

export default NotificationDrawer