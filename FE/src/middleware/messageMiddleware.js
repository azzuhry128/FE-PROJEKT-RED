const messageMiddleware = store => next => action => {
    console.log('dispatching', action)
    console.log('current state', store.getState())
    let result = next(action)
    console.log('next state', store.getState())
    return result
}