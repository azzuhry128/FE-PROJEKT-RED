import {Flex,Box,Spacer,Text,Container,Avatar, HStack,VStack,Center,Button,Input, FormHelperText, FormControl, InputGroup} from "@chakra-ui/react"

export function Profile() {
    function saveProfileChanges() {
        console.log("profile is saved")
    }
    return(
    <Box display="flex" flexDirection="column" padding="1rem">
        <Avatar src="" margin="2rem" width="128px" height="128px" alignSelf="center"/>
            <FormControl>
                <Box display="flex" flexDirection="column" gap="4">
                    <Flex direction="column">
                        <FormHelperText color="white">name</FormHelperText>
                        <Input placeholder="Azzuhry" _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white" />
                    </Flex>

                    <Flex direction="column">            
                        <FormHelperText color="white">about</FormHelperText>
                        <Input placeholder="Intermediate developer" _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white"/>
                    </Flex>

                    <Flex direction="column">
                        <FormHelperText color="white">birthdate</FormHelperText>
                        <Input type="date" placeholder="select date" _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white"/>
                    </Flex>

                </Box>
            </FormControl>
        <Button onClick={saveProfileChanges} colorScheme='blue' width="max-content" marginTop="2rem">Save changes</Button>
    </Box>
    )
}