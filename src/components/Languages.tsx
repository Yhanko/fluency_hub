interface Props {
	icon: string
	language: string
}

const Languages: React.FC<Props> = ({ icon, language }) => {
	return (
		<div className="flex gap-2 justify-center items-center hover:bg-[#d3d3d365] rounded-2xl p-2 hover:cursor-pointer">
			<img src={icon} alt="" />
			<p className="text-xl font-semibold">{language}</p>
		</div>
	)
}

export default Languages
