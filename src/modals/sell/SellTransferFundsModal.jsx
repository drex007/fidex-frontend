import React, { useContext, useEffect } from 'react'
import { arrrowBack, copy } from '../../assets'
import { AppContext } from '../../ContextAPI'
import { SellModal, SellOrderInProgress, SellOrderTransactionHash } from '../../modalConfigs'
import { useDispatch, useSelector } from 'react-redux'
import { userSellCryptocurrencyAction } from '../../Api/user/user.api'
import { BsArrowDown } from 'react-icons/bs'
import toast from 'react-hot-toast'

const SellTransferFundsModal = () => {
    const { userModalState, setUserModalState, transactionFormData, setTransactionFormData } = useContext(AppContext)
    const { assets } = useSelector(state => state.user)
    const dispatch = useDispatch()


    const setLocalStorageTransaction = (data) => {
        localStorage.setItem("pending-transaction", JSON.stringify(data))
    }

    const handleChange = (e) => {
        setTransactionFormData({
            ...transactionFormData, [e.target.name]: e.target.value
        })
    }


    return (
        <div className='flex justify-end'>
            <div className='px-3 py-4  lg:w-3/5 w-full shadow-lg border rounded-xl shadow-gray-400'>
                <div className='flex justify-between'>
                    <img src={arrrowBack} className='cursor-pointer' onClick={() => setUserModalState(SellModal)} />
                    <p className='capitalize font-african text-[15px]'>Transfer Funds</p>
                 
                    <p></p>
                </div>
                <div className='min-h-[10px]  flex flex-col justify-center w-full'>
                    <p className='font-spacegrotesk text-gray-700  lg:text-[11px] text-[11px] font-semibold py-4 w-full flex justify-center'>Please enter your account details for payment processing. Ensure that all information provided is accurate and account name matches with what is on your BVN.</p>

                </div>

                {/* <div className=' w-full  flex  border outline-none  border-black rounded-sm my-4 p-4'>
                    <input type="text" name="transactionHash" id="" className='w-full outline-none px-1 text-[12px]' placeholder='Input Transaction Hash' onChange={handleChange} />


                </div> */}
                <div className='w-full  flex  border outline-none  border-black rounded-sm my-4 p-4'>
                    <input type="text" name="receiverBank" id="" className='w-full outline-none px-1 text-[12px]' placeholder='Input Your Bank Name' onChange={handleChange} />


                </div>
                <div className='w-full  flex  border outline-none  border-black rounded-sm my-4 p-4'>
                    <input type="text" name="receiverAccountName" id="" className='w-full outline-none px-1 text-[12px]' placeholder='Input Your Bank Account Name' onChange={handleChange} />


                </div>
                <div className='w-full  flex  border outline-none  border-black rounded-sm my-4 p-4'>
                    <input type="text" name="receiverAccountNumber" id="" className='w-full outline-none px-1 text-[12px]' placeholder='Input Your Bank Account Number' onChange={handleChange} />


                </div>

                <button className='bg-faq-bg-dark p-2 rounded-md  capitalize text-white w-full font-african my-4 py-4' onClick={() => {
                    if(!transactionFormData?.receiverBank || !transactionFormData?.receiverAccountName || !transactionFormData?.receiverAccountNumber) return toast.error("Account name, Account bank and Account number")
                    setUserModalState(SellOrderTransactionHash)
                }}>Swap</button>



            </div>
        </div>
    )
}

export default SellTransferFundsModal