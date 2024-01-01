//this is FE-experimental branch, do your witchcrafts here
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/montserrat'
import { eventListener } from './service/eventListener'
import { LandingPageComponent } from './components/landingPageComponent'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginComponent } from './components/loginComponent'
import { ChatRoomDisplayAdapter } from './adapters/ChatRoomDisplayAdapter'
import { ConfirmEmail } from './components/ConfirmEmail'
import { ProfilePictureSelector } from './components/ProfilePictureSelecter'
import { ResetPassword } from './components/ResetPassword'
import { RegisterComponent } from './components/RegisterComponent'

const mainTheme = extendTheme({
  fonts: {
    montserrat: 'montserrat'
  }
})

const router = createBrowserRouter([
  {
    path:'/',
    element: <LandingPageComponent/>
  },
  {
    path:'/login',
    element: <LoginComponent/>,
  },
  {
    path:'/register',
    element: <RegisterComponent/>,
  },
  {
    path:'/chatroom',
    element: <ChatRoomDisplayAdapter/>,
    
  },
  {
    path:'/confirmation',
    element: <ConfirmEmail/>
  },
  {
    path: '/profilepictureselector',
    element: <ProfilePictureSelector/>
  },
  {
    path: '/resetpassword',
    element: <ResetPassword/>
  }
])

//temporary event listener
document.addEventListener("customEvent", (e) => {
  eventListener(e)
})

ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
    <ChakraProvider theme={mainTheme}>
        <RouterProvider router={router}>
        </RouterProvider>
    </ChakraProvider>
  )
