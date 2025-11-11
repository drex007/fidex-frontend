import React, { useContext, useState } from 'react'
import { menu } from '../assets'
import { Link } from 'react-scroll'
import { AppContext } from '../ContextAPI'
import { BuyModal } from '../modalConfigs'
import { useDispatch } from 'react-redux'
import { setUserKycStatusToNull } from '../Api/user/user.api'

const Header = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const [showHeader, setShowHeader] = useState(false)
    const { setUserModalState } = useContext(AppContext)
    const dispatch = useDispatch()
    return (
        <div className='sticky lg:px-16 px-4 py-6'>
            <div className='flex justify-between'>

                <p className='font-poppins lg:text-[20px] text-[17px] font-semibold text-faq-bg-dark text-2xl cursor-pointer' onClick={() => {
                    dispatch(setUserKycStatusToNull({}))

                    setUserModalState(BuyModal)
                }}> Fidex</p>

                <div>
                    <div className='hidden lg:flex text-[15px] font-poppins text-balance  space-x-4'>
                        <div>
                            <Link to="swap"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}><p className='cursor-pointer' onClick={() => setCurrentTab(0)}>Swap</p></Link>
                            {currentTab === 0 && <hr className='text-black bg-faq-bg-dark h-[4px]' />}
                        </div>
                        <div>
                            <Link
                                to='benefits'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}

                            > <p className='cursor-pointer' onClick={() => setCurrentTab(1)}>Benefits</p></Link>
                            {currentTab === 1 && <hr className='text-black bg-faq-bg-dark h-[4px]' />}
                        </div>
                        <div>
                            <Link
                                to='how-it-works'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}

                            ><p className='cursor-pointer' onClick={() => setCurrentTab(2)}>How it Works</p></Link>
                            {currentTab === 2 && <hr className='text-black bg-faq-bg-dark h-[4px]' />}
                        </div>
                        <div>
                            <Link

                                to='faq'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}

                            >
                                <p className='cursor-pointer' onClick={() => setCurrentTab(3)}>FAQ</p></Link>
                            {currentTab === 3 && <hr className='text-black bg-faq-bg-dark h-[4px]' />}
                        </div>
                    </div>
                </div>
                {!showHeader && <div className='relative lg:hidden flex-'>
                    <img src={menu} onClick={() => setShowHeader(true)} />

                </div>}
                {/* //NavBar for smallScreen */}
                {showHeader && <div className='absolute z-50 transition ease-in duration-100000 lg:hidden flex-col  px-8 py-4 min-h-[250px] w-2/3 shadow-2xl shadow-gray-500 rounded-2xl top-0 bg-white   right-0'>
                    <div className='flex justify-between '>
                        <p></p>
                        <p className='text-[20px] cursor-pointer' onClick={() => setShowHeader(false)}>X</p>

                    </div>
                    <div className='my-4'>
                        <Link to="swap"
                            spy={true}
                            smooth={true}
                            offset={500}
                            duration={500}><p className='cursor-pointer' onClick={() => setCurrentTab(0)}>Swap</p></Link>
                        {currentTab === 0 && <hr className='text-black bg-faq-bg-dark h-[4px] w-1/5' />}
                    </div>
                    <div className='my-4'>
                        <Link
                            to='benefits'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}

                        > <p className='cursor-pointer' onClick={() => setCurrentTab(1)}>Benefits</p></Link>
                        {currentTab === 1 && <hr className='text-black bg-faq-bg-dark h-[2px] w-1/5' />}
                    </div>
                    <div className='my-4'>
                        <Link
                            to='how-it-works'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}

                        ><p className='cursor-pointer' onClick={() => setCurrentTab(2)}>How it Works</p></Link>
                        {currentTab === 2 && <hr className='text-black bg-faq-bg-dark h-[2px] w-1/5' />}
                    </div>
                    <div>
                        <Link
                            to='faq'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}


                        >
                            <p className='cursor-pointer' onClick={() => setCurrentTab(3)}>FAQ</p>
                        </Link>
                        {currentTab === 3 && <hr className='text-black bg-faq-bg-dark h-[2px] w-1/5' />}
                    </div>


                </div>
                }
            </div>








        </div>
    )
}

export default Header
