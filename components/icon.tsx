import React from "react"

export default function Icon({ svgClass = "", iconColor = "currentColor", iconName = "activity", iconPos = "left", iconSize = "20px", iconStroke = "1.5", title = "", className = "" }) {
	return (
		<>
			<span className="mr-4" title={title}>
				<img
					className={`${svgClass} inline-block ${className} mt-[-8px]`}
					width={iconSize}
					height={iconSize}
                    src={`${iconName}`}
					// fill="none"
					// stroke={iconColor}
					// strokeWidth={iconStroke}
					// strokeLinecap="round"
					// strokeLinejoin="round"
                    >
					
				</img>
			</span>
		</>
	)
}
