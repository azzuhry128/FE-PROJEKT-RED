import { MessageComponent } from "../components/messageComponent"

export const MessageAdapter = (messages) => {
  const mappedMessage = messages.map((message) => {
    return <MessageComponent message={message.content} time={message.time} />
  })

  return (
    <div>
      {mappedMessage}
    </div>
  )
}

