import React from "react"

const Testimonial: React.FC = () => {
	return (
		<div className="flex flex-col bg-white p-6 rounded-lg gap-4 w-full">
			<div className="flex gap-4">
				<div className="w-4 bg-[#FAB900] h-full"></div>

				<p className="text-[#1F1C14B2]">
					"Simform is quick to identify larger problem with the Software so we
					decided to expand our scope to build new modules" "Simform is quick to
					identify larger problem with the Software so we decided to expand our
					scope to build new modules"
				</p>
			</div>

			<div className="flex items-center gap-2">
				<img
					src="https://randomuser.me/api/portraits/women/90.jpg"
					alt="Jeewa Markram"
					className="w-10 h-10 rounded-full"
				/>
				<span className="font-semibold text-lg">Jeewa Markram</span>
			</div>
		</div>
	)
}

export default Testimonial
