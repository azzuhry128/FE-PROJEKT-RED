import { Avatar, Button, Center, Container, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useContactStore, useMessageStore, useSelectedContactStore } from "../state/store";
import io from 'socket.io-client'
import axios from 'axios'

export function Contact(props) {
    const socket = io(`http://localhost:3000/`);
    let { roomState, setRoomState} = useContactStore()
    const { setMessageState } = useMessageStore()
    let { setSelectedContactNameState, setSelectedContactTagState, setDisplayProfilePictureState, setSelectedContactProfilePictureState, setDisplayMessageBarState } = useSelectedContactStore()

    function onContactButtonClick(state) {
        // console.log(state.tag)
        socketing(props.room)

        setSelectedContactNameState(state.username)
        setSelectedContactTagState(state.tag)
        setDisplayProfilePictureState('true')
        setDisplayMessageBarState('true')
        setSelectedContactProfilePictureState(state.profilePicture)
        setRoomState(state.room)
    }

    const socketing = async (room) => {
        const messages = await axios.get(`http://localhost:3000/api/message/${room}`);
        socket.emit("join", room); // joining a chat with another user
        setMessageState(messages.data); // fetching data from server
        console.log(messages.data)
     }

    return(
        <>
        <Container p={2}>
            <Button onClick={() => onContactButtonClick(props)} h="64px" display="flex" justifyContent="center" variant="ghost" _hover={{bg: "#93C5FD"}} height="64px" w="100%" p={0} m={0}>
                <Grid w="full" templateRows='repeat(2 , 1fr)' templateColumns='repeat(3, 1fr)'>
                    <GridItem display="flex" justifyContent="center" alignContent="center" alignItems="center" rowSpan={2} colSpan={1}>
                        <Avatar>{props.profilePicture}</Avatar>
                    </GridItem>
                    <GridItem colSpan={2} color="white" textAlign="start">{props.username}</GridItem>
                    <GridItem my="auto" colSpan={2} color="white" textAlign="start" fontSize="xs">#{props.tag}</GridItem>
                </Grid>
            </Button>
        </Container>
        </>
    )
}