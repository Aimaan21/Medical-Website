import Image from "next/image";
import { useEffect, useState } from "react";
import AppButton from "./AppButton";

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
    
    <div
      className=" flex justify-center px-[4vw]  md:px-[2.5vw] lg:px-[3vw] xl:px-[8vw] 2xl:pl-[8vw] 2xl:pr-[6vw] 2xl:px-0 "
      id="hero-section"
    >
      <div className="flex flex-col items-center space-y-4 py-6 md:block md:space-y-8 md:py-10 lg:space-y-12 lg:py-20 2xl:mr-[14vw]">
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

   
      <div className="hidden md:flex">
        <div className="relative self-end">
    
          <AppButton
            btnText="2210 Doctors Online"
            type="button"
            className=" bg-white text-slate-900 shadow-lg  absolute md:-left-[6vw] 
            lg:-left-[1vw] xl:-left-[4vw] 2xl:-left-[4.5vw]"
          />

      
          <Image
            height={100}
            width={500}
            src="/doctor-image.png"
            className="h-auto w-[42vw] max-w-[355px] lg:w-[45vw] 
            lg:max-w-[400px] xl:w-[42vw] xl:max-w-[530px]  2xl:w-[31vw] 2xl:max-w-[600px]"
            // className="h-auto w-[42vw] max-w-[350px] lg:max-w-[450px] lg:ml-10 lg:w-[50vw] xl:w-[42vw] xl:max-w-[500px] 2xl:w-[31vw]"
            alt="default img"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
