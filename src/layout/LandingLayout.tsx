import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const LandingLayout: React.FC = () => {
	return (
		<div className="font-nunito min-h-screen flex flex-col">
			<Header />
			<div className="flex-grow">
				<Outlet />
			</div>
		</div>
	)
}

export default LandingLayout
