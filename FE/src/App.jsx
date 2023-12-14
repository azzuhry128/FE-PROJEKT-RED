import { useState } from "react"
import { LandingPageComponent } from "./components/landingPageComponent"
import { LoginComponent } from "./components/loginComponent"
import { fetchCredentials, fetchMessages, fetchToken, uploadCredentials, uploadMessages, uploadToken } from "./api/storage"
import { fakeToken, fakeUser, messages} from "./data/fakeData"
import { eventListener } from "./service/eventListener"

console.log("App is called")

function App() {

  return (
    <>
    <LandingPageComponent/>
    </>
  )
}

export default App