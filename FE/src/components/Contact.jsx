import { Avatar, Button, Center, Container, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useContactStore, useSelectedContactStore } from "../state/store";

export function Contact(props) {
    let { roomState, setRoomState} = useContactStore()
    let { setSelectedContactNameState, setSelectedContactTagState, setDisplayProfilePictureState, setSelectedContactProfilePictureState, setDisplayMessageBarState } = useSelectedContactStore()

    function onContactButtonClick(state) {
        // console.log(state.tag)

        setSelectedContactNameState(state.username)
        setSelectedContactTagState(state.tag)
        setDisplayProfilePictureState('true')
        setDisplayMessageBarState('true')
        setSelectedContactProfilePictureState(state.profilePicture)
        setRoomState(state.room)
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
                    <GridItem colSpan={2} color="white" textAlign="start" fontSize="xs">{props.lastMessage}</GridItem>
                </Grid>
            </Button>
        </Container>
        </>
    )
}