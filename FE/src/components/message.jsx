import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, RepeatClockIcon, RepeatIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import 'boxicons'
import callStackLog from "../log/callStackLog";
const Message = (props) => {

  const UtilityButton = () => {
    callStackLog('Message.jsx')
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          opacity='0%'
          _hover={{opacity: '100%'}}
          size='xs'
          aria-label='Options'
          alignSelf='center'
          icon={<box-icon name='chevron-down' size='sm'></box-icon>}
          variant='link'
        />
        <MenuList>
          <MenuItem icon={<AddIcon />}>
            copy 
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />}>
            edit
          </MenuItem>
          <MenuItem icon={<RepeatIcon />}>
            delete
          </MenuItem>
        </MenuList>
      </Menu>
    )
  }

  const Sender = () => {
    return(    
      <Flex direction='row' justifyContent='end' padding='0.5rem' gap={1}>
        <UtilityButton/>
        <Flex>
          <Text width='auto' bg='#fb8500' fontSize="sm" fontWeight="normal" padding='0.5rem' alignSelf='center' rounded='md' textAlign="left" color="#1E293B" key={props.id_message}>
              {props.message}
          </Text>
        </Flex>
      </Flex>
    ) 
  }
  
  const Receiver = () => {
    return(
      <Flex direction='row' justifyContent='start' padding='0.5rem' gap={1}>
        <Flex>
          <Text width='auto' bg='#fb8500' fontSize="sm" fontWeight="normal" padding='0.5rem' alignSelf='center' rounded='md' textAlign="left" color="#1E293B" key={props.id_message}>
            {props.message}
          </Text>
        </Flex>
        <UtilityButton/>
      </Flex>
    )
  }
  console.log(props.perspective)
  return (
    <>
    {props.perspective === 'true' ? <Sender/> : <Receiver/>}
    </>
  )
}

export default Message
