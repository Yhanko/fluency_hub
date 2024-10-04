import Logo from "./Logo"
import { FaFacebookSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer: React.FC = () => {
	return (
		<footer className="p-20 flex flex-col h-96 bg-[#E7E7E7]">
			<Logo />

			<div className="flex w-full justify-between h-full">
				<div className="flex flex-col justify-around h-full">
					<ul className="flex gap-2">
						<a href="" className="hover:text-white">
							<li>
								<FaFacebookSquare className="text-3xl" />
							</li>
						</a>

						<a href="" className="hover:text-white">
							<li>
								<FaLinkedin className="text-3xl" />
							</li>
						</a>
					</ul>

					<p>©{new Date().getFullYear()} Fluency Hub</p>
				</div>

				<ul className="flex flex-col gap-2">
					<li className="text-2xl font-semibold">Hybrid learning</li>
					<li>Classroom courses</li>
					<li>Virtual classroom courses</li>
					<li>E-learning courses</li>
					<li>Video Courses</li>
					<li>in-person course.</li>
				</ul>

				<ul className="flex flex-col gap-2">
					<li className="text-2xl font-semibold">Courses</li>
					<li>English</li>
					<li>Spanish</li>
					<li>French</li>
				</ul>

				<ul className="flex flex-col gap-2">
					<li className="text-2xl font-semibold">Our Contacts</li>
					<li>geral@fluency.com</li>
					<li>+244 947575013</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
