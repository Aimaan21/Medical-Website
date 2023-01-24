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
  // btnColor?: string
}

function Card({
  // cardClassName = "bg-white pt-4 lg:pt-8 rounded-2xl text-center",
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
 
  hasImageTag = false,
  imageTagTxt = "default",
  
  hasFooter = false,
  footerTitle = "Default title",
  footerBody = "This is footer body",
  footerClass = "w-full px-3 pb-2 lg:px-4 lg:pb-3 xl:px-6 xl:pb-3",
  
  
}) {
  return (
    // <div className="flex flex-col items-center max-w-sm pt-8 mx-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div
      className={`lg:min-w-[220px] lg:max-w-[380px] 2xl:max-w-[450px]  hover:bg-white dark:border-gray-700 dark:bg-gray-800 bg-white pt-4 lg:pt-8 rounded-2xl text-center ${cardClassName}`}
      // className={`lg:min-w-[220px] lg:max-w-[380px] 2xl:max-w-[350px]  hover:bg-white dark:border-gray-700 dark:bg-gray-800 bg-white pt-4 lg:pt-8 rounded-2xl text-center ${cardClassName}`}
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
            // className={`w-max rounded-t-lg object-cover object-center lg:pt-5 ${imgWidth} ${imgBgColor} ${imgClassName}`}
            className={`rounded-t-lg object-cover object-center lg:pt-5  ${imgClassName}`}
            src={`${imgSrc} `}
            alt=""
          />
        )}
      </div>

      <div className={`${contentClass}`}>
        <a href="#">
          {/* <h5 className='mt-0 text-2xl font-semibold leading-7 tracking-tight transition "${titleTxtColor}" hover:text-primary-600 dark:text-white'>{title}</h5> */}
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
        // <div className={`flex justify-start ${footerClass}`}>
          <div className={`flex items-center test-left ${footerClass}`}>
            <Icon
              iconName="/doctor-image.png"
              className="h-10 w-10 rounded-full bg-pink-300 object-cover"
            ></Icon>
            <div className="px-1 lg:px-3 text-left">
              <h6 className="font-bold text-secondary-500 ">
                {footerTitle}
              </h6>
              <p className="text-sm text-primary-700/60">{footerBody}</p>
            </div>
          </div>
        // </div>
      )}
    </div>
  );
}

export default Card;
