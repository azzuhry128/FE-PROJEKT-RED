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
    FormHelperText
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"

const SettingDrawer = (props) => {
    const accountState = useSelector((state) => state.account)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchAccount = async() => {
            try {
                const response = await fetch('/data/account.json')
                const result = await response.json()

                const obj = {
                    type: 'SET_ACCOUNT',
                    payload: {
                        accountID: result.data[0].account_id,
                        accountUsername: result.data[0].username,
                        accountEmail: result.data[0].email,
                        accountbio: result.data[0].bio
                    }
                }

                dispatch(obj)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAccount()
    }, [])

    if(loading) {
        return null
    }

<<<<<<< HEAD
    if(props.type != 'SettingDrawer') {
        return null
    }

=======
>>>>>>> c21fdb5f36f0b5827c641b7d4e8488f73f6f7218
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
            <DrawerHeader>Settings</DrawerHeader>

            <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Avatar size={'xl'}/>
                <Text align='center' fontWeight='medium' fontSize='xs' color='grey.300' margin='0.5rem'>
                {accountState['accountID']}
                </Text>
            </Container>

            <Container>
                <FormControl>
                    <FormLabel>Email    </FormLabel>
                    <Input type='text' placeholder={accountState['accountEmail']}/>
                </FormControl>

                <FormControl>
                    <FormLabel>username   </FormLabel>
                    <Input type='text' placeholder={accountState['accountUsername']}/>
                </FormControl>

                <Button width='full' marginTop='1rem' colorScheme='blue'>Save changes</Button>
            </Container>
            
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default SettingDrawer