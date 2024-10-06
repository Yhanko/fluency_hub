import { ChineseChild, RiskImg } from "../assets/WhyStartCourse"
import CourseAdvantage from "../components/CourseAdvantage"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const WhyStartCourse: React.FC = () => {
	const controls = useAnimation()
	const { ref, inView } = useInView({
		threshold: 0.2,
	})

	useEffect(() => {
		if (inView) {
			controls.start("visible")
		} else {
			controls.start("hidden")
		}
	}, [controls, inView])

	const advantage = [
		{ description: "Dynamic and interactive approach" },
		{ description: "Dedicated and experienced instructors" },
		{
			description:
				"Innovative teaching methods that make learning both enjoyable and effective",
		},
	]

	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 100 },
			}}
			transition={{ duration: 0.6 }}

			className="w-full px-20 flex items-center h-screen"
		>
			<img src={ChineseChild} alt="" className="w-1/2" />

			<div className="w-1/2 flex flex-col justify-center gap-4">
				<h1 className="text-[#1F1C14] font-bold text-3xl">
					Why start a course with{" "}
					<span className="text-[#029BC5]">Fluency Hub</span> ?
				</h1>

				<img src={RiskImg} alt="" className="w-2/3 animate-pulse" />

				<div className="flex flex-col gap-4 w-[75%]">
					{advantage.map((advantage, index) => (
						<CourseAdvantage key={index} advantage={advantage.description} />
					))}
				</div>
			</div>
		</motion.section>
	)
}

export default WhyStartCourse
