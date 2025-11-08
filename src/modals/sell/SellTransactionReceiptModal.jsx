import React from 'react'
import { arrrowBack, copy, telegram, tick, whatsapp } from '../../assets'
import { useSelector } from 'react-redux'

const SellOrderTransactionReceiptModal = () => {
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
                    <p className='font-spacegrotesk text-gray-500 py-1'>You Sent</p>
                    <p className='font-spacegrotesk text-black'>{singleTransactionById?.amountReceived} {singleTransactionById?.transactionAsset}</p>

                </div>
                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>You Received</p>

                    <p className='font-spacegrotesk text-black'>{singleTransactionById?.amountPaid} NGN</p>

                </div>


                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Transaction Hash <span className='text-red-600'>*</span></p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{singleTransactionById?.transactionHash}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>

                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Transaction ID <span className='text-red-600'>*</span></p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black'>{singleTransactionById?.transactionId}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>


                <div className='rounded-md p-2  border border-black my-3'>
                    <p className='font-spacegrotesk text-gray-500 py-1'>Agents Wallet</p>
                    <div className='flex justify-between'>
                        <p className='font-spacegrotesk text-black text-[12px]'>{singleTransactionById?.agentWallet}</p>
                        <img src={copy} className='cursor-pointer w-[20px]' />

                    </div>
                </div>

                <div className='bg-faq-bg-dark  rounded-sm  my-4 p-4 flex flex-col justify-center items-center '>
                    <p className='font-spacegrotesk text-white lg:text-[13px] text-[11px]  '>Nudge Agent On Whatsapp Or Telegram. <span className='font-semibold'>CLICK HERE</span></p>
                    <div className='flex space-x-3 my-3'>
                        <img src={whatsapp} className='lg:w-[30px] w-[20px] cursor-pointer' />
                        <img src={telegram} className='lg:w-[30px] w-[20px] cursor-pointer' />

                    </div>

                </div>


            </div>
        </div>
    )
}

export default SellOrderTransactionReceiptModal