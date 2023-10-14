import { MessageComponent } from "../components/messageComponent"

export const MessageAdapter = (messages) => {
  const mappedObject = messages.map((message) => {
    return <MessageComponent message={message.content} time={message.time} />
  })

  return (
    <div>
      {mappedObject}
    </div>
  )
}

