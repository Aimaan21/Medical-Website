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
  titleTxtSize = "text-3xl",
  bodyTxtSize = "text-xl",
  titleTxtColor = "text-primary-50",
  bodyTxtColor = "",
  wrapperBgColor = "bg-white",
  haveBody = true,
  hasImage = true,
  imgSrc = "favicon.ico",
  imgHeight = "h-20",
  textAlign = "text-center",
  wrapperPaddingTop = "pt-8",
  wrapperMaxWidth = "",
  wrapperBorder = "rounded-2xl",
  imgBgColor = "bg-white",
  hasImageTag = false,
  imageTagTxt = "default",
  hasFooter=false,
  footerTitle="Default title",
  footerBody="This is footer body"
}) {
  return (
    // <div className=" text-center flex pt-8 flex-col items-center  max-w-sm  mx-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div
      className={`min-w-[220px] ${textAlign} ${wrapperMaxWidth} flex ${wrapperPaddingTop} flex-col items-center my-8 mx-6 ${wrapperBgColor} ${wrapperBorder} shadow-md dark:bg-gray-800 hover:bg-white dark:border-gray-700`}
    >
      <div className="relative">
        {hasImageTag && (
          <p className=" ml-4 mt-4 absolute backdrop-blur-md backdrop-grayscale font-thin px-4 py-1 bg-slate-300 text-xl text-white rounded-md">
            {imageTagTxt}
          </p>
        )}

        {hasImage && (
          <img
            className={` pt-5 rounded-t-lg object-cover object-center ${imgHeight} w-max ${imgBgColor}`}
            src={`${imgSrc} `}
            alt=""
          />
        )}
      </div>

      <div className="py-4 px-4">
        <a href="#">
          {/* <h5 className='mt-0 text-2xl font-semibold tracking-tight leading-7 transition "${titleTxtColor}" hover:text-primary-600 dark:text-white'>{title}</h5> */}
          <h5
            className={`mt-0 ${titleTxtSize} font-semibold tracking-tight leading-7 transition ${titleTxtColor} hover:text-primary-600 dark:text-white`}
          >
            {title}
          </h5>
        </a>
        <div>
          {haveBody && (
            <p
              className={`font-normal ${bodyTxtSize}  text-slate-600 dark:text-gray-400`}
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
        <div className="w-full px-3">
          
		  <div className="flex items-center ">
		  <Icon iconName="doctor-image.png" iconSize="40px" className="bg-pink-300 rounded-full" iconPositionAdjust="mt-[-20px]"></Icon>
		  <div className="px-3">
		  <h6 className="text-xl font-bold text-primary-50">{footerTitle}</h6>
          <p className="text-slate-600">{footerBody}</p>
		  </div>		  
		  </div>
		  
        </div>
      }
    </div>
  );
}

export default Card;
