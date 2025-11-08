import React from 'react'
import { awards, secure, transaction, woman } from '../assets'

const WhyChooseKyenx = () => {
    return (
        <div className='lg:mt-48 lg:px-16 px-4 lg:my-16 my-8 mt' id='benefits'>
            <div className='lg:my-28 lg:flex  lg:flex-1 lg:justify-between'>
                <div className='flex-[0.5] lg:px-0 px-4'>
                    <p className='lg:w-2/3 capitalize font-african bg-faq-bg-dark  text-white lg:text-[25px] text-[17px] lg:px-0 px-2  rounded-sm min-h-[50px] flex justify-center items-center'>Why Choose Fidex ?</p>
                </div>
                <div className='flex-[0.5] flex justify-center lg:my-0 my-8'>
                    <p className=' font-spacegrotesk lg:text-[20px]'>
                        Discover the powerful features that make Fidex the most secure, fast, and convenient platform for exchanging stablecoins and Naira.
                    </p>
                </div>

            </div>

            <div className='hidden lg:flex justify-between flex-1 space-x-8 mt-16 mb-8'>
                <div className="flex-[0.5] flex bg-faq-bg-dark p-8 rounded-2xl text-[20px] font-spacegrotesk">
                    <div>
                        <p className='bg-white  rounded-lg max-w-[250px] px-3 py-1 2xl:text-[25px] text-[20px]  font-semibold flex justify-start'>Ensure Secured Transactions</p>
                        {/* <p className='p-2 bg-white rounded-lg max-w-[250px] font-semibold flex justify-start text-[25px]'>at the core</p> */}
                        <p className='text-white mt-16 text-[15px] 2xl:text-[20px] w-full 2xl:w-2/3 '>We prioritize your security with KYC and strong transaction encryption.</p>


                    </div>
                    <img src={secure} className='w-1/5' />

                </div>

                <div className="flex-[0.5] flex justify-between  bg-gray-100 p-8 rounded-xl text-[20px] font-spacegrotesk shadow-xl shadow-gray">
                    <div>
                        <p className='bg-faq-bg-dark p-2 rounded-lg max-w-[250px] 2xl:text-[25px] text-[20px]  font-semibold flex justify-start text-white'>Quick Transactions With Fidex</p>
                        {/* <p className='p-2 bg-faq-bg-dark rounded-lg max-w-[200px] font-semibold flex justify-start text-[24px] text-white'>Transactions</p> */}
                        <p className='text-black mt-16 text-[15px] 2xl:text-[20px] w-full 2xl:w-2/3'>Quick transactions with fast confirmation times.</p>


                    </div>
                    <img src={transaction} className='w-1/5' />

                </div>




            </div>
            <div className='hidden lg:flex justify-between flex-1 space-x-8 mt-28'>

                <div className="flex-[0.5] flex  bg-gray-100 p-8 rounded-2xl text-[20px] font-spacegrotesk shadow-xl shadow-gray">
                    <div>
                        <p className='bg-faq-bg-dark p-2 rounded-lg max-w-[250px]  2xl:text-[25px] text-[20px] font-semibold flex justify-start text-white'>24 / 7 Customer Support</p>
                        {/* <p className='p-2 bg-faq-bg-dark rounded-lg max-w-[250px] font-semibold px-3 text-[25px] text-white'>On Your Terms</p> */}
                        <p className='text-black mt-16 text-[15px] 2xl:text-[20px] w-full 2xl:w-2/3'>Dedicated customer support across all social media platforms for any enquiries</p>


                    </div>
                    <img src={woman} className='w-1/5' />

                </div>
                <div className="flex-[0.5] flex justify-between bg-faq-bg-dark p-8 rounded-2xl text-[20px] font-spacegrotesk">
                    <div>
                        <p className='bg-white  rounded-lg max-w-[250px] 2xl:text-[25px] text-[20px]  font-semibold flex justify-start py-1 px-2'>Very Competitive Naira Rate</p>
                        {/* <p className=' bg-white rounded-lg max-w-[250px]  font-semibold flex justify-start text-[25px] py-1 px-2'>Market Rate</p> */}
                        <p className='text-white mt-16 text-[15px] 2xl:text-[20px] w-full 2xl:w-2/3'>Best rates in the crypto and black market space.</p>


                    </div>
                    <img src={awards} className='w-1/5' />

                </div>




            </div>



        </div>
    )
}

export default WhyChooseKyenx
