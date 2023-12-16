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
    tokenState: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJhMzk5ODFlNy1lY2JlLTQwMzktYTI1OC0xZTA1NmFmZWM2OTIiLCJpYXQiOjE3MDI1NTg1MzUsImV4cCI6MTcwMjY0NDkzNX0.-wgsmaBPiHcqsiZwMBJSsjyg1UpyLFyepV8AnYB5CkE',
    validState: '2023-12-15T12:55:35.332Z',
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