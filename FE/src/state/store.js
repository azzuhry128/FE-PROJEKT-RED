import { create } from "zustand";
import { fetchMessages } from "../api/storage";

const storedMessages = fetchMessages()

const useChatStore = create((set) => ({
    messages: storedMessages,
    addMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
    })),
    clearMessages: () => set({messages: []})
}))

export { useChatStore }