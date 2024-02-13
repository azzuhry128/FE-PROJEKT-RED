import React, { useState } from "react";
import { AbsoluteCenter, Box, Button, Center, Flex, VStack, Image, Input, Text, HStack } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingProgress from "./miscellaneous/LoadingProgress";

function Login() {
  const [showLoadingProgress, setShowLoadingProgress] = useState(false);

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
    console.log('getting token')
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

  async function login() {
    console.log('FROM login : logging in...')

    setShowLoadingProgress((prev) => !prev);
    const emailInput = document.getElementById("email").value
    const passwordInput = document.getElementById("password").value

    const myToken = await getToken(emailInput, passwordInput)

    const token = myToken.data.data
    console.log(token)
    const myData = await getMyAccountData(token.token)
    const myContacts = await getMyContacts(token.token)
    const myMessages = await getMyMessages(token.token, myContacts.data.data)
    const myNotifications = await getMyNotification(token.token)

    if (token != null || undefined) {
      myPassportBundler(token)
    }

    if (myData.data.data != null || undefined) {
      myDataBundler(myData.data.data)
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

      <AbsoluteCenter>
        <Flex direction="column" >
          <VStack>
            <Text as="b" textColor="#93C5FD" fontSize="1.2rem">Please insert your Email and </Text>
            <Text as="b" textColor="#93C5FD" fontSize="1.2rem">password</Text>
          </VStack>
          <Input id="email" type="email" width="20rem" height="3rem" variant="outline" marginTop="1rem" placeholder="Email" backgroundColor="white" color="white" />
          <Input id="password" type="password" variant="outline" width="20rem" height="3rem" marginTop="1rem" backgroundColor="white" placeholder="Password" color="white" />
          <Button onClick={login} bg="#93C5FD" marginTop="1rem" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text as="b" textColor="white" >Dont have an account ?</Text>
            <Button onClick={navigator} variant="link" as="b" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
      <HStack>
        <Image src="planet_kiri.png" marginLeft="4rem" marginTop="2rem" ></Image>
        <Image src="planet_kanan.png" marginLeft="100rem"  ></Image>
      </HStack>
      <HStack>
        <Image src="garis_kiri_bawah.png" marginLeft="5rem" marginTop="40rem" ></Image>
        <Image src="kanan_bawah.png" marginLeft="78rem" marginTop="35rem" ></Image>
      </HStack>
    </>
  )
}

export default Login