
// components
import MessageComponent from "../components/message/MessageComponent"

// states
import { useLoggedInUserStore, useContactStore} from "../state/store"

const MessageAdapter = (props) => {

  const loggedInID = useLoggedInUserStore((state) => state.id)
  const contactRoom = useContactStore((state) => state.roomState)

  const messageArray = []
  messageArray.push(props.messageArray[0])

  if (messageArray === '' || null) {
    console.log("FROM message IN adapters: messageArray is empty")
  } else {
    return messageArray[0].map((message) => {
      if(message.chatRoom.chat_room_id !== contactRoom) {
        console.log(`wrong room: message room : ${message.chatRoom.chat_room_id} current room: ${currentRoom}`)
        return
      }
  
      if(message.account_id !== loggedInID) {
        console.log(`rendering another messages`)
        return <MessageComponent message={message.content} key={message.message_id}/>
      }
  
      console.log("rendering messages")
      return <MessageComponent message={message.content} key={message.message_id}/>
      }
    )
  }
}

export default MessageAdapter
