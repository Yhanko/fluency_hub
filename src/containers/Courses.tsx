import React from "react"
import Languages from "../components/Languages"
import { English, Extra, French, Spanish } from "../assets/Courses/icons"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const Courses: React.FC = () => {
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

	const language = [
		{ icon: French, language: "French" },
		{ icon: Spanish, language: "Spanish" },
		{ icon: English, language: "English" },
		{ icon: Extra, language: "Extra" },
	]

	return (
        <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 300 },
        }}
        transition={{ duration: 0.6 }} 
        className="w-full px-20 flex flex-col items-center justify-center h-[80svh] gap-6">
			<div className="flex flex-col gap-6 items-center w-[50%] text-center">
				<h1 className="text-[#1F1C14] font-bold text-5xl">
					We have 4 courses for you
				</h1>
				<p className="text-xl text-[#1F1C14B2]">
					Diverse lessons around 4 subjects: French, Spanish, English,
					accompanied by extra activities to enhance knowledge and explore
					students' abilities, accelerating their learning
				</p>
			</div>

			<ul className="flex justify-around gap-4 w-full">
				{language.map((language, index) => (
					<Languages
						key={index}
						icon={language.icon}
						language={language.language}
					/>
				))}
			</ul>
		</motion.section>
	)
}

export default Courses
