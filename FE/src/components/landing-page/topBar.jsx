import { AbsoluteCenter, Box, Button, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

export function TopBar() {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Text fontSize={36} fontWeight="bold" color={"#93C5FD"}>Messenger</Text>
        <Text fontSize={24} fontWeight="bold" color={"#93C5FD"}>Meet Our Team !</Text>
      </Box>
    </>
  )
}