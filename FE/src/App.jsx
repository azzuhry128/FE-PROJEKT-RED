import { useState } from "react"
import { LandingPageComponent } from "./components/landingPageComponent"
import { LoginComponent } from "./components/loginComponent"
import { fetchCredentials, fetchMessages, fetchToken, uploadCredentials, uploadMessages, uploadToken } from "./api/storage"
import { fakeToken, fakeUser, messages} from "./data/fakeData"
import { eventListener } from "./service/eventListener"

console.log("App is called")

// upload local storage
// window.onload = () => {
//   uploadMessages(messages)
//   uploadCredentials(fakeUser)
//   uploadToken(fakeToken)
// }

// fetch local storage
// const fetchedMessages = fetchMessages()
// const fetchedCredentials = fetchCredentials()
// const fetchedToken = fetchToken()
// data arrays
// const messageArray = []
// const userDataArray = []
// const userTokenArray = []

// push fetched data into arrays
// messageArray.push(fetchedMessages)
// userDataArray.push(fetchedCredentials)
// userTokenArray.push(fetchedToken)

// check for array content
// if (messageArray.length === 0) {
//   console.log('messageArray is empty')
// }

// if (userDataArray.length === 0) {
//   console.log('userDataArray is empty')
// }

// if (userTokenArray.length === 0) {
//   console.log('userTokenArray is empty')
// }

// arrays logger
// console.log(messageArray[0])
// console.log(userDataArray[0])
// console.log(userTokenArray[0])

function App() {

  return (
    <>
    <LandingPageComponent/>
    </>
  )
}

export default App