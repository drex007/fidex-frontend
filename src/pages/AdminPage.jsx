import React, { useContext } from 'react'
import SideBar from '../components/admin/SideBar'
import DashBoard from '../components/admin/DashBoard'
import { AppContext } from '../ContextAPI'
import { addAccountDetails, addNetwork, completeTransactionModal, confirmOrCancelModal, updateAccountDetails, updateNetwork, updateSwapFee } from '../modalConfigs'
import UpdateSwapFeeModal from '../modals/admin/UpdateSwapFeeModal'
import AddNetworkModal from '../modals/admin/AddNetWorkModal'
import UpdateNetworkModal from '../modals/admin/UpdateNetworkModal'
import { dashBoard, reQuest, users } from '../adminPageConfig'
import AdminSwapRequests from '../components/admin/AdminSwapRequests'
import AdminUsers from '../components/admin/AdminUsers'
import AddAccountModal from '../modals/admin/AddAccountDetailsModal'
import UpdateAccountDetailsModal from '../modals/admin/UpdateAccountDetailsModal'
import ConfirmOrCancelTransactionModal from '../modals/admin/ConfirmOrCancelTransactionModal'
import CompleteTransactionModal from '../modals/admin/CompleteTransactionModal'

const AdminPage = () => {
    
    const { adminDashBoardModal, setAdminDashBoardModal, AdminPage, setAdminPage } = useContext(AppContext)
    return (
        <div className='3xl:px-[25%]'>
            {adminDashBoardModal === updateSwapFee && <UpdateSwapFeeModal />}
            {adminDashBoardModal === addNetwork && <AddNetworkModal />}
            {adminDashBoardModal === updateNetwork && <UpdateNetworkModal />}
            {adminDashBoardModal === addAccountDetails && <AddAccountModal />}
            {adminDashBoardModal === updateAccountDetails && <UpdateAccountDetailsModal />}
            {adminDashBoardModal === confirmOrCancelModal && <ConfirmOrCancelTransactionModal />}
            {adminDashBoardModal === completeTransactionModal && <CompleteTransactionModal />}


            <div className='flex flex-1  h-screen w-full  space-x-8'>
                <div className='flex-[0.15] '>
                    <SideBar />

                </div>
                <div className='flex-[0.85] px-4 overflow-y-scroll'>
                    {AdminPage === dashBoard && <DashBoard />}
                    {AdminPage === reQuest && <AdminSwapRequests />}
                    {AdminPage === users && <AdminUsers />}


                </div>
            </div>
        </div>
    )
}

export default AdminPage