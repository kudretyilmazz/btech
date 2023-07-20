// Import Next
import Image from "next/image";

// Import Components
import Button from "@/components/button/Button";
import PlayCircle from "@/components/icons/PlayCircle";

// Import Assets
import HeroAyakkabiImage from "@/assets/images/hero-ayakkabi.svg";

function HeroTop() {
	return (
		<div className="flex gap-x-20 gap-y-8 flex-col md:flex-row p-4 md:p-20">
			<div className="left w-full md:w-2/3 flex flex-col gap-y-8 justify-center">
				<h2 className="text-[56px] leading-tight md:text-7xl text-center md:text-left font-bold">
					Collectible Sneakers
				</h2>
				<p className="text-slate-900 text-lg text-center md:text-left">
					Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
					mauris. Pharetra, eu imperdiet ipsum ultrices amet.
				</p>
				<div className="flex gap-x-4 justify-center md:justify-normal">
					<Button label="Sign up now" size="md" />
					<div className="flex items-center gap-x-2 px-4 py-2 cursor-pointer">
						<PlayCircle className="text-amber-900" />
						<span className="text-amber-900">Watch Demo</span>
					</div>
				</div>
			</div>
			<div className="after:content-normal after:w-[70%] after:left-10 after:bg-amber-400 after:top-0 after:-z-10 after:block after:absolute after:h-[260px] md:after:w-[330px] md:after:h-[340px] after:rounded-[30px] md:after:rounded-[50px]  md:after:left-10  relative">
				<Image className="w-[90%] md:w-full z-10 mx-auto" src={HeroAyakkabiImage} alt="snickers" />
			</div>
		</div>
	);
}

export default HeroTop;
