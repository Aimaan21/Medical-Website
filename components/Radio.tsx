import React from 'react'
import Icon from './icon'

export interface cardModel {
    hasIcon?:string
    iconSize?:string
    iconName?:string
    labelTxtSize?:string
    labelTxtColor?:string
    bordeRounded?:string
	className?: string
	// btnColor?: string
}


export function Radio({iconName="",label="Default Radio",value="Dafault Value"}) {
  return (
    <div className="flex items-center  xl:pr-12 xl:my-3  border-gray-200 dark:border-gray-700">
    <input id="bordered-radio-1" type="radio" value={`${value}`} name="bordered-radio" className=" w-3 h-3 md:w-4 md:h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <div className="py-1 px-2 md:py-2 md:px-3 xl:py-3 2xl:px-6 ml-2 md:ml-4 w-[33vw] lg:w-[60%] xl:w-[70%] xl:mx-8 rounded-full border ">
    <Icon iconName={`${iconName}`} className='object-cover w-auto h-3 md:h-4'></Icon>
    <label htmlFor="bordered-radio-1" className="text-md md:text-lg xl:text-xl font-normal text-gray-900 dark:text-gray-300 mr-3 ">{label}</label>

    </div>
    </div>
  )
}

export default Radio