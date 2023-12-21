import { Flex, Text } from "@chakra-ui/react";

export function Contact(props) {
    return(
        <>
        <Flex direction="column" margin="1rem" bg="#93C5FD" borderRadius="8px">
            <Text color="blue">{props.name}</Text>
            <Text color="blue">{props.tag}</Text>
        </Flex>
        </>
    )
}