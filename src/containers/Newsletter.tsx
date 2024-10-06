import { NewsletterLayout } from "../assets/Newsletter"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const Newsletter: React.FC = () => {
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
			className="min-h-96 px-20 py-10 w-full flex justify-center items-center mb-40"
		>
			<div className="relative w-full flex items-center justify-center h-full">
				<img src={NewsletterLayout} alt="" className="w-full" />
				<div className="absolute flex flex-col items-center justify-center gap-8 text-white">
					<h1 className="text-3xl font-semibold">
						Subscribe to receive our updates!
					</h1>

					<p className="text-[#FFFFFF]">
						Don't hesitate to leave us your email so you won't miss any updates.
					</p>

					<form className="h-12 flex w-[90%] rounded-lg">
						<input
							type="text"
							placeholder="Enter your email"
							className="w-full bg-[#FFFFFF1A] rounded-l-lg px-4 outline-none placeholder:text-white text-white"
						/>{" "}
						<button
							type="submit"
							className="bg-[#F1B300] px-4 rounded-e-lg text-white"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</motion.section>
	)
}

export default Newsletter
