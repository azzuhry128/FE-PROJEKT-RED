import { Box,Text,Avatar,Button,Input, Spinner } from "@chakra-ui/react"
import "boxicons"
import axios from 'axios'

function Chat() {
  console.log('rendering chat...')
  document.addEventListener('DOMContentLoaded', () => {
    console.log('page is loaded')
    const button = document.getElementById('messageInput')
    button.addEventListener('keydown', function(event) {
      if(event.key === 'Enter') {
        console.log(event.key)
      } 
    })
  })

  
  function handleEnterKey(event) {
    if(event.key === 'Enter') {
      console.log("enter")
      handleCLick()
    }
  }

  async function messageAdapter() {
    
  }

  async function sendMessasge() {
    console.log('from Chat: sending message')
    let element = document.getElementById('messageInput')
    const content = element.value

    console.log(`checking content in CHAT:${content}`)

    const response = await axios({
      method:'POST',
      url: `http://localhost:3000/api/message/${receiverRoomID}`,
      headers : {'Authorization': `Bearer ${loggedInUserToken}`},
      data: {content: content},
    }).then((response) => response)

    element.value = ''
  }

  return (
    <Box width="full" h="$100vh" bg="#0F172A" display="flex" flexDirection="column" borderBottom="1px" borderColor='black' >
        <Box bg="#1E293B" display="flex" flexDirection="row" padding="0.5rem" >
          <Avatar src="" width="48px" height="48px" visibility='hidden' />
          <Box gap="2" marginLeft="12px">
            <Text color="white" fontSize="16px" visibility="hidden"> name </Text>
            <Text color="#94A3B8" fontSize="12px" visibility='hidden'>tag</Text>
          </Box>
        </Box>

        <Box id="renderMessageLocation" flex={1} overflowY="scroll">  
        </Box>
      <Box bg="#1E293B" display="flex" flexDirection="row" padding="1rem" gap="4" visibility='hidden'>
        <Input id="messageInput" onKeyDown={handleEnterKey} placeholder="Write a Message...."  _placeholder={{color : "#93C5FD"}} h="42px" bg="#0F172A" borderRadius="10px" border="none" textColor="white" required></Input>
          <Button id="sendMessage" w="42px" h="42px" bg="#93C5FD" color="#93C5FD" borderRadius="12px" p={0}>  
          <box-icon type='solid' name='send' size='sm'></box-icon>
        </Button>
      </Box>
    </Box>
  );
}

export default Chat


