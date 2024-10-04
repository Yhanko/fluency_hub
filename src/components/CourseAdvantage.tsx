import React from "react"
import { AdvantageIcon } from "../assets/WhyStartCourse"

interface Props {
	advantage: string
}

const CourseAdvantage: React.FC<Props> = ({ advantage }) => {
	return (
		<li className="flex gap-4 w-full items-start text-[#1F1C14B2]">
			<img src={AdvantageIcon} alt="" />
			<p className="text-xl font-semibold hover:text-[#1F1C14]">{advantage}</p>
		</li>
	)
}

export default CourseAdvantage
