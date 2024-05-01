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

const AddFriendDrawer = (props) => {
    const toast = useToast()

    const showToast = () => {
        console.log('button is clicked')

        const tag = document.getElementById('tag').value
        const username = document.getElementById('username').value

        if (tag == '' || username == '') {
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

                <Button onClick={() => showToast()} width='full' marginTop='1rem' colorScheme='blue'>send friend request</Button>
            </Container>
            
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default AddFriendDrawer