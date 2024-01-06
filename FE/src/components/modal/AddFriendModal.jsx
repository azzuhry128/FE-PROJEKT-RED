import { Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import axios from "axios"

const AddFriendModal = (props) => {
    return (
        <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.header}</ModalHeader>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={props.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export { AddFriendModal }