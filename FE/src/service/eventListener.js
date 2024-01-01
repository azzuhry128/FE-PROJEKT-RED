const eventListener = (emittedEvent) => {
    console.log(emittedEvent.detail)
    // const arrayOfEvents = ["redirect-to-login", "response-received", "render-this-component"]

    // const eventType = arrayOfEvents.includes(emittedEvent.detail)

    // if (eventType === true) {
    //     console.log(`${emittedEvent.detail} is triggered`)
    // } else {
    //     console.log('event not found!')
    // }
}

export {eventListener}