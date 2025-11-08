import { createSlice } from '@reduxjs/toolkit'
import { addAccountAction, addNetworkAssetAction, adminDeleteAccountAction, adminDeleteNetworkAssetAction, adminGetAccountAction, adminGetFeeAction, adminLoginAction, adminUpdateTransactionAction, fetchNetworksAction, getAdminAnalyticsAction, getAllUsersAction, getSwapRequestAction, getTransactionsActions, updateAccountAction, updateNetworkAction, updateTransactionFeeAction } from '../Api/admin/admin.api'


export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    authLoading: false,
    authData: {},
    adminAccounts: null,
    adminFee: null,
    networks: null,
    addNetwork: null,
    addAccount: null,
    updateAccount: null,
    updateNetwork: null,
    transactionFeeStatus: null,
    analytics: null,
    transactionsState: null,
    swapRequests: null,
    users: null,
    updateTransaction: null,
    deleteAsset: null,
    deleteAccount: null
  },
  reducers: {},
  extraReducers: (builder) => {
    //Admin Login
    builder.addCase(adminLoginAction.pending, (state, action) => {
      state.authLoading = true
    })
    builder.addCase(adminLoginAction.fulfilled, (state, action) => {
      state.authLoading = false
      state.authData = action.payload
    })
    builder.addCase(adminLoginAction.rejected, (state, action) => {
      state.authLoading = false
    })

    //Admin Gets Account
    builder.addCase(adminGetAccountAction.fulfilled, (state, action) => {
      state.adminAccounts = action.payload
    })
    //Adnun Get Fee
    builder.addCase(adminGetFeeAction.fulfilled, (state, action) => {
      state.adminFee = action.payload
    })

    //Admin Get Netwokrs
    builder.addCase(fetchNetworksAction.fulfilled, (state, action) => {
      state.networks = action.payload
    })
    //Admin add Network

    builder.addCase(addNetworkAssetAction.pending, (state, action) => {
      state.addNetwork = true
    })


    builder.addCase(addNetworkAssetAction.fulfilled, (state, action) => {
      state.addNetwork = false
    })

    builder.addCase(addNetworkAssetAction.rejected, (state, action) => {
      state.addNetwork = false
    })


    //Add Account 
    builder.addCase(addAccountAction.pending, (state, action) => {
      state.addAccount = true
    })


    builder.addCase(addAccountAction.fulfilled, (state, action) => {
      state.addAccount = false
    })

    builder.addCase(addAccountAction.rejected, (state, action) => {
      state.addAccount = false
    })

    //UpdateAccount
    builder.addCase(updateAccountAction.pending, (state, action) => {
      state.updateAccount = true
    })


    builder.addCase(updateAccountAction.fulfilled, (state, action) => {
      state.updateAccount = false
    })

    builder.addCase(updateAccountAction.rejected, (state, action) => {
      state.updateAccount = false
    })

    //UpdateNetwork
    builder.addCase(updateNetworkAction.pending, (state, action) => {
      state.updateNetwork = true
    })


    builder.addCase(updateNetworkAction.fulfilled, (state, action) => {
      state.updateNetwork = false
    })

    builder.addCase(updateNetworkAction.rejected, (state, action) => {
      state.updateNetwork = false
    })

    //UpdateTransactionFee
    builder.addCase(updateTransactionFeeAction.pending, (state, action) => {
      state.transactionFeeStatus = true
    })


    builder.addCase(updateTransactionFeeAction.fulfilled, (state, action) => {
      state.transactionFeeStatus = false
    })

    builder.addCase(updateTransactionFeeAction.rejected, (state, action) => {
      state.transactionFeeStatus = false
    })

    //Gets AdminAnalyticis 

    builder.addCase(getAdminAnalyticsAction.pending, (state, action) => {
      state.analytics = null
    })


    builder.addCase(getAdminAnalyticsAction.fulfilled, (state, action) => {
      state.analytics = action.payload
    })

    builder.addCase(getAdminAnalyticsAction.rejected, (state, action) => {
      state.analytics = null
    })

    //Get Transactions

    builder.addCase(getTransactionsActions.pending, (state, action) => {
      state.transactionsState = null
    })


    builder.addCase(getTransactionsActions.fulfilled, (state, action) => {
      state.transactionsState = action.payload
    })

    builder.addCase(getTransactionsActions.rejected, (state, action) => {
      state.transactionsState = null
    })
    //Get SwaoRequest

    builder.addCase(getSwapRequestAction.pending, (state, action) => {
      state.swapRequests = null
    })


    builder.addCase(getSwapRequestAction.fulfilled, (state, action) => {
      state.swapRequests = action.payload
    })

    builder.addCase(getSwapRequestAction.rejected, (state, action) => {
      state.swapRequests = null
    })

    //Get AllUSers

    builder.addCase(getAllUsersAction.pending, (state, action) => {
      state.users = null
    })


    builder.addCase(getAllUsersAction.fulfilled, (state, action) => {
      state.users = action.payload
    })

    builder.addCase(getAllUsersAction.rejected, (state, action) => {
      state.users = null
    })

    //Update Transaction

    builder.addCase(adminUpdateTransactionAction.pending, (state, action) => {
      state.updateTransaction = null
    })


    builder.addCase(adminUpdateTransactionAction.fulfilled, (state, action) => {
      state.updateTransaction = action.payload
    })

    builder.addCase(adminUpdateTransactionAction.rejected, (state, action) => {
      state.updateTransaction = null
    })


    //Delete Asset

    builder.addCase(adminDeleteNetworkAssetAction.pending, (state, action) => {
      state.deleteAsset = null
    })


    builder.addCase(adminDeleteNetworkAssetAction.fulfilled, (state, action) => {
      state.deleteAsset = action.payload
    })

    builder.addCase(adminDeleteNetworkAssetAction.rejected, (state, action) => {
      state.deleteAsset = null
    })



    //Delete Account

    builder.addCase(adminDeleteAccountAction.pending, (state, action) => {
      state.deleteAccount = null
    })


    builder.addCase(adminDeleteAccountAction.fulfilled, (state, action) => {
      state.deleteAccount = action.payload
    })

    builder.addCase(adminDeleteAccountAction.rejected, (state, action) => {
      state.deleteAccount = null
    })






  }

})



export default adminSlice.reducer