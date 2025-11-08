import React, { useContext, useState, useEffect } from 'react'
import { arrrowBack, copy, kycCirlce } from '../assets'
import { AppContext } from '../ContextAPI'
import { BuyModal, OrderInProgessSuccessful } from '../modalConfigs'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrency, Success } from '../constants'
import { getTransactionByTransctionIDAction } from '../Api/user/user.api'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast'
import { ImNotification } from 'react-icons/im'


const BuyOrderInProgressModal = () => {
    const { buytransactionOrder } = useSelector(state => state.user)
    const { userModalState, setUserModalState } = useContext(AppContext)
    const [currentTransaction, setcurrentTransaction] = useState("")
    const [showNotification, setShowNotification] = useState(false)
    const dispatch = useDispatch()

    const removeLocalStorageTransaction = () => {
        localStorage.removeItem("pending-transaction")
    }

    useEffect(() => {
        const item = localStorage.getItem("pending-transaction")
        setcurrentTransaction(JSON.parse(item))

    }, [])

    useEffect(() => {

        const checkTransactionState = async () => {
            const item = JSON.parse(localStorage.getItem("pending-transaction"))
            if (item) {
                const res = await dispatch(getTransactionByTransctionIDAction(item?.transactionId))

                if (res?.payload?.transactionStatus === Success) {
                    removeLocalStorageTransaction()
                    setUserModalState(OrderInProgessSuccessful)
                }

            }
        }

        checkTransactionState()

    }, [currentTransaction])


    return (
        <div className='flex lg:justify-end justify-center'>
            <div className='px-3 py-4  lg:w-4/6  3xl:w-3/5 w-full shadow-lg border rounded-xl shadow-gray-400  text-[15px]'>
                <div className='flex justify-between'>
                    <p></p>
                    <p className='capitalize font-african text-[15px]'>Order in Progress</p>
                    <p className='text-[20px] cursor-pointer bg-gray-100 p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center' onClick={() => {
                        removeLocalStorageTransaction()
                        setUserModalState(BuyModal)
                    }}>x</p>
                </div>

                <div className='flex justify-center my-3'>
                    <img src={kycCirlce} className='w-[30px] h-[30px]' />
                </div>
                <p className='font-spacegrotesk text-gray-500  text-[15px] font-semibold py-2 flex justify-center  mx-4'>Waiting for the agent to confirm funds received. You can refresh the page after some time.</p>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>You Will Receive </p>
                    <p className='font-spacegrotesk text-black'>{currentTransaction?.amountPaid} {currentTransaction?.transactionAsset}</p>

                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Wallet</p>

                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black text-[12px]'>{currentTransaction?.walletAddress}</p>

                    </div>

                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>You Sent</p>

                    <p className='font-spacegrotesk text-black'>NGN {formatCurrency(currentTransaction?.amountReceived, "NGN")} </p>

                </div>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1 flex items-center'>Transaction ID <span className='ml-2'><ImNotification onMouseEnter={() => setShowNotification(true)} onMouseLeave={() => setShowNotification(false)} /></span></p>
                    {showNotification && <div className='absolute -mt-8 ml-32 text-[9px] bg-white rounded-lg p-2 border border-black'>
                        For pending transactions, chat our customer care with this ID
                    </div>}
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{currentTransaction?.transactionId}</p>
                        <CopyToClipboard text={currentTransaction?.transactionId}
                            onCopy={() => toast.success("Transaction ID copied")}>
                            <button className='ml-2'><img src={copy} className='cursor-pointer w-[20px]' /></button>
                        </CopyToClipboard>

                    </div>
                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agent Bank Name</p>

                    <p className='font-spacegrotesk text-black'>{currentTransaction?.agentBank}</p>

                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agents Bank Account Name</p>

                    <p className='font-spacegrotesk text-black'>{currentTransaction?.agentAccountName}</p>

                </div>



                <div className='rounded-md p-2  border border-black'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agent Bank Account Number</p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{currentTransaction?.agentAccountNumber}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>



            </div>
        </div>
    )
}

export default BuyOrderInProgressModal