import React, { useState } from "react"
import { BuyModal } from "./modalConfigs";
import { allDashBoardTranstion, dashBoard } from "./adminPageConfig";


export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {


    const [userModalState, setUserModalState] = useState(BuyModal)
    const [AdminPage, setAdminPage] = useState(dashBoard)
    const [dashboardTransactions, setDashboardTransactions] = useState(allDashBoardTranstion)
    const [adminDashBoardModal, setAdminDashBoardModal] = useState(null)
    const [currentAccount, setCurrentAccount] = useState(null)
    const [currentNetwork, setCurrentNetwork] = useState(null)
    const [completeTransactionModalState, setCompleteTransactionModalState] = useState(null)
    const [confirmCancel, setConfirmCancel] = useState({
        state: null,
        transactionId: null,
        transactionType: null
    })


    const [transactionFormData, setTransactionFormData] = useState(
        {
            email: "",
            transactionAsset: "",
            agentBank: "",
            agentAccountNumber: "",
            agentAccountName: "",
            receiverBank: "",
            receiverAccountNumber: "",
            receiverAccountName: "",
            amountPaid: "",
            amountReceived: "",
            narration: "Payment for goods",
            fee: 0,
            transactionHash: "",
            nairaToDollarRate: 0,
            walletAddress: "",
            network: "",
            transactionType: "Sell",
            agentWallet: ""
        }

    )
    return (

        <>
            <AppContext.Provider value={{
                userModalState,
                setUserModalState,
                AdminPage,
                setAdminPage,
                dashboardTransactions,
                setDashboardTransactions,
                adminDashBoardModal,
                setAdminDashBoardModal,
                setCurrentAccount,
                currentAccount,
                currentNetwork,
                setCurrentNetwork,
                confirmCancel,
                setConfirmCancel,
                transactionFormData,
                setTransactionFormData,
                completeTransactionModalState,
                setCompleteTransactionModalState

            }}>

                {children}
            </AppContext.Provider>

        </>
    )
}