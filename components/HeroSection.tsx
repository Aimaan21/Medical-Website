import Image from "next/image";
import { useEffect, useState } from "react";
import ActiveButton from "./ActiveButton";
import AppButton from "./AppButton";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";


export const HeroSection = () => {
  const [heroBtn, setheroBtn] = useState(false);
  const [heroBtnSub, setheroBtnSub] = useState(false);

  useEffect(() => {
    if (heroBtn) {
      console.log("Hero btn click");
      setheroBtn(false);
    }
    if (heroBtnSub) {
      console.log("Hero btn sub click");
      setheroBtnSub(false);
    }
    // setheroBtn(false)
  }, [heroBtn, heroBtnSub]);

  return (
    

    <motion.div
    animate={{ x: 0 }}
    initial={{ x: -1000 }}
      className=" flex justify-center px-[1vw] md:pl-[3vw] lg:pl-[3.5%] xl:pl-[5.5vw] md:px-0 2xl:pl-[8vw] 2xl:pr-[6vw] "
      id="hero-section"
    >
      <div className="flex flex-col items-center space-y-4 py-6 md:block md:space-y-8 lg:space-y-12 lg:py-10 lg:mr-[3vw] xl:mr-[7.5vw] 2xl:py-20 2xl:mr-[14vw]">
        <h1 className=" text-center text-secondary-500 max-w-[15ch] md:w-[15ch] 
        md:text-left lg:w-[15ch] xl:w-[15ch]">
          Consult a doctor anytime, anywhere by{" "}
          <a className="text-primary-500 underline">video call</a>
        </h1>
        <p className="md:text-md text-center text-secondary-500 opacity-75 md:text-left max-w-[40ch]">
          Talk with a doctor using our highly secured HIPAA complaint end-to-end
          encrypted video call
        </p>
        <div className="btn-group contents  space-y-1 md:space-x-4 lg:space-x-6">
          <AppButton
            className="mt-4 bg-primary-500 text-btn-200 shadow-lg transition hover:bg-secondary-500"
            btnColor="bg-primary-500 hover:bg-secondary-500 transition"
            btnText="Ask A Doctor Online"
            // btnTextColor="text-btn-200"
            type="button"
            clicked={(e: any) => setheroBtn(true)}
          />
          <AppButton
            className="bg-white text-secondary-500 shadow-lg"
            // btnColor="bg-white"
            btnText="Unlimited Chat"
            // btnTextColor="text-secondary-500"
            type="button"
            clicked={(e: any) => setheroBtnSub(true)}
          />
        </div>
      </div>

   
      <div className="hidden md:flex pl-[1rem]">
        <div className="relative self-end">
    
          <ActiveButton
          
            btnText="2210 Doctors Online"
            type="button"
            className="active-button-position bg-white text-slate-900 shadow-lg  absolute md:-left-[10vw] md:-top-[2vw] lg:top-0
            lg:-left-[2vw] xl:-left-[6vw] 2xl:-left-[4.5vw]"
          />

      
          <Image
            height={100}
            width={500}
            src="/doctor-image.png"
            className="h-auto w-[35vw] max-w-[300px] lg:w-[40vw] 
            lg:max-w-[450px] xl:w-[42vw] xl:max-w-[480px]  2xl:w-[31vw] 2xl:max-w-[600px]"
            // className="h-auto w-[42vw] max-w-[350px] lg:max-w-[450px] lg:ml-10 lg:w-[50vw] xl:w-[42vw] xl:max-w-[500px] 2xl:w-[31vw]"
            alt="default img"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
