import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { addAccountRoute, addNetworkAssetRoute, adminLoginRoute, adminUpdateTransactionRoute, deleteAccountRoute, deleteNetworkAssetRoute, getAccountsRoute, getAdminAnalyticsRoute, getAdminFeeRoute, getAllUsersRoute, getNetworksRoute, getSwapRequestRoute, getTransactionsRoute, updateAccountRoute, updateNetworkRoute, updateTransactionFeeRoute } from "./routes";
import toast from "react-hot-toast";

export const adminLoginAction = createAsyncThunk(
    'admin/LoginAction',
    async ({ formdata, navigate }, { rejectWithValue }) => {
        try {
            if (!formdata.email || !formdata.password) return toast.error("Email and password required")
            const { data } = await adminLoginRoute(formdata)
            localStorage.setItem("user", `Bearer ${data.data}`)

            toast.success("Admin login success")
            navigate("/admin", { replace: true })

            return {
                status: true
            }

        } catch (error) {
            toast.error("Admin login failed")
            return {
                status: false
            }


        }

    }
)


export const adminGetAccountAction = createAsyncThunk(
    'admin/adminGetAccountAction',
    async (_, thunkAPI) => {
        try {
            const { data } = await getAccountsRoute()
            return data.data

        } catch (error) {

            return {}

        }
    }

)
export const adminGetFeeAction = createAsyncThunk(
    'admin/adminGetFee',
    async (_, thunkAPI) => {
        try {
            const { data } = await getAdminFeeRoute()
            return data.data

        } catch (error) {

            return {}

        }
    }

)

export const fetchNetworksAction = createAsyncThunk(
    'admin/fetchNetworksAction',
    async (_, thunkAPI) => {
        try {
            const { data } = await getNetworksRoute()
            return data.data

        } catch (error) {

            return {}

        }
    }

)



export const addNetworkAssetAction = createAsyncThunk(
    'admin/addNetworkAsset',
    async (formdata, thunkAPI) => {
     
        try {
            if (!formdata.assetName || !formdata.walletAddress || !formdata.networkName) return toast.error("Asset, Network and WalletAdress required")
            const { data } = await addNetworkAssetRoute(formdata)
            toast.success("Asset added successfully")
            formdata.setAdminDashBoardModal(null)
            return data.data

        } catch (error) {
            toast.error("Action failed, try again")
            return {}

        }
    }

)

export const addAccountAction = createAsyncThunk(
    'admin/addAccountAction',
    async (formdata, thunkAPI) => {
        try {
            if (!formdata.accountName || !formdata.accountNumber || !formdata.bankName) return toast.error("Account number, Bank name and Account name required")
            const { data } = await addAccountRoute(formdata)
            toast.success("Account added successfully")
            formdata.setAdminDashBoardModal(null)
            return data.data

        } catch (error) {
            toast.error("Action failed, try again")
            return {}

        }
    }

)


export const updateAccountAction = createAsyncThunk(
    'admin/updateAccountAction',
    async (formdata, thunkAPI) => {
        try {
            if (!formdata.accountName || !formdata.accountNumber || !formdata.bankName) return toast.error("Account number, Bank name and Account name required")
            const { data } = await updateAccountRoute(formdata, formdata.id)
            toast.success("Account updated successfully")
            formdata.setAdminDashBoardModal(null)
            return data.data

        } catch (error) {
            toast.error("Action failed, try again")
            return {}

        }
    }

)


export const updateNetworkAction = createAsyncThunk(
    'admin/updateNetworkAction',
    async (formdata, thunkAPI) => {
        try {
            if (!formdata.assetName || !formdata.walletAddress || !formdata.networkName) return toast.error("Asset, WalletAddress and Network required")
            const { data } = await updateNetworkRoute(formdata, formdata.id)
            toast.success("Asset updated successfully")
            formdata.setAdminDashBoardModal(null)
            return data.data

        } catch (error) {
            toast.error("Action failed, try again")
            return {}

        }
    }

)

export const updateTransactionFeeAction = createAsyncThunk(
    'admin/updateTransactionFeeAction',
    async (formdata, thunkAPI) => {
        try {
            if (!formdata.fee) return toast.error("Fee is required")
            const { data } = await updateTransactionFeeRoute(formdata, formdata.id)
            toast.success("Fee updated successfully")
            formdata.setAdminDashBoardModal(null)
            return data.data

        } catch (error) {
            toast.error("Action failed, try again")
            return {}

        }
    }


)

export const getAdminAnalyticsAction = createAsyncThunk(
    'admin/getAdminAnalyticsAction',
    async (_, thunkAPI) => {
        try {

            const { data } = await getAdminAnalyticsRoute()
            return data.data

        } catch (error) {
            return {}

        }
    }

)

export const getTransactionsActions = createAsyncThunk(
    'admin/getTransactionsActions',
    async ({ page, limit, transactionStatus, transationType, from, to }, thunkAPI) => {
        try {

            const { data } = await getTransactionsRoute(page, limit, transactionStatus, transationType, from, to)
            return data

        } catch (error) {
            return {}

        }
    }

)

export const getSwapRequestAction = createAsyncThunk(
    'admin/getSwapRequestAction',
    async ({ page, limit, transactionStatus, transationType }, thunkAPI) => {

        try {

            const { data } = await getSwapRequestRoute(page, limit, transactionStatus, transationType)
            return data

        } catch (error) {
            return {}

        }
    }

)


export const getAllUsersAction = createAsyncThunk(
    'admin/getAllUsersAction',
    async ({ page, limit }, thunkAPI) => {
        try {


            const { data } = await getAllUsersRoute(page, limit)
            return data

        } catch (error) {
            return {}

        }
    }

)

export const adminUpdateTransactionAction = createAsyncThunk(
    'admin/adminUpdateTransactionAction',
    async ({ formdata, transactionId }, thunkAPI) => {
        try {
            if (!transactionId) return toast.error("Transaction ID is required")
            const { data } = await adminUpdateTransactionRoute(formdata, transactionId)
            toast.success("Transaction updated successfully")
            formdata.setAdminDashBoardModal(null)
            return data.data

        } catch (error) {
            toast.error("Action failed, try again")
            return {}

        }
    }


)


export const adminDeleteNetworkAssetAction = createAsyncThunk(
    'admin/adminDeleteNetworkAssetAction',
    async ( formdata , thunkAPI) => {
    
        try {
            const { data } = await deleteNetworkAssetRoute(formdata?.id)
            toast.success("Asset deleted successfully")
            formdata.setAdminDashBoardModal(null)
            return data.data

        } catch (error) {
           
            toast.error("Action failed, try again")
            return {}

        }
    }


)

export const adminDeleteAccountAction = createAsyncThunk(
    'admin/adminDeleteAccountAction',
    async ( formdata , thunkAPI) => {
    
        try {
            const { data } = await deleteAccountRoute(formdata?.id)
            toast.success("Account deleted successfully")
            formdata.setAdminDashBoardModal(null)
            return data.data

        } catch (error) {
            toast.error("Action failed, try again")
            return {}

        }
    }


)