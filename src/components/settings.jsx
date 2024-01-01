import {
    Flex,
    Box,
    HStack,
    VStack,
    Image,
    Text,
    Center,
    Divider,
} from "@chakra-ui/react"
import Sidebar from "./sidebar.jsx"
import backButton from "../assets/back.svg"
import profile from "../assets/profile.svg"
import Notification from "../assets/notifIcon.svg"
import Privacy from "../assets/privacyIcon.svg"
import Security from "../assets/securityIcon.svg"
import Theme from "../assets/theme.svg"
import chtWallpaper from "../assets/wallpaperIcon.svg"
import RequestIcon from "../assets/requestIcon.svg"
import KeyboardShortcut from "../assets/hamburgerIcon.svg"
import Help from "../assets/helpIcon.svg"
import None from "../assets/none.svg"

export default function Settings() {
    return (
        <>
            <HStack
                color="#FFFFFF"
                spacing={
                    0
                }
                fontFamily="Montserrat"
            >
                <Box>
                    <Sidebar />
                </Box>
                <Box
                    bg="#1E293B"
                    w="380px"
                    h="100vh"
                    display="flex"
                    alignItems="Left"
                >
                    <VStack
                        spacing={
                            0
                        }
                        margin={
                            0
                        }
                        borderColor={
                            "white"
                        }
                        display="
                                flex"
                    >
                        <Box>
                            <Box
                                w="380px"
                                h="70px"
                                // bg="#93C5FD"
                                display="flex"
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                <Flex>
                                    <Center>
                                        <Image
                                            marginLeft={
                                                5
                                            }
                                            src={
                                                backButton
                                            }
                                            w="20px"
                                        />
                                        <Text
                                            marginLeft={
                                                13
                                            }
                                        >
                                            Settings
                                        </Text>
                                    </Center>
                                </Flex>
                            </Box>
                            <Box
                                w="380px"
                                h="67px"
                                // bg="#93C5FD"
                                display="Flex"
                            >
                                <Flex>
                                    <Center>
                                        <Image
                                            borderRadius="full"
                                            boxSize="70px"
                                            src={
                                                profile
                                            }
                                            alt="Profile Picture"
                                            ml={
                                                6
                                            }
                                        />
                                    </Center>
                                    <VStack
                                        align="left"
                                        spacing="0px"
                                        justify="center"
                                        marginLeft="7"
                                        fontSize="14"
                                    >
                                        <Text fontWeight="bold">
                                            Naufal
                                            Hady
                                        </Text>
                                        <Text fontSize="11px">
                                            Sedang
                                            Tidur
                                        </Text>
                                    </VStack>
                                </Flex>
                            </Box>
                        </Box>
                        <Box width="325px">
                            <Box
                                w="380px"
                                h="65px"
                                // bg="#93C5FD"
                                display="flex"
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <Image
                                        src={
                                            Notification
                                        }
                                        w="20px"
                                    />
                                    <Text
                                        marginLeft="2"
                                        fontWeight="bold"
                                        marginTop="1"
                                        fontSize="13"
                                    >
                                        Notification
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider />
                            <Box
                                w="380px"
                                h="65px"
                                // bg="#93C5FD"
                                display="flex"
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <Image
                                        src={
                                            Privacy
                                        }
                                        w="20px"
                                    />
                                    <Text
                                        marginLeft="2"
                                        fontWeight="bold"
                                        marginTop="1"
                                        fontSize="13"
                                    >
                                        Privacy
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider />
                            <Box
                                w="380px"
                                h="65px"
                                // bg="#93C5FD"
                                display="flex"
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <Image
                                        src={
                                            Security
                                        }
                                        w="20px"
                                    />
                                    <Text
                                        marginLeft="2"
                                        fontWeight="bold"
                                        marginTop="1"
                                        fontSize="13"
                                    >
                                        Security
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider />
                            <Box
                                w="380px"
                                h="65px"
                                // bg="#93C5FD"
                                display="flex"
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <Image
                                        src={
                                            Theme
                                        }
                                        w="20px"
                                    />
                                    <Text
                                        marginLeft="2"
                                        fontWeight="bold"
                                        marginTop="1"
                                        fontSize="13"
                                    >
                                        Theme
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider />
                            <Box
                                w="380px"
                                h="65px"
                                // bg="#93C5FD"
                                display="flex"
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <Image
                                        src={
                                            chtWallpaper
                                        }
                                        w="20px"
                                    />
                                    <Text
                                        marginLeft="2"
                                        fontWeight="bold"
                                        marginTop="1"
                                        fontSize="13"
                                    >
                                        Chat
                                        Wallpaper
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider />
                            <Box
                                w="380px"
                                h="65px"
                                // bg="#93C5FD"
                                display="flex"
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <Image
                                        src={
                                            RequestIcon
                                        }
                                        w="20px"
                                    />
                                    <Text
                                        marginLeft="2"
                                        fontWeight="bold"
                                        marginTop="1"
                                        fontSize="13"
                                    >
                                        Request
                                        Account
                                        Info
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider />
                            <Box
                                w="380px"
                                h="65px"
                                // bg="#93C5FD"
                                display="Flex"
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <Image
                                        src={
                                            KeyboardShortcut
                                        }
                                        w="20px"
                                    />
                                    <Text
                                        marginLeft="2"
                                        fontWeight="bold"
                                        marginTop="1"
                                        fontSize="13"
                                    >
                                        Keyboard
                                        Shortcut
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider />
                            <Box
                                w="380px"
                                h="65px"
                                // bg="#93C5FD"
                                display="flex"
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <Image
                                        src={
                                            Help
                                        }
                                        w="20px"
                                    />
                                    <Text
                                        marginLeft="2"
                                        fontWeight="bold"
                                        marginTop="1"
                                        fontSize="13"
                                    >
                                        Help
                                    </Text>
                                </Flex>
                            </Box>
                        </Box>
                    </VStack>
                </Box>
                <Image
                    marginLeft="320px"
                    src={
                        None
                    }
                    w="250px"
                />
            </HStack>
        </>
    )
}
