import { Box, Text } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { Contacts } from "./Contacts";
import { useSidebarStore } from "../state/store";
import { Notifications } from "./Notifications";
import { useEffect } from "react";

export function Extension() {
    const { sidebarState } = useSidebarStore()
    console.log(`current sidebar state: ${sidebarState}`)
    return(
        <Box bg="#1E293B" width="24rem">
            {sidebarState === 'contacts' && <Contacts/>}
            {sidebarState === 'notifications' && <Notifications/>}
            {sidebarState === 'profile' && <Profile/>}
        </Box>
    )
}