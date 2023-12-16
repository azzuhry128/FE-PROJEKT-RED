import React, {Fragment} from "react"
import { Chat } from "../components/Chat"
import { Profile } from "../components/Profile"
import { Flex } from "@chakra-ui/react"
import { useSidebarStore } from "../state/store"

const ChatRoomDisplayAdapter = () => {
    console.log("rendering chatroom...")
    const chatRoom = <Chat/>
    const activeSidebar = useSidebarStore()
    console.log("chatroom rendered...")
return (
    <Fragment>
        <Flex direction="row">
            {activeSidebar}
            {chatRoom}
        </Flex>
    </Fragment>
    )
}

function activeSidebar() {
    console.log("activeSidebar is running")
}

export { ChatRoomDisplayAdapter }
