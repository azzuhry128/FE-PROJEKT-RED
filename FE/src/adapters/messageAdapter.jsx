import MessageComponent from "../components/message/MessageComponent"
import { useSelectedContactStore } from "../state/store"


const MessageAdapter = () => {
  const {id} = useSelectedContactStore()
  
  function getMessages(id) {
    console.log('getting messages from localstorage')
    const result = JSON.parse(localStorage.getItem(id))
    return result
  }

  function getLoggedInUserAccountID() {
    console.log('getting logged in user account ID')
    const result = JSON.parse(localStorage.getItem('credentials'))
    return result
  }

  const messages = getMessages(id)
  const loggedInAccountID = getLoggedInUserAccountID()

  // console.log(loggedInAccountID)

  if (messages === null) {
    console.log(messages)
  } else {
    return messages.map((message) => {
      if (message.account_id === loggedInAccountID.account_id) {
        return <MessageComponent message={message.content} key={message.message_id} position={'right'}/>
      }

      return <MessageComponent message={message.content} key={message.message_id} position={'left'}/>
    })
  }
}

export default(MessageAdapter)