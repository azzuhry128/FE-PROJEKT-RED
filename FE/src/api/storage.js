const uploadToken = (token) => {
  localStorage.setItem("auth-token", token)
}

const fetchToken = () => {
  const token = localStorage.getItem("auth-token")
  return token
}

const uploadCredentials = (user) => {
  localStorage.setItem("user-credentials", user)
}

const fetchCredentials = () => {
  const credentials = localStorage.getItem("user-credentials")
  return credentials
}

export { uploadToken, uploadCredentials, fetchToken, fetchCredentials }