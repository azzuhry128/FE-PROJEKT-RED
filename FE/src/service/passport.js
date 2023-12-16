import { useLoginState } from "../state/store"

const passport = () => {
    console.log("passport is running")
    const { tokenState, validState } = useLoginState()
    const currentDate = new Date()
    
    if (tokenState === '') {
        console.log("token missing")
        return false
    }
    if (currentDate.toISOString() > validState) {
        console.log("token expired")
        return false
    }

    console.log("permission granted")
    return true
}

export { passport }