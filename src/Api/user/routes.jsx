import { usersAxios } from "../axios.config";

export const getExchangeRateRoute = () => usersAxios.get('/admin/rate')
export const getFeeRoute = () => usersAxios.get('/admin/fee')
export const getNetworksRoute = () => usersAxios.get('/admin/assets')
export const getAdminAccountsRoute = () => usersAxios.get('/admin/accounts')

 
export const buyCryptocurrencyRoute =(formdata) => usersAxios.post('/transaction/sell', formdata)

export const sellCryptocurrencyRoute =(formdata) => usersAxios.post('/transaction/buy', formdata)

export const getTransactionByIdRoute = (transacionId) => usersAxios.get(`transaction/search/${transacionId}`)
export const getUserKycStatusRoute = (email) => usersAxios.get(`/user/status/${email}`)

export const userDojahKycRoute = (formdata) => usersAxios.post('/user/user-kyc', formdata)