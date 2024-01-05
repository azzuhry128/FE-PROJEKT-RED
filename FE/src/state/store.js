import { create } from "zustand";

const useLoggedInUserStore = create((set) => ({
    id: '',
    username: '',
    tag: '',
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

const useMessageStore = create((set) => ({
    messageState: [],
    setMessageState: (message) => set((state) => ({
        messageState: [...state.messageState, message]
    }))
}))

const useRequestStore = create((set) => ({
    notificationState: [],
    setNotificationState: (notification) => set((state) => ({
        notificationState: [...state.notificationState, notification]
    }))
}))

const useContactStore = create((set) => ({
    contactIDState      : '',
    contactNameState     : '', 
    contactTagState      : '',
    contactRoomState : '',
    contactImageState : 0, 
    setContactIDState    : (state) => set({contactIDState: state}),
    setContactNameState : (state) => set({contactNameState: state}),
    setContactTagState : (state) => set({contactTagState: state}),
    setContactRoomState    : (state) => set({selectedContactRoomState: state}),
    setContactImageState : (state) => set({contactImageState: state}),
}))

const useExtensionStore = create((set) => ({
    extension: 'none',
    setExtension: (state) => set({extension: state})
}))

export { 
    useMessageStore, 
    useLoggedInUserStore, 
    useContactStore, 
    useRequestStore,
    useExtensionStore
}