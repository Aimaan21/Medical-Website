import React from "react";
import Icon from "./icon";

export interface ButtonModel {
 
  btnText?: string;
  btnTextColor?: string;
  className?: string;
  btnColor?: string;
}

function IconButton({
 
  btnText = "active-button",
  type = "",
  iconName="",
  primaryText="primary text",
  headerText="header text",
  className = "bg-white text-primary-500",
  clicked,
}: any) {
  return (
    <button
      type={type}
      onClick={clicked}
      className={` rounded-full px-3 md:px-5 py-1 text-center  hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300  ${className} max-w-[170px] justify-center flex items-center`}
    >
     
     <Icon iconName={`${iconName}`} className='object-cover w-auto h-5' wrapperClassName="mr-3"></Icon>
        
      <div className="flex flex-col space-y-[-15px]">
      <p className="text-[7px] sm:text-[10px]">{primaryText}</p>
      <span className="text-[11px] sm:text-[15px]">{headerText}</span>
      </div>
      
    </button>
  );
}

export default IconButton;
