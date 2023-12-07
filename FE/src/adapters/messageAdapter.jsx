import { Box } from "@chakra-ui/react"
import { AnotherMessageComponent } from "../components/AnotherMessageComponent"
import { MessageComponent } from "../components/MessageComponent"

export const MessageAdapter = (messageArray, sender) => {
  console.log("rendering messages...")
  const array = [...messageArray]
  console.log(array)
  
  const mappedMessage = messageArray.map((message) => {
    if(message.sender !== sender.profile_name) {
      console.log("rendering another messages")
      return <AnotherMessageComponent message={message.content} key={message.id_message}/>
    }
    console.log("rendering messages")
    return <MessageComponent message={message.content} key={message.id_message}/>
    }
  )

  return (
    <Box marginX="2rem">
      {mappedMessage}
    </Box>
  )
}
