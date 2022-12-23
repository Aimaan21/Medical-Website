import React from "react";
import Accordian from "./Accordian";

export function FAQ() {
  return (
    <div className="py-32 flex flex-col items-center">
      <div className="max-w-[900px] w-full">
        <h1 className=" text-primary-100 text-5xl font-medium text-center mt-4 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="mt-0 text-xl text-center  text-slate-600 font-normal">
          Ask a doctor online and get quick medical service for your health
          queries.Our medical pannel consists of over 3500+ doctors from 80+
          specialist
        </p>
      </div>
      <div className="flex flex-row w-full ">
        <div className=" text-center my-auto relative w-1/2">
          {/* <div className="bg-secondary-50 rounded-full w-[550px] h-[550px] "></div> */}
          <div className="bg-secondary-50 rounded-full lg:w-[30vw] lg:h-[30vw] mx-auto"></div>
          {/* <img src="faq-doctor.png" className="absolute top-[3%] left-[18%] lg:h-[30vw]" alt="" />  for xl*/}
          {/* <img src="faq-doctor.png" className="absolute top-[4%] left-[32%] lg:h-[30vw] mx-auto" alt="" /> */}
          <img src="faq-doctor.png" className="absolute top-[4%] left-[32%] lg:h-[30vw] mx-auto" alt="" />
        
       
        </div>
        <div className="w-1/2 ">
            <Accordian title="What does telemedicine mean?"/>
            <Accordian title="What is telemedicine used for?"/>
            <Accordian title="What equipments do you require for telemedicine?"/>
            <Accordian title="What are the pros or advantages of telemedicine?"/>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
