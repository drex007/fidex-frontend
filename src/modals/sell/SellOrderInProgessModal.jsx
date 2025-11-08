import React, { useContext, useEffect, useState } from 'react'
import { copy, kycCirlce } from '../../assets'
import { AppContext } from '../../ContextAPI'
import { BuyModal, SellOrderComplete } from '../../modalConfigs'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrency, Success } from '../../constants'
import { getTransactionByTransctionIDAction } from '../../Api/user/user.api'
import { ImNotification } from "react-icons/im";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast'

const SellOrderInProgressModal = () => {
    const { userModalState, setUserModalState } = useContext(AppContext)
    const { assets, selltransactionOrder } = useSelector(state => state.user)
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

                    setUserModalState(SellOrderComplete)
                }

            }
        }

        checkTransactionState()

    }, [currentTransaction])



    return (
        <div className='flex lg:justify-end justify-center'>
            <div className='px-3 py-4  lg:w-4/6  3xl:w-3/5 shadow-lg border rounded-xl shadow-gray-400  text-[15px]'>
                <div className='flex justify-between items-center'>
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
                    <p className='font-spacegrotesk text-gray-500 py-1'>You Sent</p>
                    <p className='font-spacegrotesk text-black'>{currentTransaction?.amountReceived} {currentTransaction?.transactionAsset}</p>

                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>You Will Receive</p>

                    <p className='font-spacegrotesk text-black'>{formatCurrency(currentTransaction?.amountPaid, "NGN")} NGN</p>

                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Asset</p>

                    <p className='font-spacegrotesk text-black'>{currentTransaction?.transactionAsset}</p>

                </div>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Transaction Hash <span className='text-red-700'>*</span> </p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{currentTransaction?.transactionHash}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>

                <div className='relative rounded-md p-2  border border-black my-3'>
                    <p className=' font-spacegrotesk text-gray-500 py-1 flex items-center'>Transaction ID <span className='mb-1 ml-2'><ImNotification onMouseEnter={() => setShowNotification(true)} onMouseLeave={() => setShowNotification(false)} /></span></p>
                    {showNotification && <div className='absolute -mt-8 ml-32 text-[9px] bg-white rounded-lg p-2 border border-black'>
                        For pending transactions, chat our customer care with this ID
                    </div>}
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black text-[12px]'>{currentTransaction?.transactionId}</p>
                        <CopyToClipboard text={currentTransaction?.transactionId}
                            onCopy={() => toast.success("Transaction ID copied")}>
                            <button className='ml-2'><img src={copy} className='cursor-pointer w-[20px]' /></button>
                        </CopyToClipboard>

                    </div>
                </div>


                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agents Wallet <span className='text-red-700'>*</span></p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black text-[13px]'>{currentTransaction?.agentWallet}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>




            </div>
        </div>
    )
}

export default SellOrderInProgressModal