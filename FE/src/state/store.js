import { create } from "zustand";

const storedMessages = []
const sidebarDefault = ""


const useAccountStore = create((set) => ({
    id: '',
    username: '',
    email: '',
    bio: '',
}))

const useLoginState = create((set) => ({
    emailState: '',
    passwordState: '',
    setEmailState: (email) => set({
        emailState: email
    }),
    setEmailState: (password) => set({
        passwordState: password
    }),
}))

const useMessageStore = create((set) => ({
    messageState: storedMessages,
    setMessageState: (message) => set((state) => ({
        messages: [...state.messages, message]
    }))
}))

const useSidebarStore = create((set) => ({
    sidebarState: sidebarDefault,
    setSidebarState: (state) => set({
        sidebarState: state
    }) 
}))

export { useMessageStore, useSidebarStore, useLoginState, useAccountStore }