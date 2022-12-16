import React from 'react'

export interface cardModel {
    haveDetails?:boolean
    imgSize?:string
    titleTxtSize?:string
    bodyTxtSize?:string
    titleTxtColor?:string
    bodyTxtColor?:string
    wrapperBgColor?:string
	btnTextColor?: string
	className?: string
	// btnColor?: string
}

function Card({title="kjhfkjdahkjhkf",body="afjkhfkahkf",titleTxtSize="",bodyTxtSize="",titleTxtColor="",bodyTxtColor="",wrapperBgColor="bg-white",haveDetails=true}) {
  return (
    
			// <div className=" text-center flex pt-8 flex-col items-center  max-w-sm  mx-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className={`min-w-[220px] text-center flex pt-8 flex-col items-center my-8 max-w-sm  mx-6 ${wrapperBgColor} rounded-2xl shadow-md dark:bg-gray-800 hover:bg-white dark:border-gray-700`}>
				<div className="">
                <img className="rounded-t-lg object-cover object-center h-20 w-max" src="favicon.ico" alt="" />

                </div>
				
				<div className="py-4 px-4">
					<a href="#">
						{/* <h5 className='mt-0 text-2xl font-semibold tracking-tight leading-7 transition "${titleTxtColor}" hover:text-primary-600 dark:text-white'>{title}</h5> */}
						<h5 className={`mt-0 ${titleTxtSize} font-semibold tracking-tight leading-7 transition ${titleTxtColor} hover:text-primary-600 dark:text-white`}>{title}</h5>
					</a>
					<div>
					{
						haveDetails
						&& <p className="font-normal text-xl text-slate-600 dark:text-gray-400">{body}</p>
					}
					</div>
					
					
					
				</div>
			</div>
		
  )
}

export default Card