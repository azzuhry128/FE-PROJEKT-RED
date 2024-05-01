import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    Avatar,
    Container,
    Center,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    useToast
} from '@chakra-ui/react'

import axios from "axios";

const AddFriendDrawer = (props) => {
    const toast = useToast()
    
    const validator = () => {
        const tag = document.getElementById('tag').value
        const username = document.getElementById('username').value
        let status = ''

        if (tag == '' || username == '') {
            status = {type: 'invalid'}
            return status
        }

        status = {
            type: 'valid',
            payload : {
                tag: tag,
                username: username
            }
        }
        return status
    }

    const api = async(tag, username) => {
        // const response = axios.post('127.0.0.1:3000/api/auth/friend/', {
        //     tag: tag,
        //     password: username
        // })
        // .then((response) => response)
        // .catch((error) => console.log(error))

        return 
    }
    
    const showToast = (status) => {

        if (status.type == 'invalid') {
            return(
                toast({
                    title: 'please fill provided fields',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'bottom-right'
                })
            )
        }

        return (
            toast({
                title: `request sent`,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'bottom-right'
            })
        )
    }

    const handleClick = async() => {
        const inputValidity = validator()
        const result = await api(tag, username)
        showToast(inputValidity)
        console.log(result)
    }

    if(props.type != 'AddFriendDrawer') {
        return null
    }

    return(
        <>
        <Drawer
            isOpen={props.isOpen}
            placement='right'
            onClose={props.onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add Friend</DrawerHeader>

            <Container>
                <FormControl>
                    <FormLabel>insert tag  </FormLabel>
                    <Input id='tag' type='text'/>
                </FormControl>

                <FormControl>
                    <FormLabel>insert username   </FormLabel>
                    <Input id='username' type='text'/>
                </FormControl>

                <Button onClick={() => handleClick()} width='full' marginTop='1rem' colorScheme='blue'>send friend request</Button>
            </Container>
            
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default AddFriendDrawer