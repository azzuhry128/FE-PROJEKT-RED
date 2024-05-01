const switch_message = (payload) => {
    return {
        type: 'SWITCH_MESSAGE',
        payload: payload
    }
}

export default switch_message