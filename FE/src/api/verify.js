import axios from "axios"

const verify = async(payload) => {
    console.log("logging in")
    const response = axios.post('127.0.0.1:3000/api/auth/register/mail/get-otp/', {
        email: payload.email,
    })
    .then((response) => response)
    .catch((error) => console.log(error))

    return response
}

export { verify }