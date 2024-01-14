import { create } from "zustand";

// const useLoggedInUserStore = create((set) => ({
//     id: '',
//     username: '',
//     tag: '',
//     email: '',
//     bio: '',
//     setUserStoreUsername: (username) => set({
//         username: username
//     }),
//     setUserStoreEmail: (Email) => set({
//         email: Email
//     }),
//     setUserStoreBio: (Bio) => set({
//         bio: Bio
//     }),
// }))

// const useMessageStore = create((set) => ({
//     messageState: [],
//     setMessageState: (message) => set((state) => ({
//         messageState: [...state.messageState, message]
//     }))
// }))

// const useRequestStore = create((set) => ({
//     notificationState: [],
//     setNotificationState: (notification) => set((state) => ({
//         notificationState: [...state.notificationState, notification]
//     }))
// }))

const useSelectedContactStore = create((set) => ({
    id: '',
    name: '',
    image: '',
    setID: () => set ((state) => ({id: state.id})),
    setName: () => set ((state) => ({name: state.name})),
    setImage: () => set ((state) => ({image: state.image}))
}))


export { 
    useSelectedContactStore, 
}