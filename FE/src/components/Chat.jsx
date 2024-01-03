import { Box, Text, Avatar, Button, Input, Spinner } from "@chakra-ui/react"
import { MessageAdapter } from "../adapters/messageAdapter"
import { renderMessageCommand, useAccountStore, useContactStore, useMessageStore, useSelectedContactStore, useTokenStore, useSocketStore } from "../state/store"
import "boxicons"
import { refinedUser } from "../data/fakeData"
import io from 'socket.io-client'
import axios from 'axios'
import { useEffect } from "react"
// import { key } from "localforage"

export function Chat() {
  const socket = io.connect(`http://localhost:3000/`, { transports: ['polling'], reconnect: true }, 'echo-protocol');
  const { socketState } = useSocketStore()
  let { messageState, setMessageState } = useMessageStore()
  const { roomState } = useContactStore()
  const { selectedContactIDState } = useSelectedContactStore()
  const { id } = useAccountStore()
  const { tokenState } = useTokenStore()
  const { selectedContactNameState, selectedContactTagState, displayProfilePictureState, displayMessageBarState } = useSelectedContactStore()
  const { renderMessageState } = renderMessageCommand()

  document.addEventListener('DOMContentLoaded', () => {
    console.log('page is loaded')
    const button = document.getElementById('messageInput')
    button.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        console.log(event.key)
      }
    })
  })

  async function getMessages() {
    socket.emit('join', roomState)
    socket.timeout(2000).on('message', async function (data) {
      const messageData= await axios.get(`http://localhost:3000/api/message/${roomState}`,
        {
          headers: { 'Authorization': `Bearer ${tokenState}` },
        }
      )

      console.log(`checking res in messageAdapter ${JSON.stringify(messageData)}`)
      setMessageState(messageData.data)
    })
  }

  useEffect(() => {
    getMessages()
  });

  const sendMessagesToSocket = async (data) => {
    console.log('emitting message to socket io')
    socket.emit("sendMessage", (roomState, data)); // emit THEN send data so server
    console.log('message emitted')
  }

  async function handleCLick() {
    let element = document.getElementById('messageInput')
    const content = element.value


    await sendMessagesToSocket(content)

    console.log(tokenState);

    const response = await axios({
      method: 'POST',
      url: `http://localhost:3000/api/message/${roomState}`,
      headers: { 'Authorization': `Bearer ${tokenState}` },
      data: { content: content },
    }).then((response) => response)


    console.log(`checking response.data @ CHAT: ${JSON.stringify(response.data)}`)

    element.value = ''

    socket.off('message')
  }

  function handleEnterKey(event) {
    if (event.key === 'Enter') {
      console.log("enter")
      handleCLick()
    }

  }

  // useEffect(() => {
  //     socketState.on('message', async function (data) {
  //       await axios.get(`http://localhost:3000/api/message/${roomState}`).then((res) => {
  //         console.log(`checking res in messageAdapter ${JSON.stringify(res)}`)
  //         setMessageState(res.data)
  //       })
  //     })
  // })

  // useEffect(() => {
  //   async function getMessages() {
  //     socket.on('message', (data) => {
  //       console.log('message received')
  //       console.log(data)
  //       console.log(socket.id)
  //       // console.log(getMessages())
  //     })
  //   }

  //   getMessages()
  // })

  // function addMessageDetails() {
  //   console.log("adding details")
  //   const createdAt = new Date().toISOString()
  //   const chat_room_id = roomState
  //   const account_id = id

  //   const object = {createdAt, chat_room_id, account_id}
  //   return object
  // }

  return (
    <Box width="full" h="$100vh" bg="#0F172A" display="flex" flexDirection="column" borderBottom="1px" >
      <Box bg="#1E293B" display="flex" flexDirection="row" padding="0.5rem" >
        <Avatar src="" width="48px" height="48px" visibility={displayProfilePictureState ? 'visible' : 'hidden'} />
        <Box gap="2" marginLeft="12px">
          <Text color="white" fontSize="16px"> {selectedContactNameState} </Text>
          <Text color="#94A3B8" fontSize="12px" >{selectedContactTagState}</Text>
        </Box>
      </Box>

      <Box id="renderMessageLocation" flex={1} overflowY="scroll">
        {renderMessageState && <MessageAdapter messageArray={messageState}/> }
      </Box>
      <Box bg="#1E293B" display="flex" flexDirection="row" padding="1rem" gap="4" visibility={displayMessageBarState ? 'visible' : 'hidden'}>
        <Input id="messageInput" onKeyDown={handleEnterKey} placeholder="Write a Message...." _placeholder={{ color: "#93C5FD" }} h="42px" bg="#0F172A" borderRadius="10px" border="none" textColor="white" required></Input>
        <Button id="sendMessage" onClick={handleCLick} w="42px" h="42px" bg="#93C5FD" color="#93C5FD" borderRadius="12px" p={0}>
          <box-icon type='solid' name='send' size='sm'></box-icon>
        </Button>
      </Box>
    </Box>

  )
}


