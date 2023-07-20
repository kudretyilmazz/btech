// Import Next
import Image from "next/image";

// Import Components
import BestPostCard from "@/components/best-post-grid/BestPostCard";

// Import Type
import type { IBestPostCard } from "@/components/best-post-grid/BestPostCard";

// Import Assets
import Image1 from "@/assets/images/bestpostcard1.svg";
import Image2 from "@/assets/images/bestpostcard2.svg";
import Image3 from "@/assets/images/bestpostcard3.svg";
import Backlights from "@/assets/images/bestpostgrid-backlights.svg";

function BestPostGrid() {
	const postData: IBestPostCard[] = [
		{
			title: "Title",
			description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
			href: "#",
			image: Image1,
		},
		{
			title: "Title",
			description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
			href: "#",
			image: Image2,
		},
		{
			title: "Title",
			description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
			href: "#",
			image: Image3,
		},
	];
	return (
		<div className="best-post-grid relative ">
			<div className="relative flex flex-col md:flex-row gap-x-12 gap-y-8 z-[100000000]">
				{postData.map((post, index) => (
					<BestPostCard key={index} {...post} />
				))}
			</div>
			<div className="best-post-grid-bg absolute top-1/2 left-10 w-full md:w-[110%] md:h-full md:-top-7 md:-left-11 z-[1] rotate-90 md:rotate-0">
				<Image src={Backlights} alt="post grid" />
			</div>
		</div>
	);
}

export default BestPostGrid;
