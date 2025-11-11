import React, { useContext, useEffect } from "react";
import { herobg, iosMockup, iosdownload, androidDownload } from "../assets";
import fadeIn from "../Variant";
import { motion } from "framer-motion";

import { AppContext } from "../ContextAPI";

const bounceTransition = {
  y: {
    duration: 4,
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

const Hero = () => {
 
  return (
    <div id="swap" className="">
      <div className="overflow-x-hidden lg:flex lg:flex-1 lg:justify-between lg:pl-16 px-4 w-full">
        <motion.div
          className="lg:flex-[0.6]"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="lg:flex-[0.6] capitalize font-poppins lg:mt-20 3xl:mt-40">
            <p className="relative text-faq-bg-dark  lg:text-[70px] 2xl:text-[80px] text-[30px] -z-10 font-semibold">
              Instantly Swap Stablecoins To Naira
            </p>
            <p className="font-poppins lg:text-[15px] text-[12px] mt-4">
              Fast, Secure, and Simple. Deposit USDC or USDT and get credited
              with Naira at the best rate.
            </p>
            <div className="hidden lg:flex   mt-4">
              <img src={iosdownload} alt="" className="w-[120px] h-[50px]" />
              <img
                src={androidDownload}
                alt=""
                className="w-[120px] h-[50px]"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="lg:flex-[0.4]"
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="lg:flex-[0.4] lg:-mt-28 -mr-10 mt-8 ">
            <img
              src={iosMockup}
              alt=""
              srcset=""
              className="lg:flex lg:mx-auto"
            />
            <div className="flex lg:hidden justify-center mr-10 mt-8">
              <img src={iosdownload} alt="" className="w-[120px] h-[50px]" />
              <img
                src={androidDownload}
                alt=""
                className="w-[120px] h-[50px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
