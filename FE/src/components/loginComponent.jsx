import { AbsoluteCenter, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
// import { useLoginState } from "../state/store";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoginState } from "../state/store";

export function LoginComponent() {
  const {setLoginTokenState, setLoginValidState} = useLoginState()

  const navigate = useNavigate()
  
  function handleClick(){
    // const {setTokenState, setValidState} = useLoginState()
    const emailInput = document.getElementById("email").value
    const passwordInput = document.getElementById("password").value

    async function login() {
      const result = axios.post('http://localhost:3000/api/auth/login/', {
        email: emailInput,
        password: passwordInput
      }).then((response) => response).catch((error) => console.log(error))
      return result
    }

    async function getAccountData(token) {

      console.log(token)

      const result = axios.post('http://localhost:3000/api/accounts/my-account', {
        headers: {
          Authorization: token
        }
      }).then((response) => response).catch((error) => error)

      return result
    }

    async function upload() {
      const response = await login()
      const token = await response.data.data.token
      const expired = await response.data.data.expiredAt

      const userData = await getAccountData(token)

      console.log(userData)

      // const {account_id, username} = await userData.data.data
      // const account_id = await userData.data.data.account_id
      // const username = await userData.data.data.username

      // const {user_id, profile_name, email, image, bio} = await userData.data.data.user

      // const user_id = await userData.data.data.user.user_id
      // const profile_name = await userData.data.data.user.profile_name
      // const email = await userData.data.data.user.email
      // const bio = await userData.data.data.user.bio

      // localStorage.setItem('username', username)
      // localStorage.setItem('account_id', account_id)
      // localStorage.setItem('user_id', user_id)
      // localStorage.setItem('profile_name', profile_name)
      // localStorage.setItem('email', email)
      // localStorage.setItem('image', image)
      // localStorage.setItem('bio', bio)

      localStorage.setItem('token', token)
      localStorage.setItem('validity', expired)

      setLoginTokenState(token)
      setLoginValidState(expired)

      navigate('/chat')
    }

    upload()

  }

  function navigator() {
    navigate('/register')
  }

  function home() {
    navigate('/')
  }

  function reset() {
    navigate('/reset')
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Button onClick={home} variant="link" fontSize={16} fontWeight="bold" color={"#93C5FD"}>Home</Button>
      </Box>

      <AbsoluteCenter>
        <Flex direction="column" gap={4}>
          <Text textColor="twitter.100">Please insert your username and password</Text>
          <Input id="email" type="email" variant="outline" placeholder="Email" color="white" />
          <Input id="password" type="password" variant="outline" placeholder="Password" color="white" />
          <Flex alignItems="center" justifyContent='start'>
            <Text textColor="white" fontSize='xs' fontWeight='medium'>forgot password ?</Text>
            <Button onClick={reset} variant="link" color="#93C5FD" fontSize='xs' fontWeight='medium'>reset !</Button>
          </Flex>
          <Button onClick={handleClick}  bg="#93C5FD" width="full">Login</Button>
          <Flex alignItems="center" justifyContent="center">
            <Text textColor="white" >Dont have an account ?</Text>
            <Button onClick={navigator} variant="link" color="#93C5FD" ml={2}>Register !</Button>
          </Flex>
        </Flex>
      </AbsoluteCenter>
    </>
  )
}