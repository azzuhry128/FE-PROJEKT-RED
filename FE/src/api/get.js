import axios from "axios"

const getAllUserInfo = async(url) => {
  const getEvent = new Event("GET_ALL_USER_INFO")
  const result = await axios.get(url).then((response) => response)

  document.dispatchEvent(getEvent)
  return result
}

const getAllUserMessages = async(url) => {
  const result = await axios.get(url).then((response) => response)
  return result
}

const getAllUserContacts = async(url) => {
  const result =await axios.get(url).then((response) => response)
  return result
}

const userData = async(infoURL, messageURL, contactsURL) => {

  const info = await getAllUserInfo(infoURL)
  const messages = await getAllUserMessages(messageURL)
  const contacts = await getAllUserContacts(contactsURL)

  const data = {info, messages, contacts}

  return data
}

export { userData }