import axios from 'axios'
import { decode } from 'html-entities'

let USERFROMLS = localStorage.getItem('user') ? localStorage.getItem('user') : null

//AxiosInstance for Admin
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_DEV_API,
    headers: {

        Authorization: USERFROMLS
    },
})


instance.interceptors.request.use(
    (req) => {
        USERFROMLS = localStorage.getItem('user') ? localStorage.getItem('user') : null
        if (USERFROMLS) {

            req.headers['Authorization'] = USERFROMLS
        }
        return req
    },
    (error) => {
        return Promise.reject(error)
    }
)



instance.interceptors.response.use(
    (res) => {
        const api_response = decode(JSON.stringify(res))
        return JSON.parse(api_response)
    },
    async (err) => {
        const error = err.config
       
        if (err.response) {
            if (err.response.status === 401) {
                localStorage.removeItem('user')
                window.location.href = '/login'

                return instance(error)
            }
        }

        return Promise.reject(err)
    }
)



//Users Axios Instance


const userAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_DEV_API,
    headers: {

    },
})

userAxiosInstance.interceptors.request.use(
    (req) => {
        // USERFROMLS = localStorage.getItem('user') ? localStorage.getItem('user') : null
        // if (USERFROMLS) {

        //     req.headers['Authorization'] = USERFROMLS
        // }
        return req
    },
    (error) => {
        return Promise.reject(error)
    }
)



userAxiosInstance.interceptors.response.use(
    (res) => {
        const api_response = decode(JSON.stringify(res))
        return JSON.parse(api_response)
    },
    async (err) => {
        const error = err.config
       
        if (err.response) {
            // if (err.response.status === 401) {
            //     localStorage.removeItem('user')
            //     window.location.href = '/login'

            //     return instance(error)
            // }
        }

        return Promise.reject(err)
    }
)


export const API = instance
export const usersAxios = userAxiosInstance