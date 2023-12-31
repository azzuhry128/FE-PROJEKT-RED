import { AddIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"

function AddNewContactComponent() {
    return(
        <>
        <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row" width="" height="64px" padding="1rem" boxShadow='md' p='6'>
            <Text color="white" fontSize="2xl">Chats</Text>
            <Box>
                <box-icon type='solid' name='bell' color="white" size="sm" animation='tada-hover'></box-icon>
            </Box>
        </Box>
        </>
    )
}

export { AddNewContactComponent }