import React from "react";
import Card from "./Card";

function Spacialitst() {
  return (
    <div id="specialist" className="lg:py-24 xl:py-32">
      <div className="flex flex-col items-center bg-backgroud-100">
        <div className="px-6 md:px-16 xl:max-w-[1000px]">
          <h1 className="my-8 text-3xl font-medium text-center xl:mb-4 xl:mt-24 md:text-5xl text-primary-100">
            Our Consulting specilaists
          </h1>
          <p className="my-8 text-xl font-normal text-center xl:mb-0 xl:mt-8 text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            similique officiis rem, optio enim sunt cupiditate provident natus
            asperiores eos cum laudantium, tempora nisi veritatis quibusdam et,
            odio odit ipsa?
          </p>
        </div>
        {/* <div className="flex flex-wrap justify-center px-4 py-4"> */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-5 lg:grid-cols-4 lg:gap-6 2xl:grid-cols-6 2xl:gap-x-10 xl:px-8">
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-md lg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Internal Medicine"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Gastroenterology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Infectous Disease"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-sm md:text-mdlg:text-xl"
            titleTxtColor="text-primary-100"
            imgSrc="favicon.ico"
          />
        </div>
      </div>
    </div>
  );
}

export default Spacialitst;
