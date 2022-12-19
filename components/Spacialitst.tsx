import React from "react";
import Card from "./Card";

function Spacialitst() {
  return (
    <div id="specialist" className="py-32">
      <div className="bg-backgroud-100 flex flex-col items-center">
        <div className="max-w-[1000px]">
          <h2 className=" text-primary-50 text-center mt-24 mb-4">
            Our consulting specilaists
          </h2>
          <p className="mt-0 text-xl text-center  text-slate-600 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            similique officiis rem, optio enim sunt cupiditate provident natus
            asperiores eos cum laudantium, tempora nisi veritatis quibusdam et,
            odio odit ipsa?
          </p>
        </div>
        <div className="px-4 flex flex-wrap py-8 justify-center">
          <Card
            haveBody={false}
            title="Dermatology"
            titleTxtSize="text-2xl"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Internal Medicine"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Gastroenterology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Infectous Disease"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Dermatology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Dermatology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Dermatology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Dermatology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Dermatology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Dermatology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Dermatology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
          <Card
            haveBody={false}
            titleTxtSize="text-2xl"
            title="Dermatology"
            titleTxtColor="text-primary-50"
            imgSrc="favicon.ico"
          />
        </div>
      </div>
    </div>
  );
}

export default Spacialitst;
