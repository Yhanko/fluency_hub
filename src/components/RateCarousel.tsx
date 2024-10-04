import { Swiper, SwiperSlide } from "swiper/react"
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "swiper/css"
import { Autoplay, Navigation } from "swiper/modules"

const testimonials = [
	{
		id: 1,
		name: "Jassica Andrew",
		image: "https://randomuser.me/api/portraits/women/1.jpg",
		stars: 5,
		content:
			"My child has improved a lot after finishing school. Thank you very much Edudu.",
	},
	{
		id: 2,
		name: "Darlene Robertson",
		image: "https://randomuser.me/api/portraits/women/2.jpg",
		stars: 5,
		content:
			"My child knows how to write very good essays. English ability is also much better. The cost is very cheap, so you should register. Thank you very much Edudu.",
	},
	{
		id: 3,
		name: "Dianne Russell",
		image: "https://randomuser.me/api/portraits/women/3.jpg",
		stars: 4,
		content:
			"My child has improved a lot after finishing school. Thank you very much Edudu.",
	},
	{
		id: 4,
		name: "Mario Pilo",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
		stars: 5,
		content:
			"My child has improved a lot after finishing school. Thank you very much Edudu.",
	},
]

const RateCarousel: React.FC = () => {
	return (
		<div className="relative w-full mx-auto flex items-center justify-between gap-4">
			<button className="swiper-button-prev h-fit bg-[#FFEBB6] p-3 rounded-full shadow-lg">
				<FaChevronLeft className="text-white" />
			</button>

			<div className="w-11/12">
				{" "}
				<Swiper
					spaceBetween={30}
					slidesPerView={3}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}
					modules={[Navigation, Autoplay]}
					className="relative"
				>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.id} className="py-10">
							<div className="p-5 bg-white shadow-lg rounded-3xl text-center max-w-[356px] mx-auto">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-11 h-11 rounded-full mx-auto mb-4"
								/>
								<h3 className="font-semibold text-lg">{testimonial.name}</h3>
								<div className="flex justify-center my-2">
									{Array(testimonial.stars)
										.fill(0)
										.map((_, i) => (
											<FaStar key={i} className="text-[#FFC107]" />
										))}
								</div>
								<p className="text-[#1F1C14B2]">{testimonial.content}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<button className="swiper-button-next h-fit bg-[#FFEBB6] p-3 rounded-full shadow-lg">
				<FaChevronRight className="text-white" />
			</button>
		</div>
	)
}

export default RateCarousel
