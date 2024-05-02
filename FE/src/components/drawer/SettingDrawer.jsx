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
import firebaseImageFetcher from '../../firebase/firebase'

const SettingDrawer = (props) => {
    const accountState = useSelector((state) => state.account)
    const [loading, setLoading] = useState(true)
    const [image, setImage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const handler = async() => {
            const data = await fetchAccount()
            avatarImageRetriever(data)
        }

        handler()
    }, [])

    const fetchAccount = async() => {
        try {
            const response = await fetch('/data/account.json')
            const result = await response.json()

            const obj = {
                type: 'FETCH_ACCOUNT',
                payload: {
                    accountID: result.data[0].account_id,
                    accountUsername: result.data[0].username,
                    accountEmail: result.data[0].email,
                    accountImage: result.data[0].image,
                    accountbio: result.data[0].bio
                }
            }

            dispatch(obj)
            setLoading(false)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    const avatarImageRetriever = async(response) => {
        const imageReferece = response.data[0].image
        const result = await firebaseImageFetcher(imageReferece)
        setImage(result)
    }

    if(loading) {
        return null
    }

    if(props.type != 'SettingDrawer') {
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
            <DrawerHeader>Settings</DrawerHeader>

            <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Avatar size={'xl'} src={image} />
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