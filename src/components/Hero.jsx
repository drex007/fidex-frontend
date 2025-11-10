import React, { useContext, useEffect } from 'react'
import { herobg,iosMockup, iosdownload, androidDownload } from '../assets'
import fadeIn from '../Variant'
import { motion } from 'framer-motion'

import { AppContext } from '../ContextAPI'


const bounceTransition = {
    y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeOut",
    }


}


const xbounceTransition = {
    x: {
        duration: 7,
        repeat: Infinity,
        ease: "easeOut",
    }


}


const zbounceTransition = {
    y: {
        duration: 10,
        repeat: Infinity,
        ease: "easeOut",
    }
    


}





const Hero = () => {
    const { userModalState, setUserModalState } = useContext(AppContext)


  

    return (
        <div id='swap' className=''>
          
            <div className='lg:flex lg:flex-1 lg:justify-between lg:px-16 px-4 w-full'>
            <motion.div
              variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            
            >
                      <div className='lg:flex-[0.6] capitalize font-african lg:mt-20 3xl:mt-40'>
                    <p className='relative text-faq-bg-dark  lg:text-[60px] 2xl:text-[80px] text-[30px] -z-10'>Instantly Swap Stablecoins To Naira</p>
                    <p className='font-spacegrotesk lg:text-[18px] text-[12px] mt-4'>Fast, Secure, and Simple. Deposit USDC or USDT and get credited with Naira at the best rate.</p>
                    <div className='hidden lg:flex   mt-4'>
                        <img
                        src={iosdownload} alt="" className='w-[150px] h-[60px]' />
                        <img src={androidDownload} alt="" className='w-[150px] h-[60px]' />
                     </div>
                </div>
            </motion.div>
             <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
                   <div className='lg:flex-[0.4] lg:my-0 mt-8 '>
                    <img src={iosMockup} alt="" srcset="" className='lg:flex lg:mx-auto'  />
                     <div className='flex lg:hidden justify-center'>
                        <img
                        src={iosdownload} alt="" className='w-[150px] h-[70px]' />
                        <img src={androidDownload} alt="" className='w-[150px] h-[70px]' />
                     </div>

                </div>
             </motion.div>
        
               

            </div>
     
   
        </div>
    )
}

export default Hero

