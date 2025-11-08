import { createAsyncThunk } from "@reduxjs/toolkit"
import { buyCryptocurrencyRoute, getAdminAccountsRoute, getExchangeRateRoute, getFeeRoute, getNetworksRoute, getTransactionByIdRoute, getUserKycStatusRoute, sellCryptocurrencyRoute, userDojahKycRoute } from "./routes"
import toast from "react-hot-toast"
import { BuyTransferFunds, KycCongratulations, KycModal } from "../../modalConfigs"

export const getExchangeRateAction = createAsyncThunk(
    'user/getExchangeRateAction',
    async (_, { rejectWithValue }) => {
        try {

            const { data } = await getExchangeRateRoute()

            return data.data
        } catch (error) {
            return {}

        }

    }
)

export const getFeeAction = createAsyncThunk(
    'user/getFeeAction',
    async (_, thunkAPI) => {
        try {
            const { data } = await getFeeRoute()
            return data.data

        } catch (error) {

            return {}

        }
    }

)

export const userFetchNetworkAction = createAsyncThunk(
    'user/userFetchNetworkAction',
    async (_, thunkAPI) => {
        try {
            const { data } = await getNetworksRoute()
            return data.data

        } catch (error) {

            return {}

        }
    }

)

export const userFetchAdminAccountsAction = createAsyncThunk(
    'user/userFetchAdminAccounts',
    async (_, thunkAPI) => {
        try {
            const { data } = await getAdminAccountsRoute()
            return data.data

        } catch (error) {

            return {}

        }
    }

)



export const userBuyCryptocurrencyAction = createAsyncThunk(
    'user/userBuyCryptocurrencyAction',
    async (formdata, thunkAPI) => {
        try {
            const { data } = await buyCryptocurrencyRoute(formdata)
            toast.success("Order placed")
            return data.data

        } catch (error) {

            toast.error("Order failed")
            return null

        }
    }


)


export const userSellCryptocurrencyAction = createAsyncThunk(
    'user/userSellCryptocurrencyAction',
    async (formdata, thunkAPI) => {

        try {
            const { data } = await sellCryptocurrencyRoute(formdata)
            toast.success("Order placed")
            return data.data

        } catch (error) {

            toast.error("Order failed")
            return null

        }
    }


)


export const getTransactionByTransctionIDAction = createAsyncThunk(
    'user/getTransactionByTransctionID',
    async (transacionId, thunkAPI) => {
        try {
            const { data } = await getTransactionByIdRoute(transacionId)
            return data.data[0]

        } catch (error) {
            return null

        }
    }


)


export const getUserKycStatusAction = createAsyncThunk(
    'user/getUserKycStatusAction',
    async ({ email, setUserModalState, routeTo }, thunkAPI) => {
        try {
            const { data } = await getUserKycStatusRoute(email)
            const res = data.data
            if (res?.isVerified === false) {
                setUserModalState(KycModal)
            }
            if (res?.isVerified === true) {
                setUserModalState(routeTo)
            }


            return data.data

        } catch (error) {
            return null

        }
    }


)


export const dojahKycAction = createAsyncThunk(
    'user/dojahKycAction',
    async ({ formdata, setUserModalState }, thunkAPI) => {
        try {
            const { data } = await userDojahKycRoute(formdata)
            toast.success("KYC verification successful")
            setUserModalState(KycCongratulations)


            return data.data

        } catch (error) {

            if (error?.status === 409) {
                toast.error("BVN already exist!!")
            }
            else {
                toast.error("KYC verification failed")
            }


            return null

        }
    }


)


export const setUserKycStatusToNull = createAsyncThunk(
    'user/setUserKycStatusToNull',
    async ({ data }, thunkAPI) => {
        try {

            return data

        } catch (error) {
            return null

        }
    }


)







