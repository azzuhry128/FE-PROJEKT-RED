import { Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

const AddFriendModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    function onButtonClick() {
        console.log("adding friend...")
    }

    return (
        <>
        <Modal>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Add a friend</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormLabel>Add a friend</FormLabel>
                    <Input placeholder="example#0000"/>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue">
                        add as friend
                    </Button>
                    <Button onClick="">cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export { AddFriendModal }