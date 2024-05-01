import { Box, Container, Flex } from "@chakra-ui/react"
import Sidebar from "../components/main/Sidebar"
import Utility from "../components/main/Utility"
import Chat from "../components/main/Chat"

const MainLayout = () => {
    return(
        <>
            <Flex width='100%' height='100vh'>
                <Sidebar />
                <Utility/>
                <Chat/>
            </Flex>
        </>
    )
}

export default MainLayout