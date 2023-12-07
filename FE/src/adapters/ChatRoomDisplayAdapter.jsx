import React, {Fragment} from "react"
import { Chat } from "../components/Chat"
import { Profile } from "../components/Profile"
import { Flex } from "@chakra-ui/react"


export const ChatRoomDisplayAdapter = () => {
    console.log("rendering chatroom...")
    const chatRoom = <Chat/>
    const activeSidebar = <Profile/>
    console.log("chatroom rendered...")
    const chatRoomRenderedEvent = new CustomEvent("customEvent", {detail: 'chat room is rendered'}) 
    document.dispatchEvent(chatRoomRenderedEvent)

return (
    <Fragment>
        <Flex direction="row">
            {activeSidebar}
            {chatRoom}
        </Flex>
    </Fragment>
    )
}
