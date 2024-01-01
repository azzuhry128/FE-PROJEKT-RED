import { AbsoluteCenter, Box, Button, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
import { useNavigate } from "react-router-dom";

export function LandingPageComponent() {
  const navigate = useNavigate()

  function handleGetStartedClick() {
    navigate('/login')
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

              <Button onClick={handleGetStartedClick} bg="#93C5FD" width="240px" borderTopLeftRadius={0} borderTopRightRadius={100} borderBottomRightRadius={100} borderBottomLeftRadius={96}>
                <Text color="black" fontSize={16} fontWeight="medium">Get started !</Text>
              </Button>
            </Box >

          </AbsoluteCenter>
        </>
  )
}