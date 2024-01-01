import { useLoginState } from "../state/store"

const passport = () => {
    console.log("passport is running")
    const { loginTokenState, loginValidState } = useLoginState()
    const currentDate = new Date()

    console.log(loginTokenState)
    console.log(loginValidState)

    
    if (loginTokenState === null) {
        console.log("token missing")
        return false
    }
    if (currentDate.toISOString() > loginValidState) {
        console.log("token expired")
        return false
    }

    console.log("permission granted")
    return true
}

export { passport }