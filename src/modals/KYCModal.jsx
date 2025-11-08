import React, { useState, useContext, useEffect } from 'react'
import { kycCirlce } from '../assets'
import { AppContext } from '../ContextAPI'
import { KycCongratulations } from '../modalConfigs'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { dojahKycAction } from '../Api/user/user.api'
import ButtonLoader from '../components/button/buttonLoader'

const KYCModal = () => {
    const { userModalState, setUserModalState, transactionFormData, setTransactionFormData } = useContext(AppContext)
    const { kycData } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [formdata, setFormdata] = useState({
        bvn: "",
        email: ""
    })

    const handleChange = (e) => {
        setTransactionFormData({
            ...transactionFormData, [e.target.name]: e.target.value
        })
    }

    const handleChangeTwo = (e) => {
        setFormdata({
            ...formdata, [e.target.name]: e.target.value
        })

    }

    useEffect(() => {
        setFormdata({ ...formdata, email: transactionFormData?.email })

    }, [])





    return (
        <div className='flex lg:justify-end justify-center'>
            <div className='rounded-xl shadow-lg border min-h-[250px] lg:w-3/5 w-full shadow-gray-400 p-4'>
                <p className='flex justify-center font-african'>KYC</p>

                <div className='flex justify-center my-3'>
                    <img src={kycCirlce} className='w-[30px] h-[30px]' />
                </div>
                <p className='text-[12px] font-spacegrotesk text-gray-500'>Seems you haven't been verified. Please proceed with the kyc process.<br />
                    <br></br>
                    <span className='text-red-600'>*</span>Ensure the name on the bvn you will be providing is <span className='font-semibold'>same</span> with the account name to receive or send <span className='font-semibold'>Naira</span> from.

                </p>

                <div className='flex justify-between my-3 w-full p-3 border outline-none border-black rounded-sm font-spacegrotesk text-gray-400'>
                    <input type="text" name='bvn' className='w-ful outline-none text-[12px] p-1 text-black' placeholder='Input BVN' onChange={handleChangeTwo} />
                </div>
                {kycData === "loading" ?

                    <ButtonLoader /> :

                    <button className='bg-faq-bg-dark p-4 rounded-sm  capitalize text-white w-full font-african' onClick={async () => {
                        if (formdata?.bvn.length !== 11) return toast.error("BVN length must be 11")
                        const res = await dispatch(dojahKycAction(
                            {
                                formdata: formdata,
                                setUserModalState: setUserModalState

                            }))

                    }}>Next</button>

                }




            </div>
        </div>
    )
}

export default KYCModal