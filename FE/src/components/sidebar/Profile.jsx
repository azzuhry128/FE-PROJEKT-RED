import {Flex,Box,Spacer,Text,Container,Avatar, HStack,VStack,Center,Button,Input, FormHelperText, FormControl, InputGroup, Textarea} from "@chakra-ui/react"

function Profile() {
    console.log("rendering profile")
    
    return(
    <Box display="flex" bg="#1E293B" flexDirection="column" padding="1rem" width='356px'>
        <Avatar src="" margin="2rem" width="128px" height="128px" alignSelf="center"/>

            <FormControl>
                <Box display="flex" flexDirection="column" gap="4">
                    <Flex direction="column">
                        <FormHelperText color="white" textAlign="center" fontWeight="medium" fontSize="xl">username</FormHelperText>
                        <Text _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white" textAlign="center">
                            {/* {username} */}
                        </Text>
                    </Flex>

                    <Flex direction="column">
                        <FormHelperText color="white" textAlign="center" fontWeight="medium" fontSize="xl">email</FormHelperText>
                        <Text _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white" fontSize="12px" textAlign="center" fontWeight="medium">
                            {/* {email} */}
                        </Text>
                    </Flex>

                    <Flex direction="column">            
                        <FormHelperText color="white">about</FormHelperText>
                        <Textarea _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white">
                            {/* {bio} */}
                        </Textarea>
                    </Flex>
                </Box>
            </FormControl>
    </Box>
    )
}

export default Profile