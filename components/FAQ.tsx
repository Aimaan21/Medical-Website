import React from "react";
import Accordian from "./Accordian";

export function FAQ() {
  return (
    <div className="py-32 flex flex-col items-center">
      <div className="max-w-[900px] w-full">
        <h2 className=" text-primary-50 text-5xl text-center mt-4 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="mt-0 text-xl text-center  text-slate-600 font-normal">
          Ask a doctor online and get quick medical service for your health
          queries.Our medical pannel consists of over 3500+ doctors from 80+
          specialist
        </p>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-1/2">
        
       
        </div>
        <div className="w-1/2">
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
