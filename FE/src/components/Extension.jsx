import { Box, Text } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { useSidebarStore } from "../state/store";
import { Notifications } from "./Notifications";
import { ContactsAdapter } from "../adapters/ContactsAdapter";

export function Extension() {
    const { sidebarState } = useSidebarStore()
    console.log(`current sidebar state: ${sidebarState}`)
    return(
        <Box bg="#1E293B" width="24rem" overflow="auto" borderRight="1px" borderColor="#0F172A">
            {sidebarState === 'contacts' && <ContactsAdapter/>}
            {sidebarState === 'notifications' && <Notifications/>}
            {sidebarState === 'profile' && <Profile/>}
        </Box>
    )
}