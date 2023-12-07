import axios from "axios";

const reqInterceptor = axios.interceptors.request.use((request) => {
    console.log(request)
    return request
})

const resInterceptor = axios.interceptors.request.use(response => {
    console.log(response)
    return response.data
})

export { reqInterceptor, resInterceptor }