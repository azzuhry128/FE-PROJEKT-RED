import { Box,Text,Avatar,Button,Input, Spinner } from "@chakra-ui/react"
import { MessageAdapter } from "../adapters/messageAdapter"
import {renderMessageCommand, useAccountStore, useContactStore, useMessageStore, useSelectedContactStore, useTokenStore } from "../state/store"
import "boxicons"
import { refinedUser } from "../data/fakeData"
import io from 'socket.io-client'
import axios from 'axios'
import { useEffect } from "react"
// import { key } from "localforage"

export function Chat() {
  const socket = io(`http://localhost:3000/`);
  let { messageState, setMessageState } = useMessageStore()
  const { roomState } = useContactStore()
  const { selectedContactIDState } = useSelectedContactStore()
  const { id } = useAccountStore()
  const { tokenState } = useTokenStore()
  const { selectedContactNameState, selectedContactTagState, displayProfilePictureState, displayMessageBarState } = useSelectedContactStore()
  const { renderMessageState } = renderMessageCommand()

  // console.log(renderMessageState)
  // const sendMessageButton = document.getElementById('sendMessage')

  document.addEventListener('DOMContentLoaded', () => {
    console.log('page is loaded')
    const button = document.getElementById('messageInput')
    button.addEventListener('keydown', function(event) {
      if(event.key === 'Enter') {
        console.log(event.key)
      } 
    })
  })
  
  const sendMessagesToSocket = async(data) => {
    console.log('emitting message to socket io')
    socket.emit("message", roomState, data); // emit THEN send data so server
  }

  async function handleCLick() {
    let element = document.getElementById('messageInput')
    const content = element.value


    console.log(`checking roomstate in CHAT: ${selectedContactIDState}`)
    console.log(`checking tokenState in CHAT: ${tokenState}`)


    // const response = await axios.post(`http://localhost:3000/api/message/${roomState}`, {
    //   headers : {
    //     'Authorization': `Bearer ${tokenState}`
    //   },
    //   content: content
    // })

    console.log(`checking content in CHAT:${content}`)

    const response = await axios({
      method:'POST',
      url: `http://localhost:3000/api/message/${roomState}`,
      headers : {'Authorization': `Bearer ${tokenState}`},
      data: {content: content},
    }).then((response) => response)

    // console.log(`checking response data ${response}`)

    console.log(`checking response.data @ CHAT: ${JSON.stringify(response.data)}`)

    sendMessagesToSocket(response.data)
    setMessageState(response.data)

    // console.log("message button is clicked")
    // const { createdAt, chat_room_id, account_id } = addMessageDetails()
    // const object = { chat_room_id, account_id, content, createdAt }

    element.value = ''
  }

  function handleEnterKey(event) {
    if(event.key === 'Enter') {
      console.log("enter")
      handleCLick()
    }

  }

  function addMessageDetails() {
    console.log("adding details")
    const createdAt = new Date().toISOString()
    const chat_room_id = roomState
    const account_id = id

    const object = {createdAt, chat_room_id, account_id}
    return object
  }

  // console.log(selectedContactNameState)
  // console.log(selectedContactTagState)
  // console.log('profile picture',displayProfilePictureState)
  // console.log('message bar',displayMessageBarState)

  return (
    <Box width="full" h="$100vh" bg="#0F172A" display="flex" flexDirection="column" borderBottom="1px" >
        <Box bg="#1E293B" display="flex" flexDirection="row" padding="0.5rem" >
          <Avatar src="" width="48px" height="48px" visibility={displayProfilePictureState ? 'visible' : 'hidden'}/>
          <Box gap="2" marginLeft="12px">
            <Text color="white" fontSize="16px"> {selectedContactNameState} </Text>
            <Text color="#94A3B8" fontSize="12px" >{selectedContactTagState}</Text>
          </Box>
        </Box>

        <Box id="renderMessageLocation" flex={1} overflowY="scroll">
          {renderMessageState && <MessageAdapter messageArray={messageState} sender={refinedUser}/> }
        </Box>
      <Box bg="#1E293B" display="flex" flexDirection="row" padding="1rem" gap="4" visibility={displayMessageBarState ? 'visible' : 'hidden'}>
        <Input id="messageInput" onKeyDown={handleEnterKey} placeholder="Write a Message...."  _placeholder={{color : "#93C5FD"}} h="42px" bg="#0F172A" borderRadius="10px" border="none" textColor="white" required></Input>
          <Button id="sendMessage" onClick={handleCLick} w="42px" h="42px" bg="#93C5FD" color="#93C5FD" borderRadius="12px" p={0}>  
          <box-icon type='solid' name='send' size='sm'></box-icon>
        </Button>
      </Box>
    </Box>

  )
}


