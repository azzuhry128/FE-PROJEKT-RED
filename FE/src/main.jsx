//this is FE-experimental branch, do your witchcrafts here
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import '@fontsource-variable/montserrat'

// importing react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// importing components
import { Landing } from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import Contact from './components/Contact'

const mainTheme = extendTheme({
  fonts: {
    montserrat: 'montserrat'
  }
})

const MainLayout = () => {
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

const router = createBrowserRouter([
  {
    path:'/',
    element: <Landing/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/chat',
    element: <MainLayout/>
  },
])

ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
   // init react strict
   <React.StrictMode>
    <ChakraProvider theme={mainTheme}>
        <RouterProvider router={router}>
        </RouterProvider>
    </ChakraProvider>
   </React.StrictMode>
  )