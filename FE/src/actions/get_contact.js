import callStackLog from "../log/callStackLog"

const get_contact = () => {
    // callStackLog('get_contact')
    return {
        type: 'GET_CONTACT',
    }
}

export default get_contact