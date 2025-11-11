import React from 'react'

const Footer = () => {
    return (
        <div className='lg:px-16 px-4 lg:my-16 my-8 '>
            <div className='bg-faq-bg-dark min-h-[150px] rounded-3xl'>
                <div className='lg:flex lg:justify-between p-8'>
                    <p className='text-[20px] font-poppins font-semibold text-white flex justify-center'>Fidex</p>
                    <div className='font-spacegrotesk text-balance lg:flex lg:space-x-4'>
                        <div>
                            <p className='cursor-pointer text-white flex justify-center my-2 lg:my-0' >Swap</p>
                            <hr className='hidden lg:flex bg-faq-bg-dark h-[2px]' />
                        </div>
                        <div>
                            <p className='cursor-pointer text-white flex justify-center my-2 lg:my-0'>How it Works</p>
                            <hr className='hidden lg:flex bg-faq-bg-dark h-[2px]' />
                        </div>
                        <div>
                            <p className='cursor-pointer text-white flex justify-center my-2 lg:my-0' >Benefits</p>
                            <hr className='hidden lg:flex bg-faq-bg-dark h-[2px]' />
                        </div>
                        <div>
                            <p className='cursor-pointer text-white flex justify-center my-2 lg:my-0'>FAQ</p>
                            <hr className='hidden lg:flex bg-faq-bg-dark h-[2px]' />
                        </div>
                    </div>
                    <div className='flex justify-center space-x-2'>
                        {/* <p className='w-[25px] h-[25px] flex justify-center items-center bg-white rounded-3xl font-semibold'>in</p> */}
                        <p className='w-[25px] h-[25px] flex justify-center items-center bg-white rounded-3xl font-bold'>f</p>
                        <p className='w-[25px] h-[25px] flex justify-center items-center bg-white rounded-3xl font-semibold'>x</p>


                    </div>
                </div>

                <div className='lg:px-8 px-0'>
                    <hr className='lg:my-8  w-full' />

                </div>
                <div className="lg:flex lg:space-x-3 p-8">
                    <p className='text-white font-spacegrotesk text-[14px] lg:my-0 my-4 flex justify-center'>© 2025 Fidex. All Rights Reserved.</p>
                    <p className='text-white font-spacegrotesk text-[14px] flex justify-center'>Privacy Policy</p>
                </div>

            </div>

        </div>
    )
}

export default Footer