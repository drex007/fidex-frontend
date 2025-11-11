import React from 'react'
import { customerSupport } from '../assets'

const ReachOutToUs = () => {
    return (
        <div className=' lg:px-16 px-4 lg:mt-40  lg:mb-24  mb-4'>
            <div className='relative min-h-[200px] bg-gray-100 rounded-3xl lg:flex lg:justify-between items-center'>
                <div className='lg:w-4/5 p-8'>
                    <p className='font-poppins lg:text-2xl text-xl my-4 '>Reach Out To Us</p>
                    <p className='font-spacegrotesk lg:w-2/5 w-full lg:text-[15px] text-[12px]'>Contact us today to learn more about how our platform and also for support</p>
            
                </div>
                    <div className='lg:w-1/5 w-full px-4'>
                        <button className='bg-faq-bg-dark p-4 rounded-md  capitalize text-white my-4 font-poppins w-full'> Contact Us</button>

                    </div>

            </div>

        </div>
    )
}

export default ReachOutToUs