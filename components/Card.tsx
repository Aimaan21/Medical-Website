import Image from "next/image";
import React from "react";
import Icon from "./icon";

export interface cardModel {
  hasImageTag?: boolean;
  hasImage?: boolean;
  imgClassName?: string; 
  imgSrc?: string;
  haveBody?: boolean;
  
  titleClassName?: string;
  className?: string;
  cardClassName?: string;
  contentClass?: string;
  footerClass?: string;
  hasFooter?: boolean;

}

function Card({
 
  cardClassName = "",

  contentClass = "px-2 py-2 lg:py-4 lg:px-4",

  title = "kjhfkjdahkjhkf",
  titleClassname="text-center text-xl md:text-2xl lg:text-3xl text-secondary-500",
  
  haveBody = true,
  body = "afjkhfkahkf",
  bodyClass = "",
 
  hasImage = true,
  imgSrc = "//favicon.ico",
  imgClassName = "h-10 md:h-15 lg:h-20",

  hasDateTag = false,
  iconName="",
  dateTagClassName = "h-10 md:h-15 lg:h-20",
  dateTagTxt1="",
  dateTagTxt2="",
  dateTagTxt3="",
 
  hasImageTag = false,
  imageTagTxt = "default",
  
  hasFooter = false,
  footerTitle = "Default title",
  footerBody = "This is footer body",
  footerClass = "w-full px-3 pb-2 lg:px-4 lg:pb-3 xl:px-6 xl:pb-3",
  
  
}) {
  return (
  
    <div
      className={`lg:min-w-[220px] lg:max-w-[380px] 2xl:max-w-[450px]  hover:bg-white dark:border-gray-700 dark:bg-gray-800 bg-white  text-center ${cardClassName}`}
      
    >
      <div className="relative">
        {hasImageTag && (
          <p className="absolute  ml-4 mt-3  rounded-md bg-slate-400 px-2 md:px-1 md:py-1 md:text-xs font-thin text-white backdrop-blur-md backdrop-grayscale md:ml-2 md:mt-2  lg:mt-4 lg:ml-4 xl:ml-4 lg:px-3 2xl:px-4 xl:py-1 lg:text-base 2xl:text-xl opacity-60">
            {imageTagTxt}
          </p>
        )}

        {hasImage && (
          <Image
            width={300}
            height={300}
           
            className={`rounded-t-lg object-cover object-center lg:pt-5  ${imgClassName}`}
            src={`${imgSrc} `}
            alt=""
          />
        )}
        {hasDateTag && (
          <div className="flex space-x-2 items-center absolute top-[80%] md:top-[22.4vw] lg:top-[24vw] xl:top-[310px] 2xl:top-[370px] ml-4 mt-3  rounded-md bg-white px-2 md:px-1 md:py-1 md:text-xs font-normal text-blue md:ml-2 md:mt-2  lg:mt-4 lg:ml-4 xl:ml-4 lg:px-3 2xl:px-4 xl:py-1 text-sm">
            <div className="">
            <Icon iconName={`${iconName}`} className='object-cover w-auto h-4 mb-1 md:h-4' wrapperClassName="mr-2"></Icon>
            {dateTagTxt1}
            </div>
           <div className="">
           <Icon iconName={`${iconName}`} className='object-cover w-auto h-4 mb-1 md:h-4' wrapperClassName="mr-2"></Icon>
            {dateTagTxt2}
           </div>
            <div className="">
            <Icon iconName={`${iconName}`} className='object-cover w-auto h-4 mb-1 md:h-4' wrapperClassName="mr-2"></Icon>
            {dateTagTxt3}
            </div>
            
          </div>
        )}
      </div>

      <div className={`${contentClass}`}>
        <a >
         
          <h5
            className={`mt-0  ${titleClassname} leading-7 tracking-normal transition  hover:text-primary-600 dark:text-white`}
          >
            {title}
          </h5>
        </a>
        <div>
          {haveBody && (
            <p
              className={`  lg:font-normal ${bodyClass}  text-primary-700/60 dark:text-gray-400`}
            >
              {body}
            </p>
          )}
        </div>
        {hasFooter && <hr className="w-full" />}
      </div>
      {hasFooter && (
     
          <div className={`flex items-center text-left pb-5 ${footerClass}`}>
            <Icon
              iconName="/doctor-image.png"
              className="h-10 w-10 rounded-full bg-pink-300 object-cover"
            />
            <div className="px-1 lg:px-3 text-left">
              <h6 className="font-bold text-secondary-500 ">
                {footerTitle}
              </h6>
              <p className="text-sm text-primary-700/60">{footerBody}</p>
            </div>
          </div>
       
      )}
    </div>
  );
}

export default Card;
