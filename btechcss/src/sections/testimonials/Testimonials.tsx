"use client";

// Import React
import { useRef } from "react";
// Import Components
import Slider from "@/components/slider/Slider";
import type { ISliderItem } from "@/components/slider/SliderItem";
import TestimonitalsHead from "./_partials/TestimonitalsHead";

// Import Asseets
import ZoomerLogo from "@/assets/images/zoomer-logo.svg";
import ZoomerAvatar from "@/assets/images/zoomer-avatar.svg";

function Testimonials() {
	// Slider Data
	const sliders: ISliderItem[] = [
		{
			company: "Zoomerr",
			comment:
				"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
			logo: ZoomerLogo,
			name: "Hellen Jummy",
			position: "Team Lead",
			avatar: ZoomerAvatar,
		},
		{
			company: "Zoomerr",
			comment:
				"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
			logo: ZoomerLogo,
			name: "Hellen Jummy",
			position: "Team Lead",
			avatar: ZoomerAvatar,
		},
		{
			company: "Zoomerr",
			comment:
				"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
			logo: ZoomerLogo,
			name: "Hellen Jummy",
			position: "Team Lead",
			avatar: ZoomerAvatar,
		},
		{
			company: "Zoomerr",
			comment:
				"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
			logo: ZoomerLogo,
			name: "Hellen Jummy",
			position: "Team Lead",
			avatar: ZoomerAvatar,
		},
		{
			company: "Zoomerr",
			comment:
				"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
			logo: ZoomerLogo,
			name: "Hellen Jummy",
			position: "Team Lead",
			avatar: ZoomerAvatar,
		},
	];

	// Ref
	const swiperRef = useRef<any>();

	return (
		<section className="py-20">
			<TestimonitalsHead swiperRef={swiperRef} />
			<div className="relative after:content-normal after:inline-block slider-bg after:transform-h-center after:bg-amber-200 after:absolute after:-top-[20px] md:after:-top-[40px] after:w-full md:after:w-[90%] after:h-[90%] md:after:h-full">
				<Slider data={sliders} ref={swiperRef} />
			</div>
		</section>
	);
}

export default Testimonials;
