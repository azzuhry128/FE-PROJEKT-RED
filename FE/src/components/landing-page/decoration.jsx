import { AbsoluteCenter, Box, Button, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

export function Decoration() {
  return (


    <Box display="flex" height="364px" width="432px" justifyContent="center">
      <Grid
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={8}
      >
        <GridItem rowSpan={2} colSpan={1} bg='#93C5FD' width="180px">

        </GridItem>
        <GridItem rowSpan={1} colspan={1} height="28px">
          <Text color="#FFFFFF" bg="#93C5FD" mb={4} py={1} px={2} borderRadius={4} width="max-content" textColor="black" fontWeight="medium">lets go to a cafe</Text>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} bg='#93C5FD' width="180px">

        </GridItem>
        <GridItem rowSpan={1} colspan={1} height="28px">
          <Text color="#FFFFFF" bg="#93C5FD" mb={4} py={1} px={2} borderRadius={4} width="max-content" textColor="black" fontWeight="medium">sure, when ?</Text>
        </GridItem>
      </Grid>

    </Box>
  )
}