const fetch_account = (payload) => {
    return {
        type: 'FETCH_ACCOUNT',
        payload: payload
    }
}

export default fetch_account