import { Text } from "@chakra-ui/react";

export function AnotherMessageComponent(props) {
    return (
    <>
        <Text color="red">{props.message}</Text>
    </>
    )
}