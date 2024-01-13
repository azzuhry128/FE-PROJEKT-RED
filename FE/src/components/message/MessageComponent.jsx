import { Flex, Text } from "@chakra-ui/react";

function MessageComponent(props) {
  return (
    <>
    <Flex justifyContent={props.position} padding="1rem" >
      <Text bg="#93C5FD" maxWidth="356px" fontSize="14" fontWeight="normal" padding="8px" borderRadius="8px" align="right" textAlign="left" color="#1E293B" key={props.id_message}>
        {props.message}
      </Text>
    </Flex>
    </>
  )
}

export default MessageComponent
