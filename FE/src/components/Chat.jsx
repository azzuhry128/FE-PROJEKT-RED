import { Box,Text,Avatar,Button,Input, Spinner } from "@chakra-ui/react"
import "boxicons"
import axios from 'axios'
import { useSelectedContactStore } from "../state/store"
import { useEffect, useState } from "react"
import MessageAdapter from "../adapters/messageAdapter"

function Chat() {
  console.log('rendering chat...')

  const {image, name, id} = useSelectedContactStore()
  let [visibility] = useState('')


  document.addEventListener('DOMContentLoaded', () => {
    console.log('page is loaded')
    const button = document.getElementById('messageInput')
    button.addEventListener('keydown', function(event) {
      if(event.key === 'Enter') {
        console.log(event.key)
      } 
    })
  })

  // useEffect(() => {
  //   console.log('detecting visibility')
  // }, [image, name])
  
  if (name === '') {
    // console.log('hidden')
    visibility = false
  } else {
    // console.log('visible')
    visibility = true
  }

  
  function handleEnterKey(event) {
    if(event.key === 'Enter') {
      console.log("enter")
      handleCLick()
    }
  }

  //TODO send messages via socket io
  async function sendMessage() {
    console.log('from Chat: sending message')
    let element = document.getElementById('messageInput')
    const content = element.value
    const token = JSON.parse(localStorage.getItem('passport'))

    console.log(`checking content in CHAT:${content}`)
    console.log(token.token)

    const response = await axios({
      method:'POST',
      url: `http://localhost:3000/api/message/${id}`,
      headers : {'Authorization': `Bearer ${token.token}`},
      data: {'content': content},
    }).then((response) => response)

    console.log(response)

    element.value = ''
  }

  return (
    <Box width="full" h="$100vh" bg="#0F172A" display="flex" flexDirection="column" borderBottom="1px" borderColor='black' >
        <Box bg="#1E293B" display="flex" flexDirection="row" padding="0.5rem" >
          <Box display='flex' visibility={ visibility ? 'visible' : "hidden"}>
            <Avatar src="" width="48px" height="48px" />
            <Box gap="2" marginLeft="12px">
              <Text color="white" fontSize="16px" >{name}</Text>
            </Box>
          </Box>
        </Box>

        <Box id="renderMessageLocation" flex={1} overflowY="scroll">  
        {<MessageAdapter/>}
        </Box>
      <Box bg="#1E293B" display="flex" flexDirection="row" padding="1rem" gap="4" visibility={visibility ? 'visible' : 'hidden'}>
        <Input id="messageInput" onKeyDown={handleEnterKey} placeholder="Write a Message...."  _placeholder={{color : "#93C5FD"}} h="42px" bg="#0F172A" borderRadius="10px" border="none" textColor="white" required></Input>
          <Button onClick={() => sendMessage()} id="sendMessage" w="42px" h="42px" bg="#93C5FD" color="#93C5FD" borderRadius="12px" p={0}>  
          <box-icon type='solid' name='send' size='sm'></box-icon>
        </Button>
      </Box>
    </Box>
  );
}

export default Chat


