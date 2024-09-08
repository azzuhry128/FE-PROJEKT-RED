import ChatListDisplay from "./chat_list_display";

export default function Chat () {
    return (
        <div className="flex flex-row shadow-lg m-8 p-2 rounded">
            <ChatListDisplay/>
            <div id="chat-panel">
                <div id="chat-header"></div>
                <div id="chat-container"></div>
                <div id="chat-controller"></div>
            </div>
        </div>
    )
}