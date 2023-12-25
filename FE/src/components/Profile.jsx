import {Flex,Box,Spacer,Text,Container,Avatar, HStack,VStack,Center,Button,Input, FormHelperText, FormControl, InputGroup, Textarea} from "@chakra-ui/react"
import { useUserStore } from "../state/store"

export function Profile() {
    const { id, username, email, bio } = useUserStore()
    function saveProfileChanges() {
        console.log("profile is saved")
    }
    return(
    <Box display="flex" flexDirection="column" padding="1rem">
        <Avatar src="" margin="2rem" width="128px" height="128px" alignSelf="center"/>
            <Flex direction="column">
                <Text color="white">id</Text>
                <Text _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white" fontSize="12px">
                    {id}
                </Text>
            </Flex>

            <FormControl>
                <Box display="flex" flexDirection="column" gap="4">
                    <Flex direction="column">
                        <FormHelperText color="white">name</FormHelperText>
                        <Text _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white">
                            {username}
                        </Text>
                    </Flex>

                    <Flex direction="column">
                        <FormHelperText color="white">email</FormHelperText>
                        <Text _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white" fontSize="12px">
                            {email}
                        </Text>
                    </Flex>

                    <Flex direction="column">            
                        <FormHelperText color="white">about</FormHelperText>
                        <Textarea _placeholder={{ opacity: 1, color: 'white' }} borderColor="#93C5FD" color="white">
                            {bio}
                        </Textarea>
                    </Flex>
                </Box>
            </FormControl>
        <Button onClick={saveProfileChanges} colorScheme='blue' width="max-content" marginTop="2rem">Save changes</Button>
    </Box>
    )
}