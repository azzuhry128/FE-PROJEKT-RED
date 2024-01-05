import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

function InputModal(props) {
    return (
        <>
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{props.header}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <Input variant="flushed" placeholder={props.placeholder} />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                confirm
                </Button>
                <Button onClick={props.onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export { InputModal }