import React from "react"
import Banner from "../containers/Banner"
import Courses from "../containers/Courses"
import WhyStartCourse from "../containers/WhyStartCourse"
import OurClasses from "../containers/OurClasses"
import Footer from "../components/Footer"
import Newsletter from "../containers/Newsletter"
import UsersRate from "../containers/UsersRate"

const Home: React.FC = () => {
	return (
		<section>
			<Banner />
			<Courses />
			<WhyStartCourse />
			<OurClasses />
			<UsersRate />
			<Newsletter />
			<Footer />
		</section>
	)
}

export default Home
