import React from "react";
import AppButton from "./AppButton";
import Card from "./Card";

export function Article() {
  return (
    <div id="article-section" className="flex flex-col items-center space-y-6 md:space-y-12 lg:space-y-16">
      <div className="px-4 md:max-w-[90%] lg:max-w-[70%] xl:max-w-[40%] space-y-6 md:space-y-8 lg:space-y-12">
        <h1 className=" text-primary-100 text-3xl font-medium md:text-5xl text-center">
          Our Recent Articles
        </h1>
        <p className="mt-0 text-md md:text-xl text-center  text-slate-600 font-normal">
          Article is a part or segment of something joined to other parts,or,in
          combination,froming a structured set
        </p>
      </div>
      <div className="grid grid-cols-1 px-4 md:grid-cols-3 md:gap-4 2xl:gap-8 space-y-6 md:space-y-0">
        <Card
            hasImage={true}
            imgSrc="doctor-image.png"
            imgHeight="h-[100%]"
            imgBgColor="bg-secondary-100"
            titleTxtSize="text-2xl md:text-xl lg:text-2xl"
            textAlign="text-left"
            title="How to decrease the level of adipose in the body?"
            wrapperPaddingTop="pt-0"
            wrapperMaxWidth="max-w-[450px]"
            wrapperBorder="rounded-t-3xl"
            body="Serum or blood creatinin gives an idea about renal health.Creatinine phosphet is made wit three diffrent types of amino acid such as arginine,metheonine and glycine"
            bodyClass="my-5 md:text-sm lg:text-lg"
            hasImageTag={true}
            imageTagTxt="Infectous"
            hasFooter={true}
            footerTitle="Dr.Mehrab"
            footerBody="Neurologist"
        ></Card>
        <Card
          hasImage={true}
          imgSrc="doctor-image.png"
          imgHeight="h-[100%]"
          imgBgColor="bg-secondary-100"
          titleTxtSize="text-2xl md:text-xl lg:text-2xl"
          textAlign="text-left"
          title="How to decrease the level of adipose in the body?"
          wrapperPaddingTop="pt-0"
          wrapperMaxWidth="max-w-[450px]"
          wrapperBorder="rounded-t-3xl"
          body="Serum or blood creatinin gives an idea about renal health.Creatinine phosphet is made wit three diffrent types of amino acid such as arginine,metheonine and glycine"
          bodyClass="my-5 md:text-sm lg:text-lg"
          hasImageTag={true}
          imageTagTxt="Infectous"
          hasFooter={true}
          footerTitle="Dr.Mehrab"
          footerBody="Neurologist"
        ></Card>
        <Card
          hasImage={true}
          imgSrc="doctor-image.png"
          imgHeight="h-[100%]"
          imgBgColor="bg-secondary-200"
          titleTxtSize="text-2xl md:text-xl lg:text-2xl lg:text-2xl"
          textAlign="text-left"
          title="How to decrease the level of adipose in the body?"
          wrapperPaddingTop="pt-0"
          wrapperMaxWidth="max-w-[450px]"
          wrapperBorder="rounded-t-3xl"
          body="Serum or blood creatinin gives an idea about renal health.Creatinine phosphet is made wit three diffrent types of amino acid such as arginine,metheonine and glycine"
          bodyClass="my-5 md:text-sm lg:text-lg lg:text-lg"
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
