import React, { useState, useContext } from 'react'
import { successVerify } from '../assets'
import { AppContext } from '../ContextAPI'
import { BuyModal, BuyTransferFunds } from '../modalConfigs'
import { useDispatch, useSelector } from 'react-redux'
import { setUserKycStatusToNull } from '../Api/user/user.api'

const KYCSuccessModal = () => {

    const { userModalState, setUserModalState } = useContext(AppContext)
    const { kycData } = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <div className='flex lg:justify-end'>
            <div className='rounded-xl shadow-lg border min-h-[250px] lg:w-3/5 w-full shadow-gray-400 p-4'>
                <p className='flex justify-center font-african'>KYC</p>

                <div className='flex justify-center my-3'>
                    <img src={successVerify} className='w-[40px] h-[40px]' />
                </div>
                <p className='text-[15px] font-spacegrotesk text-gray-500 flex justify-center font-semibold'>Congratulations! You have been verified.</p>
                <p className='my-2 font-spacegrotesk text-[15px] text-gray-500 font-semibold flex justify-center'>Name on BVN : {kycData?.first_name}  {kycData?.last_name}</p>


                <button className='bg-faq-bg-dark p-2 rounded-md  capitalize text-white w-full font-african my-4 py-4' onClick={() => {
                    dispatch(setUserKycStatusToNull({}))
                    setUserModalState(BuyModal)
                }}>Let's Transact!!!</button>



            </div>
        </div>
    )
}

export default KYCSuccessModal