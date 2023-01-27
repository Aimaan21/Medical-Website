import Image from "next/image";
import React from "react";
// import Accordian from "./Accordion";
import Accordion from "./Accordion";

export function FAQ() {
  return (
    <div
      id="faq-section"
      className="flex flex-col items-center py-16 md:py-20 lg:pt-16 "
    >
      <div className="md:my-8 md:max-w-[85%] lg:w-full  lg:max-w-[900px] xl:my-12">
        {/* <h1 className=" text-secondary-500 text-5xl font-medium text-center mt-4 mb-4"> */}
        <h2 className="hidden text-center font-medium tracking-wide  text-secondary-500 md:block ">
          Frequently Asked Questions
        </h2>
        {/* for mobile */}
        <h4 className="block text-center font-medium tracking-wide text-secondary-500 md:hidden ">
          Frequently Asked Questions
        </h4>
        
        <p className="text-md  my-4 mx-6 text-center font-normal text-primary-700/60 md:my-4 md:text-xl">
          Ask a doctor online and get quick medical service for your health
          queries.Our medical pannel consists of over 3500+ doctors from 80+
          specialist
        </p>
      </div>
      {/* layout for mobile */}
      <div className="flex justify-center  md:hidden">
        <div className="mt-6 flex w-full flex-col items-center px-4 ">
          <Accordion />
        </div>
      </div>

      {/* layout for medium and larger screen */}
      <div className="hidden w-full flex-row md:flex">
        <div className=" relative my-auto w-1/2 text-center ">
          <div className="rounded-div-background mx-auto rounded-full bg-secondary-50 md:h-[35vw] md:w-[35vw] lg:h-[30vw] lg:w-[30vw]"></div>

          <Image
            width={1000}
            height={100}
            src="/faq-doctor.png"
            className="absolute mx-auto md:top-[3%] md:left-[14%] md:w-[40vw] lg:top-[2%] lg:left-[19%] lg:h-auto lg:w-[34.5vw] "
            alt=""
          />
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center py-16 ">
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
