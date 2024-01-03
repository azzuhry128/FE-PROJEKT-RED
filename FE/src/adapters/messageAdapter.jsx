import { useEffect, useState } from "react"
import { AnotherMessageComponent } from "../components/AnotherMessageComponent"
import { MessageComponent } from "../components/MessageComponent"
import {
  useAccountStore,
  useContactStore,
  useMessageStore,
  // useSelectedContactStore,
  useTokenStore,
  useSocketStore,
} from "../state/store"

export const MessageAdapter = (props) => {

  const currentUserId = useAccountStore((state) => state.id)
  const currentRoom = useContactStore((state) => state.roomState)

  const [messageArray, setMessageArray] = useState([]); // inisialisasi state messageArray

  useEffect(() => {
    setMessageArray(props.messageArray[0]);
    
  })

  if (messageArray === '' || null) {
    return (<></>)
  } else {
    return messageArray[0].map((message) => {
      if (message.chatRoom.chat_room_id !== currentRoom) {
        console.log(`wrong room: message room : ${message.chatRoom.chat_room_id} current room: ${currentRoom}`)
        return
      }

      if (message.account_id !== currentUserId) {
        console.log(`rendering another messages`)
        return <AnotherMessageComponent message={message.content} key={message.message_id} />
      }

      console.log("rendering messages")
      return <MessageComponent message={message.content} key={message.message_id} />
    }
    )
  }


}
