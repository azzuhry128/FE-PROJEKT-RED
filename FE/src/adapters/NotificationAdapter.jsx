import axios from "axios"

async function NotificationAdapter() {

    // async function getToken() {
    //     console.log('getting token for notification api')
    //     const token = JSON.parse(localStorage.getItem('passport'))

    //     return token
    // }

    // async function getNotification(token) {
    //     console.log('getting notification')
    //     const result = await axios.get('http://localhost:3000/api/notification/', {
    //         headers: {'Authorization': `Bearer ${token}`}
    //     }).then((response) => response).catch((error) => error)

    //     return result
    // }

    // const token = await getToken()
    // const notifications = getNotification(token.token)

    // console.log(notifications)

    return(
    <>
    {/* <Flex justifyContent='space-between' shadow='lg' margin='0.5rem' borderRadius='md'>
        <Flex gap={4} p={2}>
            <Avatar/>
            <Flex direction='column' justifyContent='space-between'>
                <Text fontSize='sm' fontWeight='medium'>azzuhry128</Text>
                <Text fontSize='sm' fontWeight='medium'>#177013</Text>
            </Flex>
        </Flex>
        <Button variant='ghost' colorScheme='blue' height='' borderLeftRadius='0'>accept</Button>
    </Flex> */}
    </>
    )
}

export default NotificationAdapter