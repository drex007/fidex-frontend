import React, { useContext, useEffect, useState } from 'react'
import { arrrowBack, copy } from '../assets'
import { AppContext } from '../ContextAPI'
import { BuyModal, OrderInProgessNotSuccessful } from '../modalConfigs'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrency } from '../constants'
import { userBuyCryptocurrencyAction } from '../Api/user/user.api'

const BuyTransferFundsModal = () => {
    const { userModalState, setUserModalState, transactionFormData, setTransactionFormData } = useContext(AppContext)
    const dispatch = useDispatch()
    const { accounts } = useSelector(state => state.user)




    useEffect(() => {
        const selectedAccount = accounts[Math.floor(Math.random() * accounts?.length)];
        setTransactionFormData({
            ...transactionFormData,
            agentBank: selectedAccount?.bankName,
            agentAccountNumber: selectedAccount?.accountNumber,
            agentAccountName: selectedAccount?.accountName
        })

    }, [])

    const setLocalStorageTransaction = (data) => {
        localStorage.setItem("pending-transaction", JSON.stringify(data))
    }

    return (
        <div className='flex justify-end'>
            <div className='px-3 py-4  lg:w-3/5 shadow-lg border rounded-xl shadow-gray-400'>
                <div className='flex justify-between'>
                    <img src={arrrowBack} className='cursor-pointer'  onClick={()=>setUserModalState(BuyModal)}/>
                    <p className='capitalize font-african text-[15px]'>Transfer Funds</p>
                    <p></p>
                </div>
                <p className='font-spacegrotesk text-gray-700  lg:text-[13px] text-[11px] font-semibold py-4 flex justify-center '>You have to transfer <span className='font-african font-light mx-1'>{formatCurrency(transactionFormData?.amountReceived, "NGN")}</span> .  Swap fee is included.</p>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agents Bank Name</p>
                    <p className='font-spacegrotesk text-black'>{transactionFormData?.agentBank}</p>

                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agents Bank Account Name</p>

                    <p className='font-spacegrotesk text-black'>{transactionFormData?.agentAccountName}</p>



                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agents Bank Account Number</p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{transactionFormData?.agentAccountNumber}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>

                <div className='rounded-md p-2  border border-black'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Transfer Narration</p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>Payments For Goods</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>
                <div className='flex space-x-2 my-2 font-spacegrotesk'>
                    <p className='font-semibold capitalize'>NOTE:</p>
                    <p className='capitalize text-gray-500 text-[13px] '>TRANSFERS WITHOUT NARRATION WILL BE IGNORED BY THE SYSTEM</p>

                </div>

                <div className='bg-yellow-500 p-3 text-[13px] font-semibold text-white rounded-md font-spacegrotesk'>
                    <p>Important Note: Only transfer from a bank account that has your full name. Funds transferred with a different account name will be disregarded. Also, If you use any crypto related words as a narration, your order will be with held</p>

                </div>

                <button className='bg-faq-bg-dark p-2 rounded-md  capitalize text-white w-full font-african my-4 py-5' onClick={async () => {

                    const res = await dispatch(userBuyCryptocurrencyAction(transactionFormData))
                    if (res !== null) {
                        setLocalStorageTransaction(res?.payload)
                        setUserModalState(OrderInProgessNotSuccessful)

                    }
                }}>Transferred</button>



            </div>
        </div>
    )
}

export default BuyTransferFundsModal