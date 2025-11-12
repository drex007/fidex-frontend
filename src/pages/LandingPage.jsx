import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhyChooseKyenx from '../components/WhyChooseKyenx'
import ReachOutToUs from '../components/ReachOutToUs'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div className='3xl:px-[25%]'>
            <Header />
            <Hero />
            <WhyChooseKyenx />
            {/* <ReachOutToUs /> */}
            <HowItWorks />
            <FAQ />
            <Footer />

        </div>
    )
}

export default LandingPage
