import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"

function AddNewContactComponent(props) {
    return(
        <>
        <Box padding="2">
            <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row" padding="4" width="280px" height="56px" borderRadius="12px">
                <Text color="white" fontSize="2xl">Chats</Text>
                <Box display="flex" justifyContent="center" alignItems="center">
                    {/* <Box display="flex" justifyContent="center" alignItems="center" bg="#FFFFFF" borderRadius="100px" height="42px" width="42px" marginRight="4px">
                    <Text fontWeight="medium">zry</Text>
                    </Box>
                    <Flex direction="column">
                    <Text fontSize="sm" fontWeight="medium">{props.username}azzuhry128</Text>
                    </Flex> */}
                </Box>
            </Box>
        </Box>
        </>
    )
}

export { AddNewContactComponent }