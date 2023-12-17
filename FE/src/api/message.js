import axios from "axios"

const message = async() => {
    console.log("requesting data")
    const response = axios.get(url).then((response) => response)
    console.log("response received")
    console.log("sorting variables & objects")
    const account = response.account
    const user = response.account.user
    const room = response.chatroom

    const { message_id, chat_room_id, account_id, content, createdAt, updatedAt } = response
    const message = {message_id, chat_room_id, account_id, content, createdAt, updatedAt}
    
    console.log("sorting finished!")
    const data = { account, user, room, message }
    console.log("data exported")
    return data
}


export { message }