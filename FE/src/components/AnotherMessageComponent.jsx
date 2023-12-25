import { Flex, Text } from "@chakra-ui/react";

export function AnotherMessageComponent(props) {
    return (
    <>
    <Flex justifyContent="left" padding="1rem">
        <Text bg="#93C5FD" width="max-content" fontSize="14" fontWeight="normal" padding="8px" borderRadius="8px" align="right" color="#1E293B">{props.message}</Text>
    </Flex>
    </>
    )
}