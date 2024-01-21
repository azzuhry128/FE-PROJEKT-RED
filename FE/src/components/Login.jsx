import React, { useState, useEffect } from "react";
import { AbsoluteCenter, Box, Button, Center, Container, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingProgress from "./miscellaneous/LoadingProgress";
import NotificationToast from "./NotificationToast";
import Aos from "aos";
import 'aos/dist/aos';

function Login() {
  const [showLoadingProgress, setShowLoadingProgress] = useState(false);
  const [showNotificationToast, setNotificationToast] = useState({
    on: false,
    variant: '',
    position: '',
    title: '',
    description: '',
    status: '',
  });

  const navigate = useNavigate()

  function handleLoadingRoute(url) {
    setShowLoadingProgress((prev) => !prev);
    setTimeout(() => {
      navigate(url);
    }, 2000);
  }

  async function getMyContacts(token) {
    // console.log(`checking token for contacts in login: ${JSON.stringify(token)}`)
    console.log('getting contacts')
    const result = axios.get('http://localhost:3000/api/chat/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => response).catch((error) => error)

    return result
  }

  async function getMyMessages(token, contacts) {
    console.log('getting messages')

    console.log(contacts)

    if (contacts === undefined) {
      console.log('user have no contacts')
    } else {
      const message = contacts.map(async (contact) => {
        console.log(contact.chat_room_id)
        const result = await axios(`http://localhost:3000/api/message/${contact.chat_room_id}`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        }).then((response) => response).catch((error) => error)

        return result.data.data
      })
      const messages = await Promise.all(message)
      return messages
    }
  }

  async function getMyAccountData(token) {
    // console.log(`checking token for account in login: ${JSON.stringify(token)}`)
    console.log('getting account data')
    const result = axios.get('http://localhost:3000/api/accounts/my-account', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => response).catch((error) => error)

    return result
  }

  async function getMyNotification(token) {
    console.log('getting notification data')
    const result = await axios.get('http://localhost:3000/api/notification/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => response).catch((error) => error)

    console.log(result)

    return result
  }

  //TODO get profile image using firebase
  async function getProfileImage() {
    console.log('getting profile image...')
  }

  //TODO get contacts images using firebase
  async function getContactsImages() {
    console.log('getting contacts images...')
  }

  async function getToken(emailInput, passwordInput) {
    // console.log('getting token')
    const result = axios('http://localhost:3000/api/auth/login/', {
      method: 'POST',
      data: { 'email': emailInput, 'password': passwordInput }
    }).then((response) => response).catch((error) => console.log(error))

    return result
  }

  async function myDataBundler(data) {
    console.log('bundling data...')
    localStorage.setItem('credentials', JSON.stringify(data))
    console.log("bundling data finished")
  }

  async function myPassportBundler(data) {
    console.log('bundling passport...')
    localStorage.setItem('passport', JSON.stringify(data))
    console.log('bundling passport finished')
  }

  async function myContactsBundler(data) {
    console.log('bundling contacts...')

    data.map((item) => {
      // console.log(item.is_group_chat)
      if (item.is_group_chat) {
        console.log('item not eligible for push')
      } else {
        localStorage.setItem('contacts', JSON.stringify(item))
      }
    })
    localStorage.setItem('contacts', JSON.stringify(data))
    console.log("bundling contacts finished")
  }

  async function myNotificationsBundler(data) {
    console.log('bundling notifications...')

    localStorage.setItem('notifications', JSON.stringify(data))
    console.log("bundling notifications finished")
  }

  async function myMessagesBundler(data) {
    console.log('bundling messages...')
    // console.log(data)
    data.map((item) => {
      // console.log(item)
      if (item === undefined || null || '') {
        console.log('item is undefined')
      } else {
        localStorage.setItem(item[0].chat_room_id, JSON.stringify(item))
      }
    })
    console.log('bundling messages finished')
  }

  function handleNotificationToast(toast) {
    return (
      <NotificationToast
        variant={toast.variant}
        position={toast.position}
        title={toast.title}
        description={toast.description}
        status={toast.status}
      />
    )
  }

  async function getMyInfo(token) {
    const myData = await getMyAccountData(token.token)
    const myContacts = await getMyContacts(token.token)
    const myMessages = await getMyMessages(token.token, myContacts.data.data)
    const myNotifications = await getMyNotification(token.token)

    return { myData, myContacts, myMessages, myNotifications }
  }

  async function login() {
    // console.log('FROM login : logging in...')
    setNotificationToast({ on: false })
    setShowLoadingProgress((prev) => !prev);
    const emailInput = document.getElementById("email").value
    const passwordInput = document.getElementById("password").value

    const myToken = await getToken(emailInput, passwordInput)

    if (myToken.data.success === false) {
      setShowLoadingProgress((prev) => !prev)
      setNotificationToast({
        on: true,
        variant: 'top-accent',
        position: 'top',
        title: 'Login Failed',
        description: 'Please check your email and password',
        status: 'error',
      })
      return setTimeout(() => {
        setNotificationToast({ on: false })
      }, 2)
    }

    const token = myToken.data.data

    if (token != null || undefined) {
      myPassportBundler(token)
    }

    const { myData, myContacts, myMessages, myNotifications } = await getMyInfo(token)

    if (myData.data.data != null || undefined) {
      myDataBundler(myData.data.data)
    } else {

    }

    if (myContacts.data.data != undefined) {
      myContactsBundler(myContacts.data.data)
    }

    if (myMessages != undefined) {
      myMessagesBundler(myMessages)
    }

    if (myNotifications != undefined) {
      myNotificationsBundler(myNotifications.data.data)
    }

    setTimeout(() => {
      setShowLoadingProgress((prev) => !prev);
    }, 1000);

    navigate('/chat')
  }

  function navigator() {
    handleLoadingRoute('/register')
  }

  function reset() {
    handleLoadingRoute('/reset')
  }

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {
        showLoadingProgress ?
          (
            <LoadingProgress show={showLoadingProgress} />
          ) : (
            <></>
          )
      }
      {
        showNotificationToast.on &&
        handleNotificationToast(showNotificationToast)
      }
      <AbsoluteCenter>
        <Box boxSize={{base: '0', md:'300px'}}>
          <Image src="trashtalk.png" bg='white' borderRadius='full'></Image>
        </Box>
        <AbsoluteCenter backdropFilter='auto' backdropBlur='5px' data-aos="zoom-in">
          <Box w={{ base: "40vh", sm: '40vh', md: "70vh", lg: '90vh', xl: '110vh', '2xl': '150vh', }} h='80vh' bg={{ base: 'transparent', md: '#040B1C', lg: '#040B1C' }} opacity='0.9' borderRadius='30'>
            <AbsoluteCenter>
              <Flex direction="column" gap={5} w='357px'>
                <Center marginBottom={'95px'}>
                  <Box boxSize='10vh'>
                    <Image src="trashtalk.png" bg='white' borderRadius='full'></Image>
                  </Box>
                </Center>
                <Text textColor="twitter.100" fontSize={'20px'} fontWeight='700' textAlign={'center'}>Please insert your email and <br/> password</Text>
                <Input id="email" type="email" variant="outline" placeholder="Email" color="white" h={'54px'} _placeholder={{
                  color: '#A5BDFF',
                  opacity: '0.5'
                }}
                />
                <Input id="password" type="password" variant="outline" placeholder="Password" color="white" h={'54px'} 
                _placeholder={{
                  color: '#A5BDFF',
                  opacity: '0.5'
                }}
                />
                <Flex alignItems="center" justifyContent='start'>
                  <Text textColor="white" fontSize='sm' fontWeight='medium'>forgot password ?</Text>
                  <Button onClick={reset} variant="link" color="#93C5FD" fontSize='sm' fontWeight='bold' paddingLeft={'5px'}>reset !</Button>
                </Flex>
                <Button onClick={login} bg="#93C5FD" width="full" h={'42px'}>Login</Button>
                <Flex alignItems="center" justifyContent="center">
                  <Text textColor="white" >Dont have an account ?</Text>
                  <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Register !</Button>
                </Flex>
              </Flex>
            </AbsoluteCenter>
          </Box>
        </AbsoluteCenter>
      </AbsoluteCenter>
    </>
  )
}

export default Login