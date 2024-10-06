import { EnglishTeacher } from "../assets/AboutUs"

const AboutUs: React.FC = () => {
	return (
		<section className="flex flex-col items-center px-20 py-24 gap-10 ">
			<img
				src={EnglishTeacher}
				alt=""
				className="rounded-3xl h-[80svh] w-full object-cover object-top"
			/>

			<hr className="w-2/3" />

			<p className="text-[#1F1C14B2] text-xl text-center">
				Welcome to <span className="text-[#029BC5] font-bold">Fluency Hub</span> a premier
				language school specializing in English, Spanish, and French education.
				Our mission is to empower students with the essential communication
				skills needed to thrive in today's globalized world. At [Institution's
				Name], we stand apart from traditional language centers by offering
				personalized, immersive learning experiences tailored to each student's
				goals and proficiency level. Through our dynamic and interactive
				approach, students quickly develop fluency and confidence in speaking,
				listening, reading, and writing. Our dedicated and experienced
				instructors use innovative teaching methods that make learning both
				enjoyable and effective, ensuring students not only master the language
				but also appreciate the culture and nuances behind it
			</p>
		</section>
	)
}

export default AboutUs
