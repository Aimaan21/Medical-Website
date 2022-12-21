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
    <div className="flex items-center pr-12 my-3  border-gray-200 dark:border-gray-700">
    <input id="bordered-radio-1" type="radio" value={`${value}`} name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <div className="p-3 w-[200px] mx-8 rounded-full border ">
    <Icon iconName={`${iconName}`}></Icon>
    <label htmlFor="bordered-radio-1" className=" w-full text-xl font-normal text-gray-900 dark:text-gray-300 mr-3 ">{label}</label>

    </div>
    </div>
  )
}

export default Radio