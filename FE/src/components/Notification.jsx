function Notification(props) {
    return(
        <Container p={2}>
            <Button h="64px" display="flex" justifyContent="center" variant="ghost" _hover={{bg: "#93C5FD"}} height="64px" w="100%" p={0} m={0}>
                <Grid w="full" templateRows='repeat(2 , 1fr)' templateColumns='repeat(3, 1fr)'>
                    <GridItem display="flex" justifyContent="center" alignContent="center" alignItems="center" rowSpan={2} colSpan={1}>
                        <Avatar>{props.profilePicture}</Avatar>
                    </GridItem>
                    <GridItem colSpan={2} color="white" textAlign="start">{props.username}</GridItem>
                    <GridItem colSpan={2} color="white" textAlign="start" fontSize="xs">{props.tag}</GridItem>
                </Grid>
            </Button>
        </Container>
    )
}

export { Notification }