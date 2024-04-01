import callStackLog from "../log/callStackLog"

const switch_contact = (payload) => {
    // callStackLog('switch_contact')
    return {
        type: 'SWITCH_CONTACT',
        payload: payload
    }
}

export default switch_contact