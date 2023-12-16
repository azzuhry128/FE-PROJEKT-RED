const fetchToken = () => {
  const token = localStorage.getItem("AUTH")
  const parsedToken = JSON.parse(token)
  return parsedToken
}

// temporary
const fetchMessages = () => {
  const messages = localStorage.getItem("MESSAGES")
  const parsedMessages = JSON.parse(messages)
  return parsedMessages
}

const fetchAccount = () => {
  const messages = localStorage.getItem("ACCOUNT")
  const parsedMessages = JSON.parse(messages)
  return parsedMessages
}

const fetchUser = () => {
  const credentials = localStorage.getItem("USER")
  const parsedCreds = JSON.parse(credentials)
  return parsedCreds
}

const uploadToken = (token) => {
  const parsedToken = JSON.stringify(token)
  localStorage.setItem("TOKEN", parsedToken)
}

const uploadUser = (user) => {
  const parsedCreds = JSON.stringify(user)
  localStorage.setItem("USER", parsedCreds)
}

const uploadAccount = (account) => {
  const parsedCreds = JSON.stringify(account)
  localStorage.setItem("ACCOUNT", parsedCreds)
}

const uploadMessages = (messages) => {
  const parsedMessages = JSON.stringify(messages)
  localStorage.setItem("messages", parsedMessages)
}

export { uploadToken, uploadAccount, uploadMessages, uploadUser, fetchUser, fetchToken, fetchAccount, fetchMessages }