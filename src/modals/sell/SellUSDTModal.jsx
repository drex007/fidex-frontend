import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../ContextAPI'
import { search } from '../../assets'
import { BuyModal, KycModal, OrderInProgessNotSuccessful, SellModal, SellOrderInProgress, SellTransferFunds } from '../../modalConfigs'
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { BuyAndSellRateDifference, formatCurrency, nairaSymbol } from '../../constants'
import toast from 'react-hot-toast'
import ButtonLoader from '../../components/button/buttonLoader'
import { getUserKycStatusAction } from '../../Api/user/user.api'
import Dropdown from '../../components/Dropdown'

const SellUSDTModal = () => {
    const [currentState, setcurrentState] = useState(1)
    const { userModalState, setUserModalState, transactionFormData, setTransactionFormData } = useContext(AppContext)
    const { exchangeRate, usersFee, assets, accounts, userKycStatus } = useSelector(state => state.user)

    const dispatch = useDispatch()

    const handleSelect = (e) => {
        const network = e?.target.value.split('-')[0]
        const asset = e?.target.value.split('-')[1]
        const wallet = e?.target.value.split('-')[2]
        setTransactionFormData({
            ...transactionFormData, network: network, transactionAsset: asset, agentWallet: wallet
        })

    }

    const handleChange = (e) => {
        setTransactionFormData({
            ...transactionFormData, [e.target.name]: e.target.name === "email" ? (e.target.value).toLowerCase() : e.target.value
        })
    }

    const handlePay = (e) => {
        const amount = e?.target.value
        const assetToSend = amount * Number((exchangeRate?.rate) - (exchangeRate?.rate * usersFee[0]?.fee) - (exchangeRate?.rate * BuyAndSellRateDifference)) // Remove SellRate Diff and plaform percentage fee

        setTransactionFormData({
            ...transactionFormData, amountPaid: Number(assetToSend).toFixed(2), amountReceived: Number(amount)

        })
    }

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem("pending-transaction"))
        if (item) {
            if (item?.transactionType === "Buy") {
                setUserModalState(SellOrderInProgress)

            } else {
                setUserModalState(OrderInProgessNotSuccessful)
            }
        }


    }, [])


    useEffect(() => {

        setTransactionFormData({
            ...transactionFormData, transactionAsset: assets ? assets[0]?.assetName : "USDT", network: assets ? assets[0]?.networkName : "", amountPaid: 0,
            fee: usersFee ? usersFee[0]?.fee : 0, nairaToDollarRate: exchangeRate ? Math.ceil(Number(exchangeRate?.rate - (exchangeRate?.rate * 0.025))) : 0, transactionType: "Buy"

        })


    }, [usersFee, exchangeRate])

    const platformFee = Math.ceil(usersFee[0]?.fixedRate * (exchangeRate?.rate - (exchangeRate?.rate * BuyAndSellRateDifference))) // Fixedrate * (exchangeRate - (exchangeRate * % difference in Buy and Sell Rate))


    return (
        <div className='flex lg:justify-end'>
            <div className='rounded-xl shadow-lg border min-h-[450px] lg:w-4/6 w-full 3xl:w-3/5 shadow-gray-400 p-4'>
                <div className='flex flex-1 mt-2'>
                    <div className={`${currentState == 0 ? "bg-faq-bg-dark" : "bg-gray-100"} flex-[0.5]  px-3 py-4 rounded-md flex space-x-3 items-center justify-center cursor-pointer`} onClick={() => setUserModalState(BuyModal)}>
                        <p className={`${currentState == 0 ? "text-white" : "text-black"} font-african`}>Buy</p>
                        <BsArrowDownLeft size={20} className={`${currentState == 0 ? "text-white" : ""}`} />
                    </div>
                    <div className={`${currentState == 1 ? "bg-faq-bg-dark" : "bg-gray-100"} flex-[0.5]  px-3 py-4 rounded-md flex space-x-3 items-center justify-center cursor-pointer`} onClick={() => setUserModalState(SellModal)}>
                        <p className={`${currentState == 1 ? "text-white" : "text-black"} font-african`}>Sell</p>
                        <BsArrowUpRight size={20} className={`${currentState == 1 ? "text-white" : ""}`} />
                    </div>
                </div>

                <div className='flex justify-between my-3 w-full p-4 border outline-none border-black rounded-sm font-spacegrotesk text-gray-400'>
                    <input type="text" inputMode='numeric' min={10} className='w-2/3 outline-none text-[12px] text-black' placeholder='You Pay' onChange={handlePay} />
                    <p className='font-spacegrotesk text-[12px] text-black'> {transactionFormData?.transactionAsset} </p>
                </div>
                <div className='flex justify-between my-3 w-full p-4 border outline-none border-black rounded-sm font-spacegrotesk text-gray-400 '>
                    <input type="text" className='w-2/3 outline-none text-[12px] bg-transparent text-black' placeholder='You Get' disabled />
                    <p className='font-spacegrotesk text-[12px] text-black'>{formatCurrency(transactionFormData?.amountPaid > platformFee ? transactionFormData?.amountPaid - platformFee : transactionFormData?.amountPaid, "NGN")} NGN</p>
                </div>

                <div className='lg:flex lg:flex-1  lg:space-x-2 justify-between my-3 w-full border-black rounded-sm font-spacegrotesk text-gray-400'>
                    <p className='flex-[0.5] lg:p-2 p-4 bg-faq-bg-dark text-white rounded-sm flex justify-center text-[15px]'> 1  {transactionFormData?.transactionAsset}   =  {Math.ceil(exchangeRate?.rate - (exchangeRate?.rate * BuyAndSellRateDifference) - (exchangeRate?.rate * usersFee?.[0]?.fee))}  NGN</p>
                    <Dropdown data={assets} />
                </div>
                <div className='flex justify-between my-3 w-full p-4 border outline-none border-black rounded-sm font-spacegrotesk text-gray-400'>
                    <input type="text" name='email' className='w-full outline-none text-[12px] text-black' placeholder='Input Email Address' onChange={handleChange} />
                </div>
                <p className='font-spacegrotesk my-4 text-gray-400 text-[12px] font-semibold '>Platform Fee : {usersFee ? usersFee[0]?.fixedRate : 0} USDT</p>

                {userKycStatus === "loading" ? <ButtonLoader />
                    :

                    <button className='bg-faq-bg-dark px-2 py-4 rounded-sm  capitalize text-white w-full font-african' onClick={async () => {
                        if (!transactionFormData?.email || !transactionFormData?.amountReceived) return toast.error("Wallet address, email, amount is required")
                        if (transactionFormData?.amountReceived > 2000) return toast.error("For transactions above $2000, please contact support for OTC trading.")
                        console.log(transactionFormData, "FORMDATA")
                        const res = await dispatch(getUserKycStatusAction(

                            {
                                email: transactionFormData?.email,
                                setUserModalState: setUserModalState,
                                routeTo: SellTransferFunds



                            }
                        ))




                    }}>Swap</button>

                }



            </div>
        </div>
    )
}

export default SellUSDTModal