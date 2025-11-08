import { createSlice } from '@reduxjs/toolkit'
import { dojahKycAction, getExchangeRateAction, getFeeAction, getTransactionByTransctionIDAction, getUserKycStatusAction, setUserKycStatusToNull, userBuyCryptocurrencyAction, userFetchAdminAccountsAction, userFetchNetworkAction, userSellCryptocurrencyAction } from '../Api/user/user.api'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    exchangeRate: false,
    usersFee: null,
    assets: null,
    accounts: null,
    buytransactionOrder: null,
    buytransactionOrderLoadingState: null,
    selltransactionOrder: null,
    singleTransactionById: null,
    userKycStatus: null,
    kycData:null
  },
  reducers: {},
  extraReducers: (builder) => {
    //User Exhcnage rate
    builder.addCase(getExchangeRateAction.pending, (state, action) => {
      state.exchangeRate = true
    })
    builder.addCase(getExchangeRateAction.fulfilled, (state, action) => {
      state.exchangeRate = action.payload
    })
    builder.addCase(getExchangeRateAction.rejected, (state, action) => {
      state.exchangeRate = false
    })

    //USers Fee
    builder.addCase(getFeeAction.pending, (state, action) => {
      state.usersFee = true
    })
    builder.addCase(getFeeAction.fulfilled, (state, action) => {
      state.usersFee = action.payload
    })
    builder.addCase(getFeeAction.rejected, (state, action) => {
      state.usersFee = false
    })

    ///FetchNetworks

    builder.addCase(userFetchNetworkAction.fulfilled, (state, action) => {
      state.assets = action.payload
    })
    //Fetch Admin Accounts
    builder.addCase(userFetchAdminAccountsAction.fulfilled, (state, action) => {
      state.accounts = action.payload
    })

    //Create Order


    builder.addCase(userBuyCryptocurrencyAction.pending, (state, action) => {
      state.buytransactionOrderLoadingState = true
      state.buytransactionOrder = null
    })
    builder.addCase(userBuyCryptocurrencyAction.fulfilled, (state, action) => {
      state.buytransactionOrderLoadingState = false
      state.buytransactionOrder = action.payload
    })
    builder.addCase(userBuyCryptocurrencyAction.rejected, (state, action) => {

      state.buytransactionOrder = null
    })


    builder.addCase(userSellCryptocurrencyAction.pending, (state, action) => {
      state.buytransactionOrderLoadingState = true
      state.selltransactionOrder = null
    })
    builder.addCase(userSellCryptocurrencyAction.fulfilled, (state, action) => {

      state.selltransactionOrder = action.payload
    })
    builder.addCase(userSellCryptocurrencyAction.rejected, (state, action) => {

      state.selltransactionOrder = null
    })
    //GetTransactionById
    builder.addCase(getTransactionByTransctionIDAction.fulfilled, (state, action) => {
      state.singleTransactionById = action.payload
    })

    //UserKYC
    builder.addCase(getUserKycStatusAction.pending, (state, action) => {
      state.userKycStatus = "loading"
    })

    builder.addCase(getUserKycStatusAction.fulfilled, (state, action) => {

      state.userKycStatus = action.payload
    })
    builder.addCase(getUserKycStatusAction.rejected, (state, action) => {

      state.userKycStatus = null
    })


    //UserKYC
    builder.addCase(dojahKycAction.pending, (state, action) => {
      state.kycData = "loading"
    })

    builder.addCase(dojahKycAction.fulfilled, (state, action) => {

      state.kycData = action.payload
    })
    builder.addCase(dojahKycAction.rejected, (state, action) => {

      state.kycData = null
    })

    //SetUserKYCToNull
 
    builder.addCase(setUserKycStatusToNull.fulfilled, (state, action) => {
      state.userKycStatus = null
    })
 






  }

})



export default userSlice.reducer