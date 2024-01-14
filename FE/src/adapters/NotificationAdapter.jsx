import { Avatar, Flex, Text, Button } from "@chakra-ui/react"
import axios from "axios"
import Contact from "../components/Contact"
import { useEffect, useState } from "react"

function NotificationAdapter() {
    const [renderContact, setRenderContact] = useState(false)

    useEffect(() => {
        if (renderContact === true) {
            console.log('re-rendering contact')
            Contact()
        } else {
            console.log('no re-render order')
        }
    },[renderContact])

    function getNotification() {
        console.log('getting notification')
        const result = localStorage.getItem('notifications')
        console.log(result)
        
        if (result === 'undefined') {
            return 'undefined'
        } else {
            return JSON.parse(result)
        }

    }

    function getToken() {
        console.log('getting token...')
        const token = localStorage.getItem('passport')
        const parsed = JSON.parse(token)

        if (token === undefined) {
            return undefined
        } else {
            return parsed
        } 
    }

    // async function createSingleChat(token, accountID) {
    //     console.log(token.token)

    //     const result = await axios(`http://localhost:3000/api/chat/single/${accountID}/accept`, {
    //         method: 'POST',
    //         headers: {'Authorization' : `Bearer ${token.token}`},
    //     }).then((response) => response).catch((error) => error)
    
    //     return result
    // }
    

    async function acceptRequest(accountID) {
        const token = await getToken()
        const singleChat = await createSingleChat(token, accountID)

        console.log(singleChat)
        setRenderContact(true)
    }

    const notification = getNotification()
    console.log(notification)

    if (notification === 'undefined') {
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