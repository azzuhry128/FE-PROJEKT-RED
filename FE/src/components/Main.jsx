import { Flex } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Chat } from "./Chat";
import { Extension } from "./Extension";

export function Main() {
    return(
        <>
        <Flex>
            <Sidebar/>
            <Extension/>
            <Chat/>
        </Flex>
        </>
    )
}