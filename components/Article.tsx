import React from "react";
import AppButton from "./AppButton";
import Card from "./Card";

export function Article() {
  return (
    <div id="article-section" className="flex flex-col items-center">
      <div className="max-w-[600px]">
        <h1 className=" text-primary-100 text-5xl font-medium text-center mt-4 mb-4">
          Our Recent Articles
        </h1>
        <p className="mt-0 text-xl text-center  text-slate-600 font-normal">
          Article is a part or segment of something joined to other parts,or,in
          combination,froming a structured set
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <Card
          hasImage={true}
          imgSrc="doctor-image.png"
          imgHeight="h-[450px]"
          imgBgColor="bg-secondary-50"
          titleTxtSize="text-2xl"
          textAlign="text-left"
          title="How to decrease the level of adipose in the body?"
          wrapperPaddingTop="pt-0"
          wrapperMaxWidth="max-w-[450px]"
          wrapperBorder="rounded-t-3xl"
          body="Serum or blood creatinin gives an idea about renal health.Creatinine phosphet is made wit three diffrent types of amino acid such as arginine,metheonine and glycine"
          bodyClass="my-5"
          hasImageTag={true}
          imageTagTxt="Health"
          hasFooter={true}
          footerTitle="Dr.Muhammad Ibrahim"
          footerBody="Health & Food"
        ></Card>
        <Card
          hasImage={true}
          imgSrc="doctor-image.png"
          imgHeight="h-[450px]"
          imgBgColor="bg-secondary-100"
          titleTxtSize="text-2xl"
          textAlign="text-left"
          title="How to decrease the level of adipose in the body?"
          wrapperPaddingTop="pt-0"
          wrapperMaxWidth="max-w-[450px]"
          wrapperBorder="rounded-t-3xl"
          body="Serum or blood creatinin gives an idea about renal health.Creatinine phosphet is made wit three diffrent types of amino acid such as arginine,metheonine and glycine"
          bodyClass="my-5"
          hasImageTag={true}
          imageTagTxt="Infectous"
          hasFooter={true}
          footerTitle="Dr.Mehrab"
          footerBody="Neurologist"
        ></Card>
        <Card
          hasImage={true}
          imgSrc="doctor-image.png"
          imgHeight="h-[450px]"
          imgBgColor="bg-secondary-200"
          titleTxtSize="text-2xl"
          textAlign="text-left"
          title="How to decrease the level of adipose in the body?"
          wrapperPaddingTop="pt-0"
          wrapperMaxWidth="max-w-[450px]"
          wrapperBorder="rounded-t-3xl"
          body="Serum or blood creatinin gives an idea about renal health.Creatinine phosphet is made wit three diffrent types of amino acid such as arginine,metheonine and glycine"
          bodyClass="my-5"
          hasImageTag={true}
          imageTagTxt="Neurology"
          hasFooter={true}
          footerTitle="Dr.Billal"
          footerBody="Health & Food"
        ></Card>
      </div>
      <AppButton btnText="Read More Articles"/>
    </div>
  );
}

export default Article;
