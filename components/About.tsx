import React from "react";
import Card from "./Card";

export function About() {
  return (
    <div
      id="about-section"
      className="flex w-full flex-col items-center md:px-8 lg:px- xl:px-16 2xl:px-32"
    >
      {/* for medium...... screen */}
      <h2 className="hidden md:block mt-12 mb-10 max-w-[550px] text-center tracking-wide font-medium text-secondary-500  lg:mt-24 lg:mb-20">
        Why you should trust us? Get to know about us.
      </h2>

      {/* for mobile */}
      <h4 className="block md:hidden mt-12 mb-10 max-w-[550px] text-center font-medium text-secondary-500  lg:mt-24 lg:mb-20">
        Why you should trust us? Get to know about us.
      </h4>
   
      <div className="grid gap-4 md:grid-cols-2 md:gap-10 lg:gap-12 xl:grid-cols-4">
      <Card
          title="All Specialist"
          titleClassname="lg:mb-4 text-secondary-500"

          body="You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine"
         
          cardClassName="max-w-[29ch] bg-cardWrap-50 text-center hover:bg-white"
          // wrapperMaxWidth="max-w-[29ch]"
          // wrapperBgColor="bg-cardWrap-50"
          imgSrc="/about-card-1.png"
          imgClassName="mx-auto w-[70px] mt-2 md:mt-4 lg:mt-0"
         
        />
        <Card
          title="Private & Secure"
          titleClassname="lg:mb-4 text-secondary-500"

          body="You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine"
         
          cardClassName="max-w-[29ch] bg-cardWrap-50 text-center"
          // wrapperMaxWidth="max-w-[29ch]"
          // wrapperBgColor="bg-cardWrap-50"
          // imgSrc="/favicon.ico"
          // imgClassName="mx-auto w-max h-10 md:h-15 lg:h-20 mt-2 md:mt-4 lg:mt-0"
          imgSrc="/about-card-2.png"
          imgClassName="mx-auto w-[70px] mt-2 md:mt-4 lg:mt-0"
         
        />
        <Card
          title="Million Customers "
          titleClassname="lg:mb-4 text-secondary-500"

          body="You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine"
         
          cardClassName="max-w-[29ch] bg-cardWrap-50 text-center"
          // wrapperMaxWidth="max-w-[29ch]"
          // wrapperBgColor="bg-cardWrap-50"
          // imgSrc="/favicon.ico"
          // imgClassName="mx-auto w-max h-10 md:h-15 lg:h-20 mt-2 md:mt-4 lg:mt-0"
          imgSrc="/about-card-3.png"
          imgClassName="mx-auto w-[70px] mt-2 md:mt-4 lg:mt-0"
        
        />
        <Card
          title="Chatbot Support"
          titleClassname="lg:mb-4 text-secondary-500"

          body="You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine"
         
          cardClassName="max-w-[29ch] bg-cardWrap-50 text-center"
          // wrapperMaxWidth="max-w-[29ch]"
          // wrapperBgColor="bg-cardWrap-50"
          // imgSrc="/favicon.ico"
          // imgClassName="mx-auto w-max h-10 md:h-15 lg:h-20 mt-2 md:mt-4 lg:mt-0"
          imgSrc="/about-card-4.png"
          imgClassName="mx-auto w-[70px] mt-2 md:mt-4 lg:mt-0"
          
        />
      </div>
    </div>
  );
}

export default About;
