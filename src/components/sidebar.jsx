import profile from "../assets/profile.svg"
import logo from "../assets/logo.svg"
import chatbutton from "../assets/chatButton.svg"
import contactBtn from "../assets/contactButton.svg"
import telpBtn from "../assets/telephoneButton.svg"
import setBtn from "../assets/settingsButton.svg"

import {
    Box,
    Flex,
    Image,
    VStack,
    Spacer,
    Switch,
    Divider,
    IconButton,
} from "@chakra-ui/react"

export default function Sidebar() {
    return (
        <Flex align="left">
            <Box
                w="70px"
                h="100vh"
                p={
                    2
                }
                color="green"
            >
                <Box
                    position="relative"
                    h="100px"
                >
                    <VStack>
                        <Spacer />
                        <Image
                            boxSize="40px"
                            src={
                                logo
                            }
                            alt="Profile Picture"
                        />
                        {
                            <Spacer />
                        }
                        {/* Icon Button */}
                        {/* <IconButton
                            bgColor="#0F172A"
                            _hover={{
                                backgroundColor:
                                    "#93C5FD",
                            }}
                            aria-label="Search database"
                            fontSize="60px"
                            icon={
                                <contactBtn />
                            }
                            text
                        /> */}
                        {/* Icon Button */}
                        <Image
                            boxSize="40px"
                            src={
                                chatbutton
                            }
                            alt="Profile Picture"
                        />
                        <Spacer />
                        <Image
                            borderRadius="full"
                            boxSize="20px"
                            src={
                                contactBtn
                            }
                            alt="Profile Picture"
                        />
                        <Spacer />
                        <Spacer />
                        <Image
                            borderRadius="full"
                            boxSize="20px"
                            src={
                                telpBtn
                            }
                            alt="Profile Picture"
                        />
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <Image
                            borderRadius="full"
                            boxSize="20px"
                            src={
                                setBtn
                            }
                            alt="Profile Picture"
                        />
                        <Spacer />
                        <Switch
                            mt={
                                80
                            }
                            size="md"
                            mb={
                                0.3
                            }
                        />
                        <Spacer />
                        <Image
                            borderRadius="full"
                            boxSize="35px"
                            src={
                                profile
                            }
                            alt="Profile Picture"
                        />
                    </VStack>
                </Box>
            </Box>
        </Flex>
    )
}
