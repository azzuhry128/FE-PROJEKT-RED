import { Flex, Text } from "@chakra-ui/react";

function AnotherMessageComponent(props) {
    return (
    <>
    <Flex justifyContent="left" padding="1rem">
        <Text bg="#93C5FD" maxWidth="365px" fontSize="14" fontWeight="normal" padding="8px" borderRadius="8px" align="right" textAlign="left" color="#1E293B">{props.message}</Text>
    </Flex>
    </>
    )
}

export default AnotherMessageComponent