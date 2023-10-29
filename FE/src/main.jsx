//this is FE-experimental branch, do your witchcrafts here
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/montserrat'
import { PendingContactComponent } from './components/pendingContactComponent'

const theme = extendTheme({
  fonts: {
    montserrat: 'montserrat'
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <App /> */}
      <PendingContactComponent/>
    </ChakraProvider>
  </React.StrictMode>,
)
