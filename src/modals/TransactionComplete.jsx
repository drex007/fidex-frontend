import React, {useContext} from 'react'
import { tick } from '../assets'
import { AppContext } from '../ContextAPI'
import { BuyModal, BuyTransactionReceipt } from '../modalConfigs'

const TransactionComplete = () => {
    const { userModalState, setUserModalState } = useContext(AppContext)
    const removeLocalStorageTransaction = () =>{
        localStorage.removeItem("pending-transaction")
    }
    return (
        <div className='flex justify-end'>
            <div className='px-3 py-4  lg:w-4/6  w-full 3xl:w-3/5 shadow-lg border rounded-xl shadow-gray-400  text-[15px]'>
                <div className='flex justify-between'>
                    <p></p>
                    <p className='capitalize font-african text-[15px]'>Transaction Complete</p>
                    <p></p>
                </div>

                <div className='flex justify-center my-3'>
                    <img src={tick} className='w-[45px] h-[50px]' />
                </div>
                <p className='font-spacegrotesk text-gray-500  text-[15px] font-semibold py-2 flex justify-center  mx-4'>Transaction successful. Please check your wallet.</p>
                <button className='bg-white border border-black text-black p-2 rounded-md  capitalize  w-full font-african py-4 my-2' onClick={()=> setUserModalState(BuyTransactionReceipt)}>View Transaction</button>

                <button className='bg-faq-bg-dark p-2 rounded-md  capitalize text-white w-full font-african py-4' onClick={()=>{
                    removeLocalStorageTransaction()
                    setUserModalState(BuyModal)
                }}>New Swap</button>


             

            </div>
        </div>
    )
}

export default TransactionComplete