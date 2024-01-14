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
import NotificationAdapter from '../adapters/NotificationAdapter'

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
                <NotificationAdapter/>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
    )
}

export default NotificationDrawer