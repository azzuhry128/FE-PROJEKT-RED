import React, {Fragment, useEffect} from "react"
import { Chat } from "../components/Chat"
import { Flex } from "@chakra-ui/react"
import { useSidebarStore } from "../state/store"
import { Extension } from "../components/Extension"

const ChatRoomDisplayAdapter = () => {
    console.log("rendering chatroom...")
    const {sidebarState, setSidebarState} = useSidebarStore()
    const chatRoom = <Chat/>
    console.log("chatroom rendered...")
return (
    <Fragment>
        <Flex direction="row">
            {Extension}
            {chatRoom}
        </Flex>
    </Fragment>
    )
}

export { ChatRoomDisplayAdapter }
