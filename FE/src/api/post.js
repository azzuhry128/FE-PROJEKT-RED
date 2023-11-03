import axios from "axios"
import { fetchTokenFromStorage } from "./storage"

const postRegistrationData = ({name, email, password}) => {
  axios.post('/', {
    headers: {
      'content-type': 'application/json',
    },
    data: {
    name: name,
    email: email,
    password: password
    }
  })
  .then((response) => {
    response
  })
  .catch((error) => {
    return error
  })
}

const postLoginData = ({email, password}) => {
  axios.post('/', {
    headers: {
      'content-type': 'application/json',
    },
    data: {
    email: email,
    password: password
    }
  })
  .then((response) => {
    response
  })
  .catch((error) => {
    return error
  })
}

const postMessage = ({message, time, e}) => {
  e.preventDefault()

  const token = fetchTokenFromStorage()
  
  axios.post('/', {
    headers: {
      'content-type': 'application/json',
      auth: token
    },
    data: {
    message: message,
    time: time
    }
  })
  .then((response) => {
    response
  })
  .catch((error) => {
    return error
  })
}

const postSearch = ({nametag, token}) => {
  e.preventDefault()

  axios.post('/',{
    headers: {
      'content-type': 'application/json',
      auth: token
    },
    data: {
    name: nametag,
    }
  })
  .then((response) => {
    response
  })
  .catch((error) => {
    console.log(error)
  })
}

export { postRegistrationData, postLoginData, postMessage, postSearch }