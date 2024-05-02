const fetch_message = (payload) => {
    return {
        type: 'FETCH_MESSAGE',
        payload: payload
    }
}

export default fetch_message