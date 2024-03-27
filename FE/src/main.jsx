//this is FE-experimental branch, do your witchcrafts here
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme, Flex, Container } from '@chakra-ui/react'
import '@fontsource-variable/montserrat'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './layouts/LoginPage'
import Landing from './components/Landing'
import MainLayout from './layouts/MainLayout'
import Register from './layouts/Register'
import { Provider } from 'react-redux'
import store from './app/store'
// importing components

const mainTheme = extendTheme({
  fonts: {
    montserrat: 'montserrat'
  }
})

const router = createBrowserRouter([
  {
    path:'/',
    element: <Landing/>
  },
  {
    path:'/login',
    element: <LoginPage/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/trashtalk',
    element: <MainLayout/>
  }
])

ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
    <ChakraProvider theme={mainTheme}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ChakraProvider>
)