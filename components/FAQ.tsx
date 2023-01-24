import Image from "next/image";
import React from "react";
// import Accordian from "./Accordion";
import Accordion from "./Accordion"

export function FAQ() {
  return (
    <div
      id="faq-section"
      className="flex flex-col items-center py-16 md:py-20 lg:py-28 xl:py-32 "
    >
      <div className="md:my-8 md:max-w-[85%] lg:w-full  lg:max-w-[900px] xl:my-12">
        {/* <h1 className=" text-secondary-500 text-5xl font-medium text-center mt-4 mb-4"> */}
        <h2 className="hidden md:block tracking-wide text-center  font-medium text-secondary-500 ">
          Frequently Asked Questions
        </h2>
        {/* for mobile */}
        <h4 className="block md:hidden text-center tracking-wide font-medium text-secondary-500 ">
          Frequently Asked Questions
        </h4>
        {/* <h1 className=" text-center text-3xl font-medium text-secondary-500 md:text-5xl">
          Frequently Asked Questions
        </h1> */}
        {/* <p className="mt-0 text-xl text-center  text-primary-700/60 font-normal"> */}
        <p className="text-md  my-4 mx-6 text-center font-normal text-primary-700/60 md:my-4 md:text-xl">
          Ask a doctor online and get quick medical service for your health
          queries.Our medical pannel consists of over 3500+ doctors from 80+
          specialist
        </p>
      </div>
      {/* layout for mobile */}
      <div className="flex justify-center  md:hidden">
        <div className="w-full flex mt-6 flex-col items-center px-4">
         <Accordion/>
          
        </div>
      </div>

      {/* layout for medium and larger screen */}
      <div className="hidden w-full flex-row md:flex">
        <div className=" relative my-auto w-1/2 text-center">
          {/* <div className="bg-secondary-50 rounded-full w-[550px] h-[550px] "></div> */}
          <div className="rounded-div-background mx-auto rounded-full bg-secondary-50 md:h-[35vw] md:w-[35vw] lg:h-[30vw] lg:w-[30vw]"></div>
          {/* <img src="faq-doctor.png" className="absolute top-[3%] left-[18%] lg:h-[30vw]" alt="" />  for xl*/}
          {/* <img src="faq-doctor.png" className="absolute top-[4%] left-[32%] lg:h-[30vw] mx-auto" alt="" /> */}
          {/* <img src="faq-doctor.png" className="absolute top-[3%] left-[20%] lg:h-[30vw] mx-auto" alt="" /> for lg */}
          <Image
            width={1000}
            height={100}
            src="/faq-doctor.png"
            // className="absolute mx-auto md:left-[14%] md:top-[3.5%] md:h-[35vw] lg:top-[3%] lg:left-[20%] lg:h-[30vw]"
            className="absolute mx-auto md:top-[3%] md:left-[14%] md:w-[40vw] lg:top-[2%] lg:left-[19%] lg:h-auto lg:w-[34.5vw] "
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <Accordion/>
   
        </div>
      </div>
    </div>
  );
}

export default FAQ;
