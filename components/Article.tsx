import React from "react";
import AppButton from "./AppButton";
import Card from "./Card";

export function Article() {
  return (
    <div
      id="article-section"
      className="flex flex-col items-center space-y-6 md:space-y-12 lg:space-y-16"
    >
      <div className="space-y-6 px-5 md:max-w-[90%] md:space-y-8 lg:max-w-[70%] lg:space-y-12 xl:max-w-[40%]">
        <h2 className="hidden md:block text-center font-medium text-secondary-500 tracking-wide">
          Our Recent Articles
        </h2>
        <h4 className="md:hidden block text-center font-medium text-secondary-500 tracking-wide">
          Our Recent Articles
        </h4>
        
        <p className="text-md mt-0 text-center font-normal  text-primary-700/60 md:text-xl">
          Article is a part or segment of something joined to other parts, or,
          in combination, froming a structured set.
        </p>
      </div>
      <div className="grid grid-cols-1 space-y-6 px-6 md:grid-cols-3 md:gap-4 md:space-y-0 lg:px-8 2xl:gap-8">
        <Card
          hasImage={true}
          imgSrc="/doctor-image.png"
          imgClassName="w-[90vw] bg-[#F8C3C5]"
        
          title="How to decrease the level of adipose in the body?"
          titleClassname="text-2xl md:text-xl lg:text-2xl text-left text-secondary-500"
          cardClassName="pt-0 max-w-[450px] rounded-t-3xl"
    
          body="Serum or blood creatinin gives an idea about renal health. Creatinine phosphet is made wit three diffrent types of amino acid such as arginine, metheonine and glycine"
          bodyClass="my-5 md:text-sm lg:text-lg text-left"
          hasImageTag={true}
          imageTagTxt="Infectous"
          hasFooter={true}
          footerTitle="Dr. Aimaan Amin Nobin"
          footerBody="Neurologist"
          footerClass=""
          contentClass="my-6"
        ></Card>
        <Card
          hasImage={true}
          imgSrc="/doctor-image.png"
          imgClassName="w-[90vw] bg-[#DEDEDE]	"
          
          title="How to decrease the level of adipose in the body?"
          titleClassname="text-2xl md:text-xl lg:text-2xl text-left text-secondary-500"
          cardClassName="pt-0 max-w-[450px] rounded-t-3xl"
         
          body="Serum or blood creatinin gives an idea about renal health. Creatinine phosphet is made wit three diffrent types of amino acid such as arginine, metheonine and glycine"
          bodyClass="my-5 md:text-sm lg:text-lg text-left"
          hasImageTag={true}
          imageTagTxt="Infectous"
          hasFooter={true}
          footerTitle="Dr. Mehrab"
          footerBody="Neurologist"
          footerClass=""
          contentClass="my-6"
        ></Card>
         <Card
          hasImage={true}
          imgSrc="/doctor-image.png"
          imgClassName="w-[90vw] bg-[#F2F1EF]		"
        
          title="How to decrease the level of adipose in the body?"
          titleClassname="text-2xl md:text-xl lg:text-2xl text-left text-secondary-500"
          cardClassName="pt-0 max-w-[450px] rounded-t-3xl"
        
          body="Serum or blood creatinin gives an idea about renal health. Creatinine phosphet is made wit three diffrent types of amino acid such as arginine, metheonine and glycine"
          bodyClass="my-5 md:text-sm lg:text-lg text-left"
          hasImageTag={true}
          imageTagTxt="Infectous"
          hasFooter={true}
          footerTitle="Dr. Mehrab"
          footerBody="Neurologist"
          footerClass=""
          contentClass="my-6"
        ></Card>
      </div>
      <AppButton btnText="Read More Articles" className="text-btn-200  bg-primary-500 hover:bg-secondary-500" />
    </div>
  );
}

export default Article;
