import {
    Container,
    Heading,
    Input,
    Button,
    Center,
    Box,
    Text,
    Card,
    Link,
} from "@chakra-ui/react"

export default function Register() {
    return (
        <Center>
            <Box>
                <Container
                    mt={
                        175
                    }
                >
                    <Heading
                        style={{
                            width: "100%",
                            textAlign:
                                "center",
                            color: "#93C5FD",
                            fontSize: 30,
                            fontFamily:
                                "Montserrat",
                        }}
                    >
                        Create
                        Account
                    </Heading>
                    <Card
                        fontFamily="Montserrat"
                        shadow={
                            "none"
                        }
                        bg="transparent"
                        maxW={
                            360
                        }
                    >
                        <Input
                            mt={
                                20
                            }
                            h={
                                50
                            }
                            backgroundColor={
                                "white"
                            }
                            placeholder="Name"
                        />
                        <Input
                            mt={
                                8
                            }
                            h={
                                50
                            }
                            backgroundColor={
                                "white"
                            }
                            placeholder="Email"
                        />
                        <Input
                            mt={
                                8
                            }
                            h={
                                50
                            }
                            backgroundColor={
                                "white"
                            }
                            placeholder="Password"
                        />
                        <Center>
                            <Button
                                mt={
                                    10
                                }
                                h={
                                    50
                                }
                                w={
                                    1000
                                }
                                bgColor="#93C5FD"
                            >
                                Sign
                                Up
                            </Button>
                        </Center>
                        <Text
                            mt={
                                10
                            }
                            textAlign="center"
                            fontSize="lg"
                            color="#FFFFFF"
                            fontWeight="bold"
                        >
                            already
                            have
                            account
                            ?
                            <Button
                                as="a"
                                href="#"
                                variant={
                                    Link
                                }
                                color="#93C5FD"
                                fontFamily="Montserrat"
                            >
                                Sign
                                In
                            </Button>
                        </Text>
                    </Card>
                </Container>
            </Box>
        </Center>
    )
}