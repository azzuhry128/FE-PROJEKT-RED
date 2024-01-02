import { create } from "zustand";
import { refinedAccount, refinedContact, refinedMessage, refinedUser } from "../data/fakeData";

const storedMessages = ''
const storedContacts = refinedContact
const sidebarDefault = "contacts"
const storedLastMessage = ['']
const storedRoom = ['']
const storedTags = ['']
const storedAccount = refinedAccount
// const storedUser = refinedUser
const storedSelectedContactTag = ['']
const storedSelectedContactName = ['']
const storedSelectedProfilePicture = ['']
const storedSettingMenuState = 'changeEmail'

const storedNotifications = ['']

// const storedAccountId = localStorage.getItem('account_id')
// const storedProfileName = localStorage.getItem('profile_name')
// const storedUsername = localStorage.getItem('username')
// const storedEmail = localStorage.getItem('email')
// const storedbio = localStorage.getItem('bio')
// const storedImage = localStorage.getItem('image')


const storedToken = localStorage.getItem('token')
const storedValidity = localStorage.getItem('validity')

const useAccountStore = create((set) => ({
    id: storedAccount.account_id,
    username: storedAccount.username,
}))

const useUserStore = create((set) => ({
    username: '',
    email: '',
    bio: '',
    setUserStoreUsername: (username) => set({
        username: username
    }),
    setUserStoreEmail: (Email) => set({
        email: Email
    }),
    setUserStoreBio: (Bio) => set({
        bio: Bio
    }),
}))

const useLoginState = create((set) => ({
    loginTokenState: '',
    loginValidState: '',
    setLoginTokenState: (token) => set({
        loginTokenState: token
    }),
    setLoginValidState: (valid) => set({
        loginValidState: valid
    }),
}))

const useTokenStore = create((set) => ({
    tokenState: storedToken,
    validState: storedValidity,
    setTokenState: (token) => set({
        tokenState: token
    }),
    setValidState: (valid) => set({
        validState: valid
    }),
}))

const useMessageStore = create((set) => ({
    messageState: storedMessages,
    setMessageState: (message) => set((state) => ({
        messageState: [...state.messageState, message]
    }))
}))

// const useSidebarStore = create((set) => ({
//     sidebarState: sidebarDefault,
//     setSidebarState: (state) => set({sidebarState: state}) 
// }))

const useNotificationStore = create((set) => ({
    notificationState: storedNotifications,
    setNotificationState: (notification) => set((state) => ({
        notificationState: [...state.notificationState, notification]
    }))
}))

const useSidebarStore = create((set) => ({
    sidebarState: sidebarDefault,
    setSidebarState: (sidebarState) => set(() => ({sidebarState: sidebarState}))
}))

const useContactStore = create((set) => ({
    contactState: storedContacts,
    tagState: storedTags,
    lastMessageState: storedLastMessage,
    roomState: storedRoom,
    setContactState: (state) => set({contactState: state}),
    setLastMessageState: (state) => set({lastMessageState: state}),
    setRoomState: (state) => set({roomState: state})
}))

const useSelectedContactStore = create((set) => ({
    selectedContactIDState      : '',
    selectedContactNameState     : storedSelectedContactName, 
    selectedContactTagState      : storedSelectedContactTag,
    selectedContactProfilePictureState : storedSelectedProfilePicture,
    selectedContactRoomState : '',
    displayProfilePictureState : 0, 
    displayMessageBarState: 0,
    setSelectedContactNameState : (state) => set({selectedContactNameState: state}),
    setSelectedContactTagState : (state) => set({selectedContactTagState: state}),
    setSelectedContactProfilePictureState : (state) => set({selectedContactProfilePictureState: state}),
    setDisplayProfilePictureState : (state) => set({displayProfilePictureState: state}),
    setDisplayMessageBarState    : (state) => set({displayMessageBarState: state}),
    setSelectedContactIDState    : (state) => set({selectedContactIDState: state}),
    setSelecterContactRoomState    : (state) => set({selectedContactRoomState: state})

}))

const useSettingMenuStore = create((set) => ({
    settingMenuState : storedSettingMenuState,
    setSettingMenuState : (sidebarState) => set(() => ({settingMenuState: sidebarState}))
}))

const registerPhaseStore = create((set) => ({
    usernameState : '',
    emailState : '',
    passwordState : '',
    imageState : '',
    setUsernameState : (usernameState) => set(() => ({usernameState: usernameState})),
    setEmailState : (emailState) => set(() => ({emailState: emailState})),
    setPasswordState : (passwordState) => set(() => ({passwordState: passwordState})),
    setImageState : (imageState) => set(() => ({imageState: imageState})),

}))

const renderMessageCommand = create((set) => ({
    renderMessageState: false,
    setRenderMessageState: (state) => set({renderMessageState: state})
}))

export { useMessageStore, useSidebarStore, useLoginState, useAccountStore, useContactStore, useUserStore, useSelectedContactStore, useSettingMenuStore, registerPhaseStore, useTokenStore, useNotificationStore, renderMessageCommand }