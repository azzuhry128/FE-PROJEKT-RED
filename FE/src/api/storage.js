const uploadTokenToStorage = (token) => {
  localStorage.setItem("auth-token", token)
}

const fetchTokenFromStorage = () => {
  const token = localStorage.getItem("auth-token")
  return token
}

export { uploadTokenToStorage, fetchTokenFromStorage }