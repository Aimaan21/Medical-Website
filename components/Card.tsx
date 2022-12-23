import React from "react";
import Icon from "./icon";

export interface cardModel {
  hasImageTag?: boolean;
  imageTagTxt?: string;
  imageTagTxtColor?: String;
  hasImage?: boolean;
  imgHeight?: string;
  imgSrc?: string;
  imgBgColor?: string;
  haveBody?: boolean;
  bodyTxtSize?: string;
  bodyTxtColor?: string;
  titleTxtSize?: string;
  titleTxtColor?: string;
  wrapperBgColor?: string;
  wrapperPaddingTop?: string;
  wrapperMaxWidth?: string;
  wrapperBorder?: string;
  btnTextColor?: string;
  className?: string;
  hasFooter?: boolean;
  // btnColor?: string
}

function Card({
  title = "kjhfkjdahkjhkf",
  body = "afjkhfkahkf",
  titleTxtSize = "text-xl md:text-2xl lg:text-3xl",
  titleTxtColor = "text-primary-100",
  wrapperBgColor = "bg-white",
  haveBody = true,
  hasImage = true,
  imgSrc = "favicon.ico",
  imgHeight = "h-10 md:15 lg:h-20",
  textAlign = "text-center",
  wrapperPaddingTop = "pt-4 lg:pt-8",
  wrapperMaxWidth = "",
  wrapperBorder = "rounded-2xl",
  imgBgColor = "bg-white",
  hasImageTag = false,
  imageTagTxt = "default",
  hasFooter=false,
  footerTitle="Default title",
  footerBody="This is footer body",
  titleClass="",
  bodyClass=""
}) {
  return (
    // <div className="flex flex-col items-center max-w-sm pt-8 mx-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div
      className={`lg:min-w-[220px] ${textAlign} ${wrapperMaxWidth} flex ${wrapperPaddingTop} flex-col items-center  ${wrapperBgColor} ${wrapperBorder} shadow-xl dark:bg-gray-800 hover:bg-white dark:border-gray-700`}
    >
      <div className="relative">
        {hasImageTag && (
          <p className="absolute  px-1 ml-4  mt-3 md:ml-2 md:mt-2 xl:px-4 xl:py-1 lg:mt-4 lg:ml-4 xl:ml-4 md:text-sm xl:text-xl font-thin text-white rounded-md backdrop-blur-md backdrop-grayscale bg-slate-300">
            {imageTagTxt}
          </p>
        )}

        {hasImage && (
          <img
            className={` lg:pt-5 rounded-t-lg object-cover object-center ${imgHeight} w-max ${imgBgColor}`}
            src={`${imgSrc} `}
            alt=""
          />
        )}
      </div>

      <div className="px-2 py-2 lg:py-4 lg:px-4">
        <a href="#">
          {/* <h5 className='mt-0 text-2xl font-semibold leading-7 tracking-tight transition "${titleTxtColor}" hover:text-primary-600 dark:text-white'>{title}</h5> */}
          <h5
            className={`mt-0 ${titleTxtSize} ${titleClass} tracking-normalleading-7 transition ${titleTxtColor} hover:text-primary-600 dark:text-white`}
          >
            {title}
          </h5>
        </a>
        <div>
          {haveBody && (
            <p
              className={`  lg:font-normal ${bodyClass}  text-slate-600 dark:text-gray-400`}
            >
              {body}
            </p>
          )}
        </div>
		{
			hasFooter&&
			<hr className="w-full"/>
		}
      </div>
      {
		hasFooter &&
        <div className="w-full px-3 pb-2 lg:px-4 lg:pb-3 xl:px-6 xl:pb-3">
          
		  <div className="flex items-center ">
		  <Icon iconName="doctor-image.png" iconSize="40px" className="bg-pink-300 rounded-full" iconPositionAdjust="mt-[-5px]"></Icon>
		  <div className="px-1 lg:px-3">
		  <h6 className="text-md lg:text-xl font-bold text-primary-50">{footerTitle}</h6>
          <p className="text-sm text-slate-600">{footerBody}</p>
		  </div>		  
		  </div>
		  
        </div>
      }
    </div>
  );
}

export default Card;
