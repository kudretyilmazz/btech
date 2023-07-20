// Import Components
import Best from "@/sections/best/Best";
import Hero from "@/sections/hero/Hero";
import WhyJoinUs from "@/sections/whyjoinus/WhyJoinUs";
import Testimonials from "@/sections/testimonials/Testimonials";
import Collection from "@/sections/collection/Collection";
import Chart from "@/sections/chart/Chart";

export default function Home() {
	return (
		<>
			<Hero />
			<Best />
			<WhyJoinUs />
			<Testimonials />
			<Collection />
			<Chart />
		</>
	);
}
