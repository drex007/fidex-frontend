import React from 'react'
import { card, edit, verify } from '../assets'

const HowItWorks = () => {
    return (
        <div className='lg:px-16 px-4 mt-24 mb-4' id='how-it-works'>
            <div className='lg:flex grid   lg:flex-1 lg:justify-between'>
                <div className='flex-[0.5] lg:px-0 px-12'>
                    <p className='lg:w-2/3 capitalize font-african bg-faq-bg-dark  text-white lg:text-[25px] lg:px-0 px-2 text-[20px] rounded-sm min-h-[50px] flex justify-center items-center'>How it Works?</p>
                </div>
                <div className='flex-[0.5] flex justify-center lg:mt-0 mt-8'>
                    <p className=' font-spacegrotesk flex justify-center w-full lg:w-5/6 lg:text-[15px] text-[15px]'>
                        With Fidex, Naira off ramp is simple and straightforward. Follow these steps to complete your transactions with ease.
                    </p>
                </div>

            </div>

            <div className='lg:mt-16 mt-2 lg:flex justify-between lg:bg-faq-bg-dark rounded-3xl p-4 '>
                <div className='bg-faq-bg-dark rounded-3xl p-4 lg:my-0 my-3'>
                    <div className='flex space-x-4 items-center lg:justify-start justify-center'>
                        <p className='font-african capitalize text-white my-4'>Sign up</p>
                        <img src={edit} className='w-[20px]' />
                    </div>
                    <p className='font-spacegrotesk text-white lg:w-2/3 flex justify-center  lg:p-0 p-4 lg:text-[15px] text-[13px]'>Just download our mobile app and sign up with only your BVN and email address.</p>
                </div>

                <div className='bg-faq-bg-dark rounded-3xl p-4 lg:ny-0 my-3'>

                    <p className='font-spacegrotesk text-white lg:w-2/3 w-full flex justify-center lg:p-0 p-4 lg:text-[15px] text-[13px]'> Desposit your stable assets and instantly get credited with naira into your fidex wallet. </p>
                    <div className='flex space-x-3 items-center lg:justify-start justify-center'>
                        <p className='font-african capitalize text-white my-4'>Deposit USDC or USDT</p>
                        <img src={card} className='w-[20px]' />

                    </div>

                </div>
                <div className='bg-faq-bg-dark rounded-3xl p-4'
                
                
                >
                    <div className='flex space-x-3 items-center lg:justify-start justify-center'>
                        <p className='font-african capitalize text-white my-4'>Spend</p>
                        <img src={verify} className='w-[20px]' />
                    </div>
                    <p className='font-spacegrotesk text-white lg:w-2/3 w-full lg:text-[15px] text-[13px] lg:p-0 p-4 '>You can transfer your naira to your choiced banks, or use it for utility payments</p>
                </div>

            </div>


        </div>
    )
}

export default HowItWorks