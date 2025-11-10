import React, { useState } from 'react'
import fadeIn from '../Variant'
import { motion } from 'framer-motion'

const FAQ = () => {
    const [currentFaq, setCurrentFaq] = useState(8)
    const faqList = [1, 2, 3, 4, 5]
    const handleChangeFaq = (index) => {
        if (currentFaq === index) {
            setCurrentFaq(8)
        } else {
            setCurrentFaq(index)
        }
    }

    const Faq = [
        { title: "What is Fidex?", faq: "Fidex is a stablecoin swap platform that is AML-compliant, ensuring that all users swapping from stablecoin to Naira have their identities verified." },
        { title: "Does Fidex accept P2P transactions from other users?", faq: "Currently, all transactions are managed by Fidex, there's no intermediary for Naira off-ramps. In the future, Fidex plans to accept transactions from additional P2P users." },
        { title: "Is there a limit to the transaction amount?", faq: "Fidex allows transactions of any amount, so far your BVN was provided at the point of registration. You can also contact our OTC desk via WhatsApp or email for OTC trading." },
        // { title: "Does Fidex facilitate OTC transactions?", faq: "Yes, Fidex offers OTC services for transactions over USD 2,000. Please reach out to our OTC Desk through WhatsApp or email. For security, when you contact us via WhatsApp, we will verify our personnel through a two-factor authentication (2FA) process using your email." },
        // { title: "Having issues with Fidex?", faq: "Please contact our live customer support or reach us by email at: TXISSUES@Fidex.XYZ." }
    ]

    return (
<div className='overflow-x-hidden'>
    <motion.div

   variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
>
            <div className='lg:mt-32 lg:px-16 px-4 mt-16 mb-4' id='faq'>
            <div className='lg:flex  lg:justify-between lg:flex-1 grid items-center space-x-2'>
                <div className='lg:flex-[0.4] lg:px-0 px-10'>
                    <p className='px-8 capitalize font-african bg-faq-bg-dark  text-white text-[25px]  rounded-sm min-h-[50px] flex justify-center items-center'>FAQ</p>
                </div>
                <div className='flex justify-center'>
                    <p className='lg:text-[18px] text-[15px] lg:text-left  text-center font-spacegrotesk lg:w-4/5 w-full lg:my-0 my-3 flex justify-center'>
                        Here are some frequent questions we get and answers to them.
                    </p>
                </div>


            </div>

            <div className='lg:mt-16 mt-4'>

                {Faq?.map((e, i) => <div className={`${currentFaq === i ? 'bg-faq-bg-dark' : 'bg-gray-50 my-4 '} ' min-h-[50px]  rounded-3xl p-8  my-8  font-spacegrotesk shadow-md shadow-black transition duration-1000`} onMouseEnter={() => { }} key={i}>
                    <div className='flex justify-between'>
                        <div className='flex space-x-4 items-center'>
                            <p className={`${currentFaq === i ? 'text-white' : 'text-black'} lg:text-[20px] text-[20px]`}>{i + 1}.</p>
                            <p className={`${currentFaq === i ? 'text-white' : 'text-black'} lg:text-[15px] text-[15px]`}>{e?.title}</p>
                        </div>
                        <div className='cursor-pointer' onClick={() => handleChangeFaq(i)}>
                            <p className='w-[40px] h-[40px] flex justify-center items-center font-semibold text-3xl bg-white rounded-full'>{currentFaq === i ? '+' : '-'}</p>

                        </div>
                    </div>
                    {currentFaq === i && <div>
                        <hr className='h-[2px] my-4 bg-white' />
                        <p className={`${currentFaq === i ? 'text-white' : 'text-black'} lg:text-[15px] text-[12px]`}>{e?.faq}</p>

                    </div>}
                </div>)}

            </div>
        </div>
</motion.div>
</div>
    )
}


export default FAQ