import { create } from "zustand";
import { fetchMessages } from "../api/storage";

const storedMessages = fetchMessages()
const sidebarDefault = "sidebar"

const useChatStore = create((set) => ({
    messages: storedMessages,
    addMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
    })),
    clearMessages: () => set({messages: []})
}))

const useSidebarStore = create((set) => ({
    activeSidebar: sidebarDefault,
    changeSidebar: (sidebar) => set((state) => ({
        activeSidebar: [...state.activeSidebar, sidebar]
    })),
}))

export { useChatStore, useSidebarStore }