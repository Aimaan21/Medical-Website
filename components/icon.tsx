import Image from "next/image"
import React from "react"

export default function Icon({ svgClass = "", iconColor = "currentColor", iconName = "activity", iconPos = "left", iconSize = "20px", iconStroke = "1.5", title = "", className = "",wrapperClassName="mr-1.5 md:mr-2 xl:mr-3 2xl:mr-4"}) {
	return (
		<>
			<span className={`${wrapperClassName}  `} title={title}>
				{/* <img
					className={`${svgClass} inline-block ${className}`}
					// width={iconSize}
					// height={iconSize}
                    src={`${iconName}`}
					// fill="none"
					// stroke={iconColor}
					// strokeWidth={iconStroke}
					// strokeLinecap="round"
					// strokeLinejoin="round"
                    >
					
				</img> */}
				<Image width={20} height={10} src={`${iconName}`} alt="Picture of the author" className={`${svgClass} inline-block ${className}`}/>
			</span>
		</>
	)
}
