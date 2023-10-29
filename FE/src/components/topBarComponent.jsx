import {Flex,Box,Spacer,Text,Container,Avatar, HStack,VStack,Center,Button,Input} from "@chakra-ui/react"
import { color } from "framer-motion"



export default function TopBarComponentF() {

  return (
    <Flex as = "main" >
      <Spacer/>
      <Box w="500px" h="930px" bg="#1E293B" >
      <VStack>
      <Text color="white" fontSize="32px"   marginLeft="-220px" marginTop="30px" as="b" >Profile</Text>
      <Avatar src="" rounded="full"  marginY="50px" width="120px" height="120px"></Avatar>
      <Text color="#93C5FD" marginRight="350px" marginTop="10px" >Name :</Text>
      <Input h="40px" w="400px" textColor="white" bg="#1E293B" borderColor="#93C5FD" borderRadius="10px" ></Input>
      <Text color="#93C5FD" marginRight="350px" marginTop="10px" >About :</Text>
      <Input h="40px" w="400px" textColor="white" bg="#1E293B" borderColor="#93C5FD" borderRadius="10px" ></Input>
      <Text color="#7C7C7D" marginRight="170px" >This name is visible to your contacts</Text>
      </VStack>
      </Box>
      <Box w="1200px" h="75" bg="#1E293B" boxShadow="base"  as="mainbox">
      <HStack spacing="5px">
      <Avatar src="" marginLeft="10px" width="55px" height="55px"/>
        <Box marginLeft="5px">
        <Text color="white" fontSize="15px"  >Nama </Text>
        <Text color="#94A3B8" fontSize="12px" >username</Text>
        </Box>
        </HStack>
        <Box w="1200px" h="750px" bg="#0F172A"  ></Box>
        <Box w="1200px" h="106px" bg="#1E293B" >
          <Center>
          <Input placeholder="Write a Message...."  _placeholder={{color : "#93C5FD"}}   w="1050px" h="40px" bg="#0F172A" borderRadius="10px" border="none" textColor="white" marginTop="20px"></Input>
          <Button w="50px" h="50px" bg="#93C5FD" color="#93C5FD" marginLeft="30px" marginTop="20px" borderRadius="12px">  
          </Button>
          </Center>
          
        </Box>
      </Box>
    </Flex> 

  )
}


