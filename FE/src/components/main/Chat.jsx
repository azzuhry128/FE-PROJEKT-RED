import { Box,Text,Avatar,Button,Input, Spinner, Flex, IconButton, Divider } from "@chakra-ui/react"
import "boxicons"
import callStackLog from "../../log/callStackLog";
import { useDispatch } from "react-redux";
import Message from "../message";
import add_message from "../../actions/ADD_MESSAGE";
import MessageAdapter from "../../adapters/MessageAdapter";
import ContactInfoAdapter from "../../adapters/ContactInfoAdapter";

const Chat = () => {
  const dispatch = useDispatch()

  const sendMessage = async() => {
    const value = document.getElementById('messageInputField').value
    const messageobj = add_message(value)
    dispatch(messageobj)
  }

  return (
    <Flex width="full" direction='column' justifyContent='space-evenly' flexDirection="column" borderLeft='1px' borderColor='black'>
      <Box display='flex' flexDirection='row' width='full'bg='#EE7850' flex='1' height='auto' boxShadow='lg' borderBottom='1px' borderColor='black'>
        <ContactInfoAdapter/>
      </Box>

      <Box flex='9' boxShadow='lg' bg='#EE7850'>
      <MessageAdapter/>
      </Box>

      <Box display='flex' flexDirection='row' bg='#EE7850' justifyContent='center' alignItems='center' flex='0' gap={2} borderTop='1px' borderColor='black'>
        <Input id="messageInputField" border='none' focusBorderColor='transparent'/>
        <IconButton onClick={() => sendMessage()} size='sm' mr={2} bg='transparent' _focus={{bg: 'transparent'}} _hover={{bg: 'transparent'}} icon={<box-icon type='solid' name='paper-plane'></box-icon>}/>
      </Box>
    </Flex>
  );
}

export default Chat


