import { Box, Flex, Text } from "@chakra-ui/react";
import 'boxicons'

export function Sidebar() {
    return(
        <Flex bg="#0F172A" flexDirection="column" justifyContent="center" gap="6" padding="16px">
            <Box padding="0.5rem">
                <box-icon type="solid" name="phone" color="white"></box-icon>
            </Box>

            <Box padding="0.5rem">
                <box-icon type='solid' name='bell' color="white"></box-icon>
            </Box>

            <Box padding="0.5rem">
                <box-icon type='solid' name='user-account' color="white"></box-icon>
            </Box>
        </Flex>
    )
}