import { GirlAds, LightElipse, LightImg } from "../assets/Banner"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const Banner: React.FC = () => {
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
				hidden: { opacity: 0, y: 10 },
			}}
			transition={{ duration: 1 }}
			className="flex w-full px-20 h-screen items-center relative"
		>
			<img src={LightElipse} alt="" className="absolute -left-40 -top-10" />
			<div className="relative w-full flex items-center h-full">
				<div className="flex flex-col w-[48%] gap-14">
					<div className="flex flex-col w-full">
						<img src={LightImg} alt="" className="w-12 animate-pulse" />
						<h1 className="text-[#1F1C14] font-bold text-3xl mb-4">
							Speak like a native, learning at{" "}
							<span className="text-[#029BC5]">Fluency Hub</span>
						</h1>

						<p className="text-[#1F1C14B2] text-lg">
							Welcome to Fluency Hub, a premier language school specializing in
							English, Spanish, and French education. Our mission is to empower
							students with the essential communication skills needed to thrive
							in today's globalized world..
						</p>
					</div>

					<a
						href="/sign-up"
						className="flex items-center px-10 py-2 rounded-2xl bg-[#FAB900] hover:bg-[#362B0E] hover:text-white text-[#362B0E] h-12 font-bold w-fit transition-colors duration-300"
					>
						Sign Up
					</a>
				</div>

				<img src={GirlAds} alt="" className="w-1/2 absolute right-10" />
			</div>
		</motion.section>
	)
}

export default Banner
