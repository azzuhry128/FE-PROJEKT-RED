import { Box } from "@chakra-ui/react"
import { useSettingMenuStore } from "../state/store"
import { ChangeEmail } from "./ChangeEmail"
import { ChangePassword } from "./ChangePassword"
import { ChangeProfilePicture } from "./ChangeProfilePicture"
import { AddFriend } from "./AddFriend"

function SettingExtension() {
    const { settingMenuState } = useSettingMenuStore()
    console.log(`current sidebar state: ${settingMenuState}`)

    return(
        <Box width="full" overflow="auto">
            {settingMenuState === 'addFriend' && <AddFriend/>}
            {settingMenuState === 'changeEmail' && <ChangeEmail/>}
            {settingMenuState === 'changePassword' && <ChangePassword/>}
            {settingMenuState === 'changeProfile' && <ChangeProfilePicture/>}
        </Box>
    )
}

export { SettingExtension }