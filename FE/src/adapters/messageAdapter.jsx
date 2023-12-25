import { AnotherMessageComponent } from "../components/AnotherMessageComponent"
import { MessageComponent } from "../components/MessageComponent"
import { useAccountStore, useContactStore } from "../state/store"

export const MessageAdapter = (props) => {
  const currentUserId = useAccountStore((state) => state.id)
  const currentRoom = useContactStore((state) => state.roomState)
  console.log("rendering messages...")
  console.log(props.messageArray)


  return props.messageArray.map((message) => {
    if(message.chat_room_id !== currentRoom) {
      console.log(`wrong room: message room : ${message.chat_room_id} current room: ${currentRoom}`)
      return
    }

    if(message.account_id !== currentUserId) {
      console.log(`rendering another messages`)
      return <AnotherMessageComponent message={message.content} key={message.message_id}/>
    }

    console.log("rendering messages")
    return <MessageComponent message={message.content} key={message.message_id}/>
    }
  )
}
