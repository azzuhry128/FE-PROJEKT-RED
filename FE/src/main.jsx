//this is FE-experimental branch, do your witchcrafts here
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import '@fontsource-variable/montserrat'

// importing react router
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from 'react-router-dom'

// importing components
import { Landing } from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import Contact from './components/Contact'
import Otp from './components/Otp'

const mainTheme = extendTheme({
  fonts: {
    montserrat: 'montserrat'
  }
})

// const passport = {
//   token: '529440',
//   expiredAt: false
// }


// function immigration() {
//   console.log('checking for authorization')

//   console.log(passport.expiredAt)

//   if(passport.expiredAt === true) {
//     console.log('unauthorized : passport is expired')
//     return false
//   }

//   if(passport.expiredAt === null) {
//     console.log('unauthorized : passport is null')
//     return false
//   }

//   console.log('authorized')
//   return true
// }

const MainLayout = () => {
  const navigate = useNavigate()
  const passport = JSON.parse(localStorage.getItem('passport'))

  console.log(passport)

  if(passport === null) {
    console.log('unauthorized : passport is null')
    useEffect(() => {
      navigate('/login')
    }, [navigate])
  }

  return (
    <>
      <Flex direction="row">
        <Sidebar/>
        <Contact/>
        <Chat/>
      </Flex>
    </>
  )
}

const routes = [
  {
    path:'/',
    element: <Landing/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/otp',
    element: <Otp/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/chat',
    element: <MainLayout/>,
  },
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
   // init react strict
  //  <React.StrictMode>
    <ChakraProvider theme={mainTheme}>
        <RouterProvider router={router}>
        </RouterProvider>
    </ChakraProvider>
  //  </React.StrictMode>
  )