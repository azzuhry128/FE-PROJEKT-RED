const passport = (data) => {
    const permissionStatus = grantPermission(data)

    if (permissionStatus === 'denied') {
        console.log("warning: redirecting to login page")
    }
}

function grantPermission(passport) {
    const { expired } = passport
    const currentDate = new Date().toLocaleDateString('en-us')
    const status = ''

    if (currentDate > expired) {
        console.log("access status: denied")
        status = 'denied'
        return status
    }
    console.log("access status: granted")
    status = 'granted'
    return status
}

export { passport }