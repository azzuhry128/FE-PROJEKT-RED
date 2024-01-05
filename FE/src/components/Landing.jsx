import "@fontsource-variable/montserrat"
import { useState, useEffect } from "react";
import { AbsoluteCenter, Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import LoadingProgress from "./miscellaneous/LoadingProgress";
import Aos from "aos";
import 'aos/dist/aos';
import { useNavigate } from "react-router-dom";
// import { navigateTo } from "../service/navigateTo"; impossible to use, invalid hook call

function Landing() {
  const [showLoadingProgress, setShowLoadingProgress] = useState(false);
  const navigate= useNavigate()

  function getStarted() {
    setShowLoadingProgress((prev) => !prev);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

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
        <SimpleGrid columns={2} spacing={10}>
          <Box display="flex" flexDirection="column">
            <Flex direction="column">
              <Text color="#FFFFFF" fontSize={64} fontWeight="medium" data-aos="fade-up" data-aos-delay='0'>Fast.</Text>
              <Text color="#FFFFFF" fontSize={64} fontWeight="medium" data-aos="fade-up" data-aos-delay='1000'>Reliable.</Text>
              <Flex>
                <Text color="#93C5FD" fontSize={64} fontWeight="medium" width="36" data-aos="fade-up" data-aos-delay='2000'>Free</Text>
                <Text color="#FFFFFF" fontSize={64} fontWeight="medium" data-aos="fade-up" data-aos-delay='2000'>of charge.</Text>
              </Flex>
            </Flex>

            <Box data-aos="fade-up" data-aos-delay='3000'>
              <Text color="#FFFFFF" marginY="39px" fontWeight="medium" data-aos="fade-up">The only app you need to receive calls and send messages.</Text>

              <Button onClick={getStarted} bg="#93C5FD" width="240px" borderTopLeftRadius={0} borderTopRightRadius={100} borderBottomRightRadius={100} borderBottomLeftRadius={96}>
                <Text color="black" fontSize={16} fontWeight="medium" >Get started !</Text>
              </Button>
            </Box>
          </Box>
          <Flex justifyContent='center' data-aos="fade-up" data-aos-delay='3000'>
            <Box boxSize='27vh' top={0}>
              <Image src="trashtalk.png" bg='white' borderRadius='3xl'></Image>
            </Box>
          </Flex>
        </SimpleGrid>
      </AbsoluteCenter>
    </>
  )
}

export{ Landing }