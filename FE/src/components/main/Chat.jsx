import { Box,Text,Avatar,Button,Input, Spinner, Flex, IconButton } from "@chakra-ui/react"
import "boxicons"
import callStackLog from "../../log/callStackLog";
import { useDispatch } from "react-redux";
import Message from "../message";
import add_message from "../../actions/ADD_MESSAGE";
import MessageAdapter from "../../adapters/MessageAdapter";

const Chat = () => {
  const dispatch = useDispatch()

  function sendMessage() {
    // callStackLog('sendMessage')
    const value = document.getElementById('messageInputField').value
    const messageobj = add_message(value)
    dispatch(messageobj)
  }

  return (
    <Flex width="full" direction='column' justifyContent='space-evenly' flexDirection="column" gap={1}>
      <Box display='flex' flexDirection='row' width='full'bg='#EE7850' borderRadius='0.5rem' flex='1' height='auto' boxShadow='lg'>
        <Box display='flex' flexDirection='row' padding={2} justifyContent='center' alignItems='center' gap={2}>
          <Avatar/>
          <Box display='flex' flexDirection='column'>
            <Text fontWeight='medium' fontSize='lg'>Username</Text>
            <Text fontWeight='medium'>#Tag</Text>
          </Box>
        </Box>
      </Box>
      <Box borderRadius='0.5rem' flex='9' boxShadow='lg' bg='#EE7850'>
      <MessageAdapter/>
      </Box>
      <Box display='flex' flexDirection='row' bg='#EE7850' justifyContent='center' alignItems='center' borderRadius='0.5rem' flex='0' gap={2} boxShadow='lg'>
        <Input id="messageInputField" border='none' focusBorderColor='transparent'/>
        <IconButton onClick={() => sendMessage()} size='sm' mr={2} bg='transparent' _focus={{bg: 'transparent'}} _hover={{bg: 'transparent'}} icon={<box-icon type='solid' name='paper-plane'></box-icon>}/>
      </Box>
    </Flex>
  );
}

export default Chat


