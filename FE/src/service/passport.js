import { useLoginState, useTokenStore } from "../state/store"

const passport = () => {
    // console.log("passport is running")
    const { loginTokenState } = useLoginState()
    const currentDate = new Date()

    // console.log(loginTokenState)
    // console.log(loginValidState)

    const localToken = localStorage.getItem('token')
    const localValidity = localStorage.getItem('validity')

    // console.log(localToken)
    // console.log(localValidity)
    // console.log(currentDate.toISOString())

    if (loginTokenState === null) {
        // console.log("token missing")
        return false
    }
    if (localToken === null) {
        // console.log("token missing")
        return false
    }

    if(currentDate.toISOString() === localValidity) {
        // console.log('token expired')
        return false
    }

    // console.log("permission granted")
    return true
}

export { passport }