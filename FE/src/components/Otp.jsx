import { ArrowBackIcon } from '@chakra-ui/icons'

import {
    Box,
    Flex,
    Image,
    Center,
    Input,
    Button,
    Text,
    VStack,
    HStack
    }  from "@chakra-ui/react";

function Otp() {

    return (
    <>
            

            <Flex>
                <Box id="boxkiri" backgroundColor="#93C5FD" width="50%" height="56.9rem">
                    <Center marginTop="15rem">
                        <Image src="registerImage.png" ></Image>
                    </Center>
                </Box>

                <Box id="boxkanan" width="50%" height="56.9rem">
                    <HStack marginLeft="1rem">
                        <ArrowBackIcon w="3rem" h="3rem" color="white"/>
                        <Text color="white" fontSize="1.5rem"  >Back</Text>
                    </HStack>
                    <Center marginTop="15rem">
                        <VStack>
                            <Text as="b" textColor="#93C5FD" fontSize="1.5rem" textAlign="center" margin="0.5rem"  >Please Check Your Email</Text>
                            <Image src="trashtalkBlur.png" zIndex={-1} position="absolute" marginTop="1rem" ></Image>
                            <Input id="otp" variant="outline" width="20rem" height="3rem" placeholder="Otp Code" color="white" margin="0.5rem" />
                            <Button  bg="#93C5FD" width="20rem" height="3rem">Submit</Button>
                            <Flex alignItems="center" justifyContent="center">
                                <Text textColor="white">didnt receive code ? </Text>
                                <Button variant="link" color="#93C5FD" ml={2}>Resend</Button>
                            </Flex>
                        </VStack>
                    </Center>
                </Box>
            </Flex>
            </>
            );
            }
            export default Otp;
