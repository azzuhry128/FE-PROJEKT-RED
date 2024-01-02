import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
import { useSidebarStore } from "../state/store";

function AddNewContactComponent() {
    // const sidebarState = useSidebarStore((state) => state.setSidebarState)

    return(
        <>
        <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row" width="" height="64px" padding="1rem" boxShadow='md' p='6'>
            <Text variant='link' color="white" fontSize="2xl">Chats</Text>
        </Box>
        </>
    )
}

export { AddNewContactComponent }