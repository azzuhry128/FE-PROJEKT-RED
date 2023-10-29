import { useState } from "react"
import { LandingPageComponent } from "./components/landingPageComponent"
import { LoginComponent } from "./components/loginComponent"

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true)
  const [showLoginPage, setShowLoginPage] = useState(false)
  const [showRegisterPage, setShowRegisterPage] = useState(false)

  const [showContacts, setShowContacts] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const getStartedClickHandler = () => {
    setShowLandingPage(false)
    setShowLoginPage(true)
  }

  const homeClickHandler = () => {
    setShowLandingPage(true)
    setShowLoginPage(false)
  }

  const registerClickHandler = () => {
    setShowLoginPage(false)
    setShowRegisterPage(true)
  }
  const loginClickHandler = () => {
    setShowRegisterPage(false)
    setShowLoginPage(true)
  }

  return (
    <>
      {showLandingPage && <LandingPageComponent onGetStartedClick={getStartedClickHandler} />}
      {showLoginPage && <LoginComponent onHomeClick={homeClickHandler} onRegisterClick={registerClickHandler} />}
      {showRegisterPage && <RegisterComponent onLoginClick={loginClickHandler} />}
      {/* {showMainPage && <MainComponent onAuthorized={}/>} */}
    </>
  )
}

export default App