import { AbsoluteCenter, Box, Button, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import "@fontsource-variable/montserrat"
import { TopBar } from "./topBar";
import { Quotes } from "./quotes";
import { Decoration } from "./decoration";

export function LandingPageComponent() {
  return (
    <>
      <TopBar />

      <AbsoluteCenter mx="auto" my="auto" width="960px" display="flex" flexDirection="row" justifyContent="space-between">
        <Quotes />
        <Decoration />
      </AbsoluteCenter>


    </>
  )
}