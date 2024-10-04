import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import RateCarousel from "../components/RateCarousel"

const UsersRate: React.FC = () => {
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

	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 0.6 }}
			className="bg-[#FFF8E5] px-20 py-10 w-full flex flex-col justify-center items-center h-[80svh] mb-40"
		>
			<h1 className="text-[#1F1C14] font-bold text-5xl">
				Student testimonials
			</h1>

			<RateCarousel />
		</motion.section>
	)
}

export default UsersRate
