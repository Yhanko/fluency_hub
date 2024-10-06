import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Testimonial from "../components/Testimonials"

type FormValues = {
	photo: FileList
	fullName: string
	comment: string
}

const Commentary: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
	}

	return (
		<section className="flex py-24 px-20 h-screen justify-around bg-[#FFF8E5]">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-1/2 bg-white p-10 rounded-lg flex flex-col justify-between max-w-lg"
			>
				<div className="flex flex-col gap-4">
					<label htmlFor="photo" className="flex flex-col">
						Upload Your Photo
						<input
							className="bg-[#F2F2F2] px-4 py-2 rounded h-11 outline-none"
							type="file"
							{...register("photo", { required: "Photo is required" })}
						/>
						{errors.photo && (
							<span className="text-red-500 text-sm">
								{errors.photo.message}
							</span>
						)}
					</label>

					<label htmlFor="fullName" className="flex flex-col">
						Full Name
						<input
							className="bg-[#F2F2F2] px-4 py-2 rounded h-11 outline-none"
							type="text"
							placeholder="Place your name here..."
							{...register("fullName", { required: "Full name is required" })}
						/>
						{errors.fullName && (
							<span className="text-red-500 text-sm">
								{errors.fullName.message}
							</span>
						)}
					</label>

					<label htmlFor="comment" className="flex flex-col">
						Write a comment
						<textarea
							rows={5}
							className="bg-[#F2F2F2] px-4 py-2 resize-none"
							placeholder="Place a comment here..."
							{...register("comment", { required: "Comment is required" })}
						></textarea>
						{errors.comment && (
							<span className="text-red-500 text-sm">
								{errors.comment.message}
							</span>
						)}
					</label>
				</div>

				<button
					type="submit"
					className="flex items-center justify-center px-10 py-2 rounded bg-[#FAB900] hover:bg-[#362B0E] hover:text-white text-[#362B0E] h-11 font-bold transition-colors duration-300"
				>
					Send Comment
				</button>
			</form>

			<div className="flex flex-col h-full overflow-y-auto gap-10 w-1/2 px-10">
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</div>
		</section>
	)
}

export default Commentary
