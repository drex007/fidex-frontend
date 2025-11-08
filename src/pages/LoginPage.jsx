import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminLoginAction } from '../Api/admin/admin.api'
import { FaRegEyeSlash } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import ButtonLoader from '../components/button/buttonLoader';

const LoginPage = () => {
    const { authLoading, authData } = useSelector(state => state.admin)
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    })


    const handleChange = (e) => {

        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    return (
        <div className='sticky items-center h-screen flex justify-center w-full  bg-white  3xl:px-[25%] '>
            <div className='fixed -z-10 text-[700px] font-african blur-xl  overflow-y-hidden overflow-x-hidden 3xl:px-[50%]'>
                <p className='text-gray-500'>Fidex</p>
            </div>
            <div className='w-5/6 flex justify-center'>
                <div className='min-h-[400px] shadow-2xl px-2 bg-white flex flex-col items-center w-2/6 py-4 rounded-lg'>
                    <p className='font-african text-black'>Fidex</p>
                    <p className='text-black my-4'>Login To Account</p>

                    <div className='flex flex-col justify-start w-4/5'>
                        <p className=' mb-1 text-[13px]'>Email</p>
                        <div className='w-full py-2'>
                            <input type="text" name='email' className='w-full outline-none p-3 rounded-sm border text-[13px] border-gray-300  text-black' placeholder='Enter Username' onChange={(e) => handleChange(e)} />

                        </div>
                        <p className=' mb-1 text-[13px]'>Password</p>
                        <div className='w-full px-2 py-2 flex space-x-2 rounded-sm border border-gray-300 items-center'>
                            <input type={`${showPassword == true ? "text" : "password"}`} name='password' className='outline-none p-1 bg-none  w-11/12 text-[13px] text-black' placeholder='Enter Password' onChange={(e) => handleChange(e)} />
                            <div className='w-1/12'>
                                {showPassword && <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} className='cursor-pointer' />}
                                {!showPassword && <BsEye onClick={() => setShowPassword(!showPassword)} className='cursor-pointer' />}
                            </div>

                        </div>
                    </div>

                    <div className='w-full px-9 my-4'>

                        {authLoading && <ButtonLoader mt={100} className="pt-4" />}

                        {!authLoading && <button className='flex justify-center bg-black w-full py-3 text-[13px] rounded-md font-african  text-white' onClick={() => dispatch(adminLoginAction({ formdata, navigate }))}>LOG IN</button>}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default LoginPage