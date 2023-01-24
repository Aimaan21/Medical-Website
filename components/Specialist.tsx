import React from "react";
import Card from "./Card";

function Spacialitst() {
  return (
    <div id="specialist" className="py-16 md:py-24 xl:py-32">
      <div className="flex flex-col items-center bg-backgroud-100 px-2 lg:px-12">
        <div className="px-2 md:px-16 xl:max-w-[1000px]">
          <h2 className="hidden md:block my-8 text-center tracking-wide font-medium text-secondary-500 xl:mb-4 xl:mt-16">
            Our Consulting specialities
          </h2>
          <h4 className="md:hidden block my-8 text-center tracking-wide font-medium text-secondary-500">
            Our Consulting specialities
          </h4>
          {/* <h1 className="my-8 text-center text-3xl font-medium text-secondary-500 md:text-5xl xl:mb-4 xl:mt-24">
            Our Consulting specialists
          </h1> */}
          <p className="my-8 text-center text-xl font-normal text-primary-700/60 xl:mb-0 xl:mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            similique officiis rem, optio enim sunt cupiditate provident natus
            asperiores eos cum laudantium, tempora nisi veritatis quibusdam et,
            odio odit ipsa?
          </p>
        </div>
        {/* <div className="flex flex-wrap justify-center px-4 py-4"> */}
        <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-5 lg:grid-cols-4 lg:gap-6 xl:mb-24 xl:mt-8 xl:px-8 2xl:grid-cols-6 2xl:gap-x-10">
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-1.png"
            // imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
            imgClassName="mx-auto w-max lg:w-[70px] h-10  md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Internal Medicine"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-2.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Gastroenterology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-3.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Infectous Disease"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-4.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-5.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-6.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-2.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-1.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-3.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-5.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-4.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
          <Card
            cardClassName="hover:bg-[#FCE9DA]"
            haveBody={false}
            title="Dermatology"
            titleClassname="text-sm md:text-md lg:text-xl text-secondary-500"
            imgSrc="/specialist-card-6.png"
            imgClassName="mx-auto w-max lg:w-[70px]  h-10 md:h-15 lg:h-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Spacialitst;
