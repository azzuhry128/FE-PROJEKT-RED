import React, {Fragment, useEffect} from "react"
import { Chat } from "../components/Chat"
import { Flex } from "@chakra-ui/react"
import { useSidebarStore } from "../state/store"
import { passport } from "../service/passport"
import { LoginComponent } from "../components/loginComponent"
import { Sidebar } from "../components/Sidebar"
import { Extension } from "../components/Extension"
import { Navigate } from "react-router-dom"

const ChatRoomDisplayAdapter = () => {
    // console.log("checking passport")
    const permission = passport()
    // console.log(permission)
    // console.log("rendering chatroom")
    const chatRoom = <Chat/>
    const activeSidebar = Sidebar()
    const activeExtension = Extension()
    // console.log("chatroom rendered")
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

export { ChatRoomDisplayAdapter }
