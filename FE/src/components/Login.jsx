import React, { useState } from "react";
import { AbsoluteCenter, Box, Button, Center, Flex, Image, Input, Text } from "@chakra-ui/react";
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
    const result = axios.get('http://localhost:3000/api/chat/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => response).catch((error) => error)

    return result
  }

  
  async function getMyAccountData(token) {
    // console.log(`checking token for account in login: ${JSON.stringify(token)}`)
    const result = axios.get('http://localhost:3000/api/accounts/my-account', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => response).catch((error) => error)

    return result
  }

  async function getToken(emailInput, passwordInput) {
    const result = axios('http://localhost:3000/api/auth/login/', {
      method:'POST',
      data: {'email': emailInput, 'password': passwordInput}
    }).then((response) => response).catch((error) => console.log(error)) 

    return result
  }

  async function myDataBundler(data) {
    console.log('bundling data...')
    // const account_id = data.account_id
    // const user_id = data.user.user_id
    // const username = data.username
    // const email = data.user.email
    // const image = data.user.image

    // const bundle = {account_id, user_id, username, email, image}
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
    localStorage.setItem('contacts', JSON.stringify(data))
    console.log("bundling contacts finished")
  }

  async function login() {
    console.log('FROM login : logging in...')

    setShowLoadingProgress((prev) => !prev);
    const emailInput = document.getElementById("email").value
    const passwordInput = document.getElementById("password").value

    const myToken = await getToken(emailInput, passwordInput)

    const token = myToken.data.data
    const myData = await getMyAccountData(token.token)
    const myContacts = await getMyContacts(token.token)

    if(token != null || undefined ) {
      myPassportBundler(token)
    }

    if(myData.data.data != null || undefined ) {
      myDataBundler(myData.data.data)
    }

    if(myContacts.data.data != undefined) {
      myContactsBundler(myContacts.data.data)
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
        <Flex direction="column" gap={4}>
          <Center>
            <Box boxSize='13vh' marginBottom='30px' >
              <Image src="trashtalk.png" bg='white' borderRadius='full'></Image>
            </Box>
          </Center>
          <Text textColor="twitter.100">Please insert your username and password</Text>
          <Input id="email" type="email" variant="outline" placeholder="Email" color="white" />
          <Input id="password" type="password" variant="outline" placeholder="Password" color="white" />
          <Flex alignItems="center" justifyContent='start'>
            <Text textColor="white" fontSize='xs' fontWeight='medium'>forgot password ?</Text>
            <Button onClick={reset} variant="link" color="#93C5FD" fontSize='xs' fontWeight='medium'>reset !</Button>
          </Flex>
          <Button onClick={login} bg="#93C5FD" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >Dont have an account ?</Text>
            <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
    </>
  )
}

export default Login