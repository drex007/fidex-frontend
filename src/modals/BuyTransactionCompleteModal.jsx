import React from 'react'
import { arrrowBack, copy, telegram, tick, whatsapp } from '../assets'
import { useSelector } from 'react-redux'

const BuyTransactionCompleteFundsModal = () => {
    const { singleTransactionById } = useSelector(state => state.user)
    return (
        <div className='lg:flex lg:justify-end justify-center '>
            <div className='px-3 py-4  lg:w-4/6  3xl:w-3/5 shadow-lg border rounded-xl shadow-gray-400'>
                <div className='flex justify-between'>
                    <p></p>
                    <p className='capitalize font-african text-[15px]'>Transaction Complete</p>
                    <p></p>
                </div>

                <div className='flex justify-center my-3'>
                    <img src={tick} className='w-[40px] h-[40px]' />
                </div>
                <p className='font-spacegrotesk text-gray-500  text-[13px] font-semibold py-2 flex justify-center  mx-4'>Transaction successful. Please check your wallet.</p>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>You Received </p>
                    <p className='font-spacegrotesk text-black'>{singleTransactionById?.amountPaid} {singleTransactionById?.transactionAsset}</p>

                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Wallet </p>

                    <p className='font-spacegrotesk text-black text-[13px]'>{singleTransactionById?.walletAddress}</p>

                </div>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Transaction ID <span className='text-red-700'>*</span></p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{singleTransactionById?.transactionId}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Transaction Hash</p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{singleTransactionById?.transactionHash ? singleTransactionById?.transactionHash : "N/A"}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agent Bank Name </p>

                    <p className='font-spacegrotesk text-black'>{singleTransactionById?.agentBank}</p>

                </div>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agent Bank Account Name </p>

                    <p className='font-spacegrotesk text-black'>{singleTransactionById?.agentAccountName}</p>

                </div>



                <div className='rounded-md p-2  border border-black'>
                    <p className='font-spacegrotesk text-gray-500 py-1'> Agent Bank Account Number</p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{singleTransactionById?.agentAccountNumber}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>

                <div className='bg-faq-bg-dark  rounded-sm  my-4 p-4 flex flex-col justify-center items-center '>
                    <p className='font-spacegrotesk text-white lg:text-[12px] text-[10px]  '>For Pending Transactions Nudge Our Agent On Whatsapp Or Telegram With Your Transaction ID.  <span className='font-semibold'>CLICK HERE</span></p>
                    <div className='flex space-x-3 my-3'>
                        <img src={whatsapp} className='lg:w-[30px] w-[20px] cursor-pointer' />
                        <img src={telegram} className='lg:w-[30px] w-[20px] cursor-pointer' />

                    </div>

                </div>


            </div>
        </div>
    )
}

export default BuyTransactionCompleteFundsModal