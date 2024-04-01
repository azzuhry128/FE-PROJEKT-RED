import callStackLog from "../log/callStackLog"

const add_message = (payload) => {
    // callStackLog('call_message')
    return {
        type: 'ADD_MESSAGE',
        payload: payload
    }
}

export default add_message