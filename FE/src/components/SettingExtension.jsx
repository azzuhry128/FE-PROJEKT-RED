import { Box } from "@chakra-ui/react"
import { useSettingMenuStore } from "../state/store"
import { ChangeEmail } from "./ChangeEmail"
import { ChangePassword } from "./ChangePassword"
import { ChangeProfilePicture } from "./ChangeProfilePicture"

function SettingExtension() {
    const { settingMenuState } = useSettingMenuStore()
    console.log(`current sidebar state: ${settingMenuState}`)

    return(
        <Box width="full" overflow="auto">
            {settingMenuState === 'changeEmail' && <ChangeEmail/>}
            {settingMenuState === 'changePassword' && <ChangePassword/>}
            {settingMenuState === 'changeProfile' && <ChangeProfilePicture/>}
        </Box>
    )
}

export { SettingExtension }