import axios from "axios"

const login = async(payload) => {

    axios.post('127.0.0.1:3000/api/auth/login/', {
        email: payload.email,
        password: payload.password
    }).then((response) => response).catch((error) => console.log(error))
}

export { login }