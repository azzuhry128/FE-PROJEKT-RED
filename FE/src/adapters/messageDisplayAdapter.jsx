import { AnotherMessageComponent } from "../components/AnotherMessageComponent"
import { MessageComponent } from "../components/MessageComponent"

export const MessageAdapter = (messages, sender) => {
  console.log("rendering messages...")
  
  const mappedMessage = messages.map((message) => {
    if(message.sender !== sender.profile_name) {
      console.log("rendering another messages")
      return <AnotherMessageComponent message={message.content} />
    }
    console.log("rendering messages")
    return <MessageComponent message={message.content}/>
    }
  )

  return (
    <div>
      {mappedMessage}
    </div>
  )
}
