import { useSettingMenuStore } from "../state/store"
import { ChangeEmail } from "./ChangeEmail"
import { ChangePassword } from "./ChangePassword"
import { ChangeProfilePicture } from "./ChangeProfilePicture"

function SettingExtension() {
    const { settingMenuState } = useSettingMenuStore()
    console.log(`current sidebar state: ${settingMenuState}`)

    return(
        <Box bg="#1E293B" width="24rem" overflow="auto" borderRight="1px" borderColor="#0F172A">
            {settingMenuState === 'changeEmail' && <ChangeEmail/>}
            {settingMenuState === 'changePassword' && <ChangePassword/>}
            {settingMenuState === 'changeProfile' && <ChangeProfilePicture/>}
        </Box>
    )
}

export { SettingExtension }