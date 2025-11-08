import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../ContextAPI'
import { useDispatch, useSelector } from 'react-redux'
import { updateTransactionFeeAction } from '../../Api/admin/admin.api'
import { formatFullDateTime } from '../../constants'


const CompleteTransactionModal = () => {
    const { adminDashBoardModal, setAdminDashBoardModal, completeTransactionModalState } = useContext(AppContext)
    const { adminFee } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const [formdata, setFormdata] = useState({
        fee: 0,
        fixedRate: 0,
        id: "",
        setAdminDashBoardModal: setAdminDashBoardModal
    })

    useEffect(() => {
        setFormdata({ ...formdata, id: adminFee[0]?.id, fixedRate: adminFee[0]?.fixedRate, fee: adminFee[0]?.fee * 100 })

    }, [])


    const handleChange = (e) => {

        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-spacegrotesk'>
            <div className='w-1/2 max-h-[400px] bg-white rounded p-4 text-[12px] font-spacegrotesk overflow-y-scroll'>
                <div className='w-full py-2 flex  space-x-2'>
                    <div className='w-1/2 '>
                        <p>Customer  Name</p>
                        <input type="text" name="" value={`${completeTransactionModalState?.user?.firstName} ${completeTransactionModalState?.user?.lastName}`} disabled className='border border-black px-2 py-1 w-full' />
                    </div>
                    <div className='w-1/2 '>
                        <p>Email</p>
                        <input type="text" name="" value={completeTransactionModalState?.email} disabled className='border border-black px-2 py-1 w-full' />
                    </div>

                </div>
                <div className='w-full py-2 flex  space-x-2'>
                    <div className='w-1/2 '>
                        <p>Transaction ID</p>
                        <input type="text" name="" value={completeTransactionModalState?.transactionId} disabled className='border border-black px-2 py-1 w-full' />
                    </div>
                    <div className='w-1/2 '>
                        <p>Transaction Asset || Network</p>
                        <input type="text" name="" value={`${completeTransactionModalState?.transactionAsset} || ${completeTransactionModalState?.network}`} disabled className='border border-black px-2 py-1 w-full' />
                    </div>

                </div>
                <div className='w-full py-2 flex  space-x-2'>
                    <div className='w-1/2 '>
                        <p>Amount Paid</p>
                        <input type="text" name="" value={completeTransactionModalState?.amountPaid} disabled className='border border-black px-2 py-1 w-full' />
                    </div>
                    <div className='w-1/2 '>
                        <p>Amount Received</p>
                        <input type="text" name="" value={completeTransactionModalState?.amountReceived} disabled className='border border-black px-2 py-1 w-full' />
                    </div>

                </div>
                <div className='w-full py-2 flex  space-x-2'>
                    <div className='w-1/2 '>
                        <p>Date Initiated</p>
                        <input type="text" name="" value={formatFullDateTime(completeTransactionModalState?.createdAt)} disabled className='border border-black px-2 py-1 w-full' />
                    </div>
                    <div className='w-1/2 '>
                        <p>Date Completed</p>
                        <input type="text" name="" value={formatFullDateTime(completeTransactionModalState?.completedAt)} disabled className='border border-black px-2 py-1 w-full' />
                    </div>

                </div>

                <div className='w-full py-2 flex  space-x-2'>
                    <div className='w-1/2 '>
                        <p>Transaction Type</p>
                        <input type="text" name="" value={completeTransactionModalState?.transactionType} disabled className='border border-black px-2 py-1 w-full' />
                    </div>
                    <div className='w-1/2 '>
                        <p>Wallet</p>
                        <input type="text" name="" value={completeTransactionModalState?.walletAddress} disabled className='border border-black px-2 py-1 w-full' />
                    </div>

                </div>
                {completeTransactionModalState?.transactionType === "Buy" && <div className='w-full py-2 flex  space-x-2'>
                    <div className='w-1/2 '>
                        <p>Customer Account Name || Bank Name</p>
                        <input type="text" name="" value={`${completeTransactionModalState?.receiverAccountName} || ${completeTransactionModalState?.receiverBank}`} disabled className='border border-black px-2 py-1 w-full' />
                    </div>
                    <div className='w-1/2 '>
                        <p>Customer Account Number</p>
                        <input type="text" name="" value={completeTransactionModalState?.receiverAccountNumber} disabled className='border border-black px-2 py-1 w-full' />
                    </div>

                </div>}

                {completeTransactionModalState?.transactionType === "Sell" && <div className='w-full py-2 flex  space-x-2'>
                    <div className='w-1/2 '>
                        <p>Agent Account Name || Bank Name</p>
                        <input type="text" name="" value={`${completeTransactionModalState?.agentAccountName} || ${completeTransactionModalState?.agentBank}`} disabled className='border border-black px-2 py-1 w-full' />
                    </div>
                    <div className='w-1/2 '>
                        <p>Customer Account Number</p>
                        <input type="text" name="" value={completeTransactionModalState?.agentAccountNumber} disabled className='border border-black px-2 py-1 w-full' />
                    </div>

                </div>}
                <div className='flex justify-between'>
                    <p></p>
                    <button className='font-african bg-white border px-2 py-1 border-black text-black' onClick={() => setAdminDashBoardModal(null)}> Cancel</button>
                </div>

            </div>



        </div>
    )
}

export default CompleteTransactionModal