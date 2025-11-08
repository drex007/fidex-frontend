import React, { useContext, useEffect, useState } from 'react'
import { arrrowBack, copy } from '../../assets'
import { AppContext } from '../../ContextAPI'
import { SellModal, SellOrderInProgress, SellOrderTransactionHash } from '../../modalConfigs'
import { useDispatch, useSelector } from 'react-redux'
import { userSellCryptocurrencyAction } from '../../Api/user/user.api'
import { BsArrowDown, BsCopy } from 'react-icons/bs'
import toast from 'react-hot-toast'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ButtonLoader from '../../components/button/buttonLoader'

const SellOrderTransactionHashModal = () => {
    const { userModalState, setUserModalState, transactionFormData, setTransactionFormData } = useContext(AppContext)
    const { assets } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)


    const setLocalStorageTransaction = (data) => {
        localStorage.setItem("pending-transaction", JSON.stringify(data))
    }

    const handleChange = (e) => {
        setTransactionFormData({
            ...transactionFormData, [e.target.name]: e.target.value
        })
    }
    useEffect(() => {

        setTransactionFormData({
            ...transactionFormData,
            walletAddress: "walletAddress",
            transactionHash: "",
        })

    }, [])

    return (
        <div className='flex justify-end'>
            <div className='px-3 py-4  lg:w-3/5 w-full shadow-lg border rounded-xl shadow-gray-400'>
                <div className='flex justify-between'>
                    <img src={arrrowBack} className='cursor-pointer' onClick={() => setUserModalState(SellModal)} />
                    <p className='capitalize font-african text-[15px]'>Transfer Asset</p>

                    <p></p>
                </div>
                <div className='min-h-[10px]  flex flex-col justify-center w-full'>
                    <p className='font-spacegrotesk text-gray-700  lg:text-[11px] text-[11px] font-semibold py-2 w-full flex justify-center'>Send  <span className='mx-1 text-red-500'> {transactionFormData?.amountReceived} {transactionFormData?.transactionAsset}</span> <BsArrowDown /> </p>

                </div>
                <div className='min-h-[10px]  flex flex-col justify-center w-full'>
                    <p className='font-spacegrotesk text-gray-700  lg:text-[10px] text-[9px] font-semibold py-1 w-full flex justify-center'>Agent Wallet : {transactionFormData?.agentWallet}    <CopyToClipboard text={transactionFormData?.agentWallet}
                        onCopy={() => { toast.success("Wallet copied") }}>
                        <button className='ml-2'><BsCopy /></button>
                    </CopyToClipboard></p>

                    <p className='font-spacegrotesk text-gray-700  lg:text-[11px] text-[11px] font-semibold py-1 w-full flex justify-center'>Network : {transactionFormData?.network}</p>

                </div>

                <p className='text-[11px] font-spacegrotesk italic mt-3'><span className='text-red-500'>*</span> After transfer, enter the transaction hash for confrimation</p>
                <div className='w-full  flex  border outline-none  border-black rounded-sm my-1 p-4'>
                    <input type="text" name="transactionHash" id="" className='w-full outline-none px-1 text-[12px]' placeholder='Enter Transaction Hash' onChange={handleChange} />


                </div>

                <div>
                    {isLoading ? <ButtonLoader /> :
                        <button className='bg-faq-bg-dark p-2 rounded-md  capitalize text-white w-full font-african my-4 py-4' onClick={async () => {

                            if (!transactionFormData?.transactionHash || transactionFormData?.transactionHash === "") return toast.error("Transaction hash required")
                            setIsLoading(true)
                            const res = await dispatch(userSellCryptocurrencyAction(transactionFormData))
                            if (res !== null) {

                                setLocalStorageTransaction(res?.payload)
                                setIsLoading(false)
                                setUserModalState(SellOrderInProgress)

                            } else {
                                setIsLoading(false)
                            }
                        }}>Confirm Transaction</button>

                    }
                </div>



            </div>
        </div>
    )
}

export default SellOrderTransactionHashModal