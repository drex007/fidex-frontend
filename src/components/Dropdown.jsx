import React, { useState, useContext } from 'react'
import { getStableCoinLogo } from '../constants'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { AppContext } from '../ContextAPI'

const Dropdown = ({ data }) => {
    const { transactionFormData, setTransactionFormData } = useContext(AppContext)
    const [show, setShow] = useState(false)
    const handleSelect = (e) => {
        const network = e?.networkName
        const asset = e?.assetName
        const wallet = e?.walletAddress
        setTransactionFormData({
            ...transactionFormData, network: network, transactionAsset: asset, agentWallet: wallet
        })

    }

    return (
        <div className='lg:flex-[0.5] relative items-center lg:mt-0 mt-2'>
            <div className='flex space-x-2 items-center justify-between cursor-pointer border border-black p-3' onClick={() => setShow(!show)} >
                <p className='text-black text-[11px] flex '>{transactionFormData?.transactionAsset !== "" ? <img src={getStableCoinLogo(transactionFormData?.transactionAsset)} className='w-[15px] mr-1' /> : ""} {transactionFormData?.transactionAsset === "" ? "Select Asset" : `${transactionFormData?.transactionAsset} - ${transactionFormData?.network}`}</p>
                <p>{!show ? <AiOutlineCaretDown className='cursor-pointer' /> : <AiOutlineCaretUp className='cursor-pointer' />} </p>
            </div>
            {show && <div className='absolute z-50 w-full'>
                <ul className={`${!show ? 'max-h-[40px]' : 'min-h-[40px]'}  outline-none border lg:my-0 my-2 lg:px-1 px-4 lg:py-2 py-3 border-gray-100 text-black rounded-sm bg-white text-[11px] shadow-xl`}>
                    {data?.map((e, i) => <li className='flex space-x-1 my-2 cursor-pointer hover:bg-gray-100 hover:py-1 hover:rounded-sm' onClick={() => {

                        handleSelect(e)
                        setShow(false)
                    }} key={i}>
                        <img src={getStableCoinLogo(e?.assetName)} className='w-[15px]' />
                        <p>{e?.assetName}-{e?.networkName}</p>


                    </li>)}

                </ul>
            </div>}

        </div>
    )
}

export default Dropdown
