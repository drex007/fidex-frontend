import React from 'react'
import { customerSupport } from '../assets'

const ReachOutToUs = () => {
    return (
        <div className=' lg:px-16 px-4 lg:mt-40  lg:mb-24  mb-4'>
            <div className='relative min-h-[250px] bg-gray-100 rounded-3xl'>
                <div className=' p-8'>
                    <p className='font-african lg:text-3xl text-2xl my-4 '>Reach Out To Us</p>
                    <p className='font-spacegrotesk lg:w-2/5 w-full'>Contact us today to learn more about how our platform and also for support</p>
                    <div className='lg:w-1/5 w-full'>
                        <button className='bg-faq-bg-dark p-4 rounded-md  capitalize text-white my-4 font-african w-full'> Contact Us</button>

                    </div>
                </div>
                <div className='hidden lg:flex relative  justify-end'>
                    <img src={customerSupport} className='absolute max-w-[200px] -mt-[10%] 2xl:-mt-[13%] 3xl:-mt-[11%]' />
                </div>

            </div>

        </div>
    )
}

export default ReachOutToUs