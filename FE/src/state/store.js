import { create } from "zustand";

const storedMessages = []
const sidebarDefault = ""

const useChatStore = create((set) => ({
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

export { useChatStore, useSidebarStore }