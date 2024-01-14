import { Avatar, Flex, Text, Button } from "@chakra-ui/react"
import axios from "axios"

function NotificationAdapter() {

    function getNotification() {
        console.log('getting notification')

        const result = JSON.parse(localStorage.getItem('notifications'))

        if (result === undefined) {
            return undefined
        } else {
            return result
        }

    }

    function getToken() {
        console.log('getting token...')
        const token = JSON.parse(localStorage.getItem('passport'))
        
        return token
    }

    async function createSingleChat(token, accountID) {
        console.log(token.token)

        const result = await axios('http://localhost:3000/api/chat/single', {
            method: 'POST',
            headers: {'Authorization' : `Bearer ${token.token}`},
            "isGroupChat": false,
            "requestUser" : accountID,
        }).then((response) => response).catch((error) => error)
    
        return result

    }
    
    async function acceptRequest(accountID) {
        const token = await getToken()
        const singleChat = await createSingleChat(token, accountID)

        console.log(singleChat)
    }

    const notification = getNotification()
    // console.log(notification)

    if (notification === undefined) {
        console.log('user dont have notification')
    } else {
        const result = notification.map((notif) => {
            return(
                <Flex justifyContent='space-between' shadow='lg' margin='0.5rem' borderRadius='md' key={notif.sender}>
                    <Flex gap={4} p={2}>
                        <Avatar/>
                        <Flex direction='column' justifyContent='space-between'>
                            <Text fontSize='sm' fontWeight='medium'>{notif.notification_sender.username.split("#")[0]}</Text>
                            <Text fontSize='sm' fontWeight='medium'>#{notif.notification_sender.username.split("#")[1]}</Text>
                        </Flex>
                    </Flex>
                    <Button onClick={() => acceptRequest(notif.sender)} variant='ghost' colorScheme='blue' height='' borderLeftRadius='0'>accept</Button>
                </Flex> 
            )
        })

        return result
    }


}

export default NotificationAdapter