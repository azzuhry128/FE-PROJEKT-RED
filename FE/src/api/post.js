import axios from "axios"

const postRegistrationData = ({name, email, password}) => {
  axios.post('/', {
    username: name,
    email: email,
    password: password
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
  
  axios.post('/', {
    message: message,
    time: time
  })
  .then((response) => {
    response
  })
  .catch((error) => {
    return error
  })
}

export { postRegistrationData, postMessage }