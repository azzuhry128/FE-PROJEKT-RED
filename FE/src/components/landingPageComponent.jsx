import { AbsoluteCenter, Box, Button, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"

export function LandingPageComponent(props) {
  function getStartedHandler() {
    props.onGetStartedClick();
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"}>
        <Text variant="link" fontSize={20} fontWeight="bold" color={"#93C5FD"}>TrashTalk.io</Text>
      </Box>

      <AbsoluteCenter mx="auto" my="auto" width="960px" display="flex" flexDirection="row" justifyContent="space-between">
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

          <Button onClick={getStartedHandler} bg="#93C5FD" width="240px" borderTopLeftRadius={0} borderTopRightRadius={100} borderBottomRightRadius={100} borderBottomLeftRadius={96}>
            <Text color="black" fontSize={16} fontWeight="medium">Get started !</Text>
          </Button>
        </Box >

        <Box display="flex" height="364px" width="432px" justifyContent="center">
          <Grid
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={8}
          >
            <GridItem rowSpan={2} colSpan={1} bg='#93C5FD' width="180px">

            </GridItem>
            <GridItem rowSpan={1} colspan={1} height="28px">
              <Text color="#FFFFFF" bg="#93C5FD" mb={4} py={1} px={2} borderRadius={4} width="max-content" textColor="black" fontWeight="medium">lets go to a cafe</Text>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} bg='#93C5FD' width="180px">

            </GridItem>
            <GridItem rowSpan={1} colspan={1} height="28px">
              <Text color="#FFFFFF" bg="#93C5FD" mb={4} py={1} px={2} borderRadius={4} width="max-content" textColor="black" fontWeight="medium">sure, when ?</Text>
            </GridItem>
          </Grid>

        </Box>
      </AbsoluteCenter>


    </>
  )
}