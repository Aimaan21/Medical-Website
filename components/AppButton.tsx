import React from "react";

export interface ButtonModel {
  btnText?: string;
  btnTextColor?: string;
  className?: string;
  btnColor?: string;
}

function AppButton({
  btnText = "button",
  type = "",
  className = "bg-primary-500",
  clicked,
}: any) {
  return (
    <button
      type={type}
      onClick={clicked}
      className={`mr-2 mb-2 rounded-full px-4 py-2 text-center  hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:px-3 md:py-2 md:text-sm xl:py-3 xl:px-6 2xl:px-8 xl:text-lg ${className} `}
    >
      {btnText}
    </button>
  );
}

export default AppButton;
