// Import React
import { forwardRef } from "react";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Components
import SliderItem from "./SliderItem";
import type { ISliderItem } from "./SliderItem";

// Import Hooks
import useWindowSize from "@/hooks/useWindowSize";

// Import Styles
import "swiper/css";

interface ISlider {
	data: ISliderItem[];
}

const Slider = forwardRef(function Slider(props: ISlider, ref: any) {
	// Props Destruction
	const { data } = props;

	// Variables
	const { width } = useWindowSize();
	const isDesktop = width > 768;
	const slidesPerView = isDesktop ? 4 : 1.2;

	return (
		<Swiper
			direction="horizontal"
			spaceBetween={isDesktop ? 40 : 20}
			slidesPerView={slidesPerView}
			loop
			loopedSlides={2}
			centeredSlides
			grabCursor
			effect="fade"
			onSwiper={swiper => {
				ref.current = swiper;
			}}
		>
			{data?.map((slide, index) => (
				<SwiperSlide key={index}>
					<SliderItem {...slide} />
				</SwiperSlide>
			))}
		</Swiper>
	);
});

export default Slider;
