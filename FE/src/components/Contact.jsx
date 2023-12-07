import { Text } from "@chakra-ui/react";

export function Contact(props) {
    return(
        <>
        <Text>{props.name}</Text>
        <Text>{props.tag}</Text>
        </>
    )
}