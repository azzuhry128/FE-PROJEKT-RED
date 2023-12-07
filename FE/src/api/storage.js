const fetchToken = () => {
  const token = localStorage.getItem("auth-token")
  const parsedToken = JSON.parse(token)
  return parsedToken
}

// temporary
const fetchMessages = () => {
  const messages = localStorage.getItem("messages")
  const parsedMessages = JSON.parse(messages)
  return parsedMessages
}

const fetchCredentials = () => {
  const credentials = localStorage.getItem("user-credentials")
  const parsedCreds = JSON.parse(credentials)
  return parsedCreds
}

const uploadToken = (token) => {
  const parsedToken = JSON.stringify(token)
  localStorage.setItem("auth-token", parsedToken)
}

const uploadCredentials = (user) => {
  const parsedCreds = JSON.stringify(user)
  localStorage.setItem("user-credentials", parsedCreds)
}

const uploadMessages = (messages) => {
  const parsedMessages = JSON.stringify(messages)
  localStorage.setItem("messages", parsedMessages)
}

export { uploadToken, uploadCredentials, uploadMessages, fetchToken, fetchCredentials, fetchMessages }