import React from "react";
import { xiosMockup } from "../assets";
import fadeIn from "../Variant";
import { motion } from "framer-motion";


const bounceTransition = {
  y: {
    duration: 2,
    repeat: Infinity,
    ease: "easeOut",
  },
};

const xbounceTransition = {
  x: {
    duration: 7,
    repeat: Infinity,
    ease: "easeOut",
  },
};

const zbounceTransition = {
  y: {
    duration: 10,
    repeat: Infinity,
    ease: "easeOut",
  },
};

const WhyChooseKyenx = () => {
  return (
    <motion.div
    className="lg:mt-0"
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="lg:mt-0 lg:px-16 px-4 lg:mb-16 my-8 mt" id="benefits">
        <div className="lg:my-8 lg:flex  lg:flex-1 lg:justify-between">
          {/* <div className="flex-[0.5] flex justify-center lg:my-0 my-8">
            <p className=" font-spacegrotesk lg:text-[16px] text-[12px] lg:text-left text-center">
              Discover the powerful features that make Fidex the most secure,
              fast, and convenient platform for exchanging stablecoins and
              Naira.
            </p>
          </div> */}
        </div>

        <div className="lg:flex lg:flex-1 items-center">
          <div className="hidden lg:flex lg:flex-[0.5]">
            <img src={xiosMockup} alt="" className="w-[300px]" />
          </div>
          <div className="lg:flex-[0.5]">
            <div className="flex-[0.5] lg:px-0 px-4">
              <p className="lg:w-2/3 capitalize font-poppins bg-faq-bg-dark  text-white lg:text-[25px] text-[15px] lg:px-0 px-2  rounded-sm min-h-[50px] flex justify-center items-center">
                Why Choose Fidex ?
              </p>
            </div>
            <p className="my-8 font-spacegrotesk text-[14px]">
              Discover the powerful features that make Fidex the most secure,
              fast, and convenient platform for exchanging stablecoins and
              Naira.
            </p>
            <div className="flex space-x-4">
              <div className="w-[20px]">
                <motion.div 
                 animate={{
                        y: ["50%", "-10%"]
                    }}
                    transition={bounceTransition}
                className="bg-faq-bg-dark h-[20px] w-[20px] rounded-full mt-3 flex mx-auto"></motion.div>
              </div>
              <div>
                <p className="font-spacegrotesk text-[14px] text-gray-500 font-semibold my-1">
                  Secured Transaction
                </p>
                <p className="font-spacegrotesk text-[12px]">
                  We prioritize your security with KYC and strong transaction
                  encryption.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <div className="w-[20px]">
                <motion.div 
                  animate={{
                        y: ["50%", "-10%"]
                    }}
                    transition={bounceTransition}

                className="bg-faq-bg-dark h-[15px] w-[15px] rounded-full mt-3 flex mx-auto"></motion.div>
              </div>
              <div>
                <p className="font-spacegrotesk font-semibold text-[14px text-gray-500 my-1">
                  Quick Transaction
                </p>
                <p className="font-spacegrotesk text-[12px]">
                  We prioritize your security with KYC and strong transaction
                  encryption.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <div className="w-[20px]">
                <motion.div 
                
                  animate={{
                        y: ["50%", "-10%"]
                    }}
                    transition={bounceTransition}

                className="bg-faq-bg-dark h-[12px] w-[12px] rounded-full mt-3 flex mx-auto"></motion.div>
              </div>
              <div>
                <p className="font-spacegrotesk text-[14px text-gray-500 font-semibold my-1">
                  24/7 Customer Support
                </p>
                <p className="font-spacegrotesk text-[12px]">
                  We prioritize your security with KYC and strong transaction
                  encryption.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <div className="w-[20px]">
                <motion.div 
                  animate={{
                        y: ["50%", "-10%"]
                    }}
                    transition={bounceTransition}
                
                className="bg-faq-bg-dark h-[8px] w-[8px] rounded-full mt-3 flex mx-auto"></motion.div>
              </div>
              <div>
                <p className="font-spacegrotesk text-[14px text-gray-500 font-semibold my-1">
                  Competitive Rate
                </p>
                <p className="font-spacegrotesk text-[12px]">
                  We prioritize your security with KYC and strong transaction
                  encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseKyenx;
