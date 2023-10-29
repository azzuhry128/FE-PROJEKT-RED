import { AddIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";

export function PendingContactComponent(props) {
    return (
      <>
      <Box padding="2">
        <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row" padding="4" bg="#93C5FD" width="280px" height="56px" borderRadius="12px">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" justifyContent="center" alignItems="center" bg="#FFFFFF" borderRadius="100px" height="42px" width="42px" marginRight="4px">
                <Text fontWeight="medium">zry</Text>
                </Box>
                <Flex direction="column">
                <Text fontSize="sm" fontWeight="medium">{props.username}azzuhry128</Text>
                </Flex>
            </Box>
            <Flex flex={1} justifyContent="right" alignItems="center" gap={4}>
            <CheckIcon color={"green"}/>
            <CloseIcon color={"red"}/>
            </Flex>
        </Box>
      </Box>
      </>
    )
  }