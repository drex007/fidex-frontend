import qs from 'qs'



import { API } from "../axios.config";

export const adminLoginRoute = (formdata) => API.post('/user/admin/login', formdata)
export const getAccountsRoute = () => API.get('/admin/accounts')
export const getAdminFeeRoute = () => API.get('/admin/fee')
export const getNetworksRoute = () => API.get('/admin/assets')
export const addNetworkAssetRoute = (formdata) => API.post('/admin/asset/add', formdata)
export const addAccountRoute = (formdata) => API.post('/admin/account/add', formdata)
export const updateAccountRoute = (formdata, id) => API.put(`admin/account/update/${id}`, formdata)
export const updateNetworkRoute = (formdata, id) => API.put(`admin/asset/update/${id}`, formdata)
export const updateTransactionFeeRoute = (formdata, id) => API.put(`admin/fee/update/${id}`, formdata)
export const deleteNetworkAssetRoute = (id) => API.delete(`admin/asset/delete/${id}`)
export const deleteAccountRoute = (id) => API.delete(`admin/account/delete/${id}`)



export const getAdminAnalyticsRoute = () => API.get(`transaction/analytics`)
export const getTransactionsRoute = (page, limit, transactionStatus, transactionType, from, to) => API.get('/transaction/all', {
    params: {
        page: page,
        limit: limit,
        transactionStatus: transactionStatus,
        transactionType: transactionType,
        from:from,
        to:to

    }
})


export const getSwapRequestRoute = (page, limit, transactionStatus, transactionType) => {
    return API.get('/transaction/all', {
        params: {
            page: page,
            limit: limit,
            transactionStatus: typeof(transactionStatus) === "string" ? transactionStatus : JSON.stringify(transactionStatus),
            transactionType: transactionType

        }
    })
}


export const getAllUsersRoute = (page, limit) => API.get('/user/all-users', {
    params: {
        page: page,
        limit: limit
    }
})

export const adminUpdateTransactionRoute = (formdata, transactionId) => API.put(`/transaction/update/${transactionId}`, formdata)