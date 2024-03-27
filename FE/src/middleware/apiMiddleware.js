import axios from "axios";
import { config } from "localforage";

const axiosInstance = axios.create({
    baseURL: '127.0.0.1:3000/api'
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = ''
        config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        console.log('response data:', response.data)
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance