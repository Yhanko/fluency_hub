import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { AudioIcon, LiveIcon, PlayIcon, VideoCall } from "../assets/OurClasses"
import Languages from "../components/Languages"

const OurClasses: React.FC = () => {
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

	const classes_media = [
		{ icon: AudioIcon, media: "Audio Classes" },
		{ icon: LiveIcon, media: "Live Classes" },
		{ icon: PlayIcon, media: "Recorded Classes" },
	]

	return (
		<motion.section
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 25 },
			}}
			transition={{ duration: 0.6 }}
			className="w-full px-20 py-10 flex flex-col items-center justify-center mb-40 "
		>
			<div className="flex flex-col gap-4 items-center w-1/2 text-center">
				<h1 className="text-[#1F1C14] font-bold text-5xl">
					What are our classes like?
				</h1>
				<p className="text-xl text-[#1F1C14B2]">
					We teach in-person and virtual classes, managing groups on platforms
					like Discord and WhatsApp for each level.
				</p>
				<a
						href="/sign-up" className="flex items-center px-12 py-3 rounded-2xl bg-[#FAB900] hover:bg-[#362B0E] hover:text-white text-[#362B0E] h-12 font-extrabold w-fit transition-colors duration-300">
					Sign Up
				</a>
			</div>

			<img src={VideoCall} alt="" className="mb-10" />

			<ul className="flex justify-around w-full px-20">
				{classes_media.map((classes, index) => (
					<Languages key={index} icon={classes.icon} language={classes.media} />
				))}
			</ul>
		</motion.section>
	)
}

export default OurClasses
