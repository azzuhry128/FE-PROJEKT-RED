import { Box,Text,Avatar,Button,Input } from "@chakra-ui/react"
import { MessageAdapter } from "../adapters/messageAdapter"
import { useChatStore } from "../state/store"
import { fakeUser } from "../data/fakeData"

export function Chat() {
  const messages = useChatStore((state) => state.messages)

  return (
    <Box width="full" h="$100vh" bg="#0F172A" display="flex" flexDirection="column">
        <Box bg="#1E293B" display="flex" flexDirection="row" padding="0.5rem">
          <Avatar src="" width="48px" height="48px"/>
          <Box gap="2" marginLeft="12px">
            <Text color="white" fontSize="16px">Azzuhry </Text>
            <Text color="#94A3B8" fontSize="12px" >#monarch128</Text>
          </Box>
        </Box>
      <Box flex="1">
        {MessageAdapter(messages, fakeUser)}
      </Box>
      <Box bg="#1E293B" display="flex" flexDirection="row" padding="1rem" gap="4">
        <Input placeholder="Write a Message...."  _placeholder={{color : "#93C5FD"}} h="42px" bg="#0F172A" borderRadius="10px" border="none" textColor="white"></Input>
          <Button w="42px" h="42px" bg="#93C5FD" color="#93C5FD" borderRadius="12px">  
        </Button>
      </Box>
    </Box>


  )
}


