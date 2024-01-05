import { Box, Button, Modal, ModalBody, ModalContent, Text,ModalFooter, ModalHeader,Avatar,AvatarBadge, ModalOverlay    , useDisclosure, HStack } from "@chakra-ui/react";

function ProfileModal({isOpen, onClose}){

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent position='absolute' left='0' margin='0.5rem' width='356px' height='max-content' alignSelf='start' containerProps={{ justifyContent: 'flex-end', paddingRight: '2rem' }}>
                    <ModalHeader></ModalHeader>
                    <ModalBody width='6rem'>
                        <HStack>
                            <Box>
                                <Avatar src='https://bit.ly/broken-link' size='lg'/>
                            </Box>
                            <Box marginLeft='0.5rem'>
                                <Text as='b' marginBottom='5rem' >Name</Text>
                                <Text>Email</Text>
                                <Text>Username</Text>
                            </Box>
                        </HStack>
                    </ModalBody>
                    <ModalFooter display="flex" gap={4}>
                    </ModalFooter>
                </ModalContent>
        </Modal>
    )
}

export default ProfileModal