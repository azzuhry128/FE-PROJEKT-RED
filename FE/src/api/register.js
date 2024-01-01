import axios from "axios"

const register = async(payload) => {
    console.log("logging in")
    const response = axios.post('127.0.0.1:3000/api/auth/login/', {
        username: payload.username,
        email: payload.email,
        password: payload.password
    })
    .then((response) => response)
    .catch((error) => console.log(error))

    return response
}

export { register }