import React, {Fragment} from "react"
import { Chat } from "../components/Chat"
import { Flex } from "@chakra-ui/react"
import { passport } from "../service/passport"
import { Sidebar } from "../components/Sidebar"
import { Extension } from "../components/Extension"
import { Navigate } from "react-router-dom"

const ChatAdapter = () => {
    console.log('running chatroom display adapter')
    const permission = true
    const chatRoom = <Chat/>
    const activeSidebar = Sidebar()
    const activeExtension = Extension()
return ( permission ?
    <Fragment>
        <Flex direction="row">
            {activeSidebar}
            {activeExtension}
            {chatRoom}
        </Flex>
    </Fragment>
    : <Navigate to="/login"/>
    )
}

export default ChatAdapter
