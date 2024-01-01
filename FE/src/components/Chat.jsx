import { Box,Text,Avatar,Button,Input, Spinner } from "@chakra-ui/react"
import { MessageAdapter } from "../adapters/messageAdapter"
import {useAccountStore, useContactStore, useMessageStore, useSelectedContactStore } from "../state/store"
import "boxicons"
import { refinedUser } from "../data/fakeData"
import { key } from "localforage"

export function Chat() {
  let { messageState, setMessageState } = useMessageStore()
  const { roomState } = useContactStore()
  const { id } = useAccountStore()
  const { selectedContactNameState, selectedContactTagState, displayProfilePictureState, displayMessageBarState } = useSelectedContactStore()
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

  
  function handleCLick() {

    console.log("message button is clicked")
    let element = document.getElementById('messageInput')
    const content = element.value
    const { createdAt, chat_room_id, account_id } = addMessageDetails()
    const object = { chat_room_id, account_id, content, createdAt }
    setMessageState(object)

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



  console.log(selectedContactNameState)
  console.log(selectedContactTagState)
  console.log('profile picture',displayProfilePictureState)
  console.log('message bar',displayMessageBarState)

  return (
    <Box width="full" h="$100vh" bg="#0F172A" display="flex" flexDirection="column" borderBottom="1px">
        <Box bg="#1E293B" display="flex" flexDirection="row" padding="0.5rem" >
          <Avatar src="" width="48px" height="48px" visibility={displayProfilePictureState ? 'visible' : 'hidden'}/>
          <Box gap="2" marginLeft="12px">
            <Text color="white" fontSize="16px"> {selectedContactNameState} </Text>
            <Text color="#94A3B8" fontSize="12px" >{selectedContactTagState}</Text>
          </Box>
        </Box>

        <Box flex={1}>
          <MessageAdapter messageArray={messageState} sender={refinedUser} /> 
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


