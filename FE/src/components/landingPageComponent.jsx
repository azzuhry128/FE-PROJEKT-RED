import { useState, useEffect } from "react";
import { AbsoluteCenter, Box, Button, Center, Flex, Grid, GridItem, Text, Progress } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
import { useNavigate } from "react-router-dom";
import LoadingProgress from "./LoadingProgress";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export function LandingPageComponent() {
  const navigate = useNavigate()

  const [showLoadingProgress, setShowLoadingProgress] = useState(false);

  function handleGetStartedClick() {
    setShowLoadingProgress((prev) => !prev);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);

  return (
    <>
      {
        showLoadingProgress ?
          (
            <LoadingProgress show={showLoadingProgress} />
          ) : (
            <></>
          )
      }
      <Box display="flex" alignItems="center" justifyContent="space-between" padding={"24px"} paddingTop={"21px"}>
        <Text variant="link" fontSize={20} fontWeight="bold" color={"#93C5FD"}>TrashTalk.io</Text>
      </Box>

      <AbsoluteCenter mx="auto" my="auto" width="960px" display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Flex direction="column">
            <Text color="#FFFFFF" fontSize={64} fontWeight="medium" data-aos="fade-up">Fast.</Text>
            <Text color="#FFFFFF" fontSize={64} fontWeight="medium" data-aos="fade-up">Reliable.</Text>
            <Flex>
              <Text color="#93C5FD" fontSize={64} fontWeight="medium" width="36" data-aos="fade-up">Free</Text>
              <Text color="#FFFFFF" fontSize={64} fontWeight="medium" data-aos="fade-up">of charge.</Text>
            </Flex>
          </Flex>

          <div data-aos="fade-up">
            <Text color="#FFFFFF" marginY="39px" fontWeight="medium">The only app you need to receive calls and send messages.</Text>

            <Button onClick={handleGetStartedClick} bg="#93C5FD" width="240px" borderTopLeftRadius={0} borderTopRightRadius={100} borderBottomRightRadius={100} borderBottomLeftRadius={96}>
              <Text color="black" fontSize={16} fontWeight="medium">Get started !</Text>
            </Button>
          </div>
        </Box >

      </AbsoluteCenter>
    </>
  )
}