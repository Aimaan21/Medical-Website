import React from "react";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

export function About() {
  return (
    <motion.div
      id="about-section"
      animate={{ x: 0 }}
      initial={{ x: -1000 }}
      className="box lg:px- flex w-full flex-col items-center px-2 md:px-8 xl:px-12 2xl:px-32"
    >
      {/* for medium...... screen */}
      <h2 className="mt-12 mb-10 hidden max-w-[550px] text-center font-medium tracking-wide text-secondary-500 md:block  lg:my-16 ">
        Why you should trust us? Get to know about us.
      </h2>

      {/* for mobile */}
      <h4 className="mt-12 mb-10 block max-w-[550px] text-center font-medium text-secondary-500 md:hidden  lg:mt-24 lg:mb-20">
        Why you should trust us? Get to know about us.
      </h4>

      <div className="grid gap-4 md:grid-cols-2 md:gap-10 lg:gap-12 xl:grid-cols-4">
        <Card
          title="All Specialist"
          titleClassname="lg:mb-4 text-secondary-500"
          body="You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine"
          cardClassName="max-w-[29ch] bg-cardWrap-50 text-center hover:bg-white"
          imgSrc="/about-card-1.png"
          imgClassName="mx-auto w-[70px] mt-2 md:mt-4 lg:mt-0"
        />
        <Card
          title="Private & Secure"
          titleClassname="lg:mb-4 text-secondary-500"
          body="You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine"
          cardClassName="max-w-[29ch] bg-cardWrap-50 text-center"
          imgSrc="/about-card-3.png"
          imgClassName="mx-auto w-[70px] mt-2 md:mt-4 lg:mt-0"
        />
        <Card
          title="Million Customers "
          titleClassname="lg:mb-4 text-secondary-500"
          body="You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine"
          cardClassName="max-w-[29ch] bg-cardWrap-50 text-center"
          imgSrc="/about-card-2.png"
          imgClassName="mx-auto w-[70px] mt-2 md:mt-4 lg:mt-0"
        />
        <Card
          title="Chatbot Support"
          titleClassname="lg:mb-4 text-secondary-500"
          body="You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine"
          cardClassName="max-w-[29ch] bg-cardWrap-50 text-center"
          imgSrc="/about-card-4.png"
          imgClassName="mx-auto w-[70px] mt-2 md:mt-4 lg:mt-0"
        />
      </div>
    </motion.div>
  );
}

export default About;
