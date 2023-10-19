import { AbsoluteCenter, Box, Button, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

export function Quotes() {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Flex direction="column">
          <Text color="#FFFFFF" fontSize={64} fontWeight="medium">Fast.</Text>
          <Text color="#FFFFFF" fontSize={64} fontWeight="medium">Reliable.</Text>
          <Flex>
            <Text color="#93C5FD" fontSize={64} fontWeight="medium" width="36">Free</Text>
            <Text color="#FFFFFF" fontSize={64} fontWeight="medium">of charge.</Text>
          </Flex>
        </Flex>

        <Text color="#FFFFFF" marginY="39px" fontWeight="medium">The only app you need to receive calls and send messages.</Text>

        <Button bg="#93C5FD" width="240px" borderTopLeftRadius={0} borderTopRightRadius={100} borderBottomRightRadius={100} borderBottomLeftRadius={96}>
          <Text color="black" fontSize={16} fontWeight="medium">Get started !</Text>
        </Button>
      </Box >
    </>
  )
}