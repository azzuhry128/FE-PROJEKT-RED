import { useEffect } from "react"
import { AnotherMessageComponent } from "../components/AnotherMessageComponent"
import { MessageComponent } from "../components/MessageComponent"
import { useAccountStore, useContactStore, useMessageStore, useSelectedContactStore } from "../state/store"

export const MessageAdapter = (props) => {
  // const socket = io(`http://localhost:3000/`);

  const currentUserId = useAccountStore((state) => state.id)
  const currentRoom = useContactStore((state) => state.roomState)
  // const {messageState, setMessageState} = useMessageStore()
  // const {selectedContactRoomState} = useSelectedContactStore()
  // const { roomState } = useContactStore()

  // useEffect(() => {
  //   socket.on('message', function(){
  //     axios.get(`http://localhost:3000/api/message/${roomState}`).then((res) => {
  //       console.log(`checking res in messageAdapter ${JSON.stringify(res)}`)
  //       setMessageState(res.data)
  //     })
  //   })
  // }, [messageState, setMessageState])

  // useEffect(() => {
  //   console.log(`checking messageState in messageAdapter ${JSON.stringify(messageState)}`)
  // }, [messageState])

  const messageArray = []
  messageArray.push(props.messageArray[0])
  // console.log(messageState)

  if (messageArray === '' || null) {
    return
  } else {
    return messageArray[0].map((message) => {
      if(message.chatRoom.chat_room_id !== currentRoom) {
        console.log(`wrong room: message room : ${message.chatRoom.chat_room_id} current room: ${currentRoom}`)
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


}
