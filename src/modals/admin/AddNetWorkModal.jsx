import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../ContextAPI'
import { useDispatch } from 'react-redux'
import { addNetworkAssetAction } from '../../Api/admin/admin.api'


const AddNetworkModal = () => {
    const { adminDashBoardModal, setAdminDashBoardModal } = useContext(AppContext)
    const dispatch = useDispatch()
    const [formdata, setFormdata] = useState({
        assetName: null,
        networkName: null,
        walletAddress: null,
        setAdminDashBoardModal: setAdminDashBoardModal
    })


    const handleChange = (e) => {

        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setFormdata({ ...formdata, assetName: "USDT", networkName: "Solana" })
    }, [])


    return (
        <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-spacegrotesk'>
            <div className='bg-white shadow-2xl min-h-[200px] rounded-md w-2/6 p-4'>
                <p className='font-african my-3 '>Network Details</p>

                <p className='text-black text-[12px]'>Asset</p>
                <div className='w-full flex border border-gray-400 p-2 my-2 rounded-md'>
                    <select className='w-full bg-transparent outline-none' name='assetName' onChange={handleChange}>
                        <option className='Solana'>USDT</option>
                        <option className='Binance Smart Chain'>USDC</option>
                    </select>
                    {/* <input type="text" name="assetName" id="" className='outline-none  w-full text-[12px]' placeholder='E.g USDT' onChange={(e) => handleChange(e)} /> */}
                </div>

                <p className='text-black text-[12px]'>Network Name</p>
                <div className='w-full flex border border-gray-400 p-2 my-2 rounded-md'>
                    <select className='w-full bg-transparent outline-none' name='networkName' onChange={handleChange}>
                        <option className='Solana'>Solana</option>
                        <option className='Binance (BSC)'>Binance (BSC)</option>
                        <option className='Base'>Base</option>
                    </select>
                    {/* <input type="text" name="networkName" id="" className='outline-none  w-full text-[12px]' placeholder='E.g Polygon' onChange={(e) => handleChange(e)} /> */}
                </div>
                <p className='text-black text-[12px]'>Wallet Address</p>
                <div className='w-full flex border border-gray-400 p-2 my-2 rounded-md'>
                    <input type="text" name="walletAddress" id="" className='outline-none w-full text-[12px]' placeholder='0x00000000000000000000000000000' onChange={(e) => handleChange(e)} />
                </div>
                {/* <p className='text-black text-[12px]'>Network Icon [Optional]</p>
                <div className='w-full flex border border-gray-400 p-2 my-2 rounded-md'>
                    <input type="file" name="" id="" className='outline-none  w-full text-[12px]' placeholder='E.g USDT' />
                </div> */}

                <div className='flex justify-end     space-x-2 my-3'>
                    <button className='font-african text-black border border-black  text-[10px] bg-white p-2 rounded-sm capitalize' onClick={() => setAdminDashBoardModal(null)}>Cancel</button>
                    <button className='font-african text-white text-[10px] bg-black p-2 rounded-sm capitalize' onClick={() => dispatch(addNetworkAssetAction(formdata))}>Add Network</button>
                </div>

            </div>


        </div>
    )
}

export default AddNetworkModal