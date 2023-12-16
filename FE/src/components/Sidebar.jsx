import { Box, Button, Flex, Text } from "@chakra-ui/react";
import 'boxicons'
import { useSidebarStore } from "../state/store";

export function Sidebar() {
    let { sideBarState, setSidebarState } = useSidebarStore()
    function handleButtonClick(state) {
        setSidebarState(state)
        console.log(`switch state to: ${setSidebarState}`)
    }
    return(
        <Flex bg="#0F172A" flexDirection="column" justifyContent="center" gap="6" padding="16px">
            <Button onClick={() => handleButtonClick('contacts')} colorScheme="teal" variant="link">
                <Box padding="0.5rem">
                    <box-icon type="solid" name="phone" color="white"></box-icon>
                </Box>
            </Button>

            <Button onClick={() => handleButtonClick('notifications')} colorScheme="teal" variant="link">
                <Box padding="0.5rem">
                    <box-icon type='solid' name='bell' color="white"></box-icon>
                </Box>
            </Button>

            <Button onClick={() => handleButtonClick('profile')} colorScheme="teal" variant="link">
                <Box padding="0.5rem">
                    <box-icon type='solid' name='user-account' color="white"></box-icon>
                </Box>
            </Button>
        </Flex>
    )
}