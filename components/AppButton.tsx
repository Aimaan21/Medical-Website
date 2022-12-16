import React from 'react'

export interface ButtonModel {
    
	btnText?: string
	btnTextColor?: string
	className?: string
	btnColor?: string
}

function AppButton({
    btnText="button",
    btnTextColor="",
    btnColor="bg-primary-100",
    type="",
    marginTop="mt-5",
    className="max-w-[300px] text-white  hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-xl py-5 px-8 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    clicked,
}:any) {
  return (
    <button type={type} onClick={clicked} className={` ${className} ${btnColor} ${btnTextColor} ${marginTop}`}>
    {btnText}
    </button>
  )
}

export default AppButton