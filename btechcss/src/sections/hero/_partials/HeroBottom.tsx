// Import Next
import Image from "next/image";

// Import Asset
import TrophyIcon from "@/assets/images/trophy.svg";
import TunnelIcon from "@/assets/images/tunnel.svg";
import TvIcon from "@/assets/images/tv.svg";
import Rectangle1 from "@/assets/images/rectange1.svg";
import Rectangle2 from "@/assets/images/rectange2.svg";

function HeroBottom() {
	return (
		<div className="p-4 md:p-20 flex flex-col md:flex-row gap-x-20 gap-y-8 my-16 md:my-0">
			<div className="flex flex-col gap-y-4" id="item">
				<div className="relative w-16 mx-auto md:mx-0">
					<Image src={Rectangle1} alt="rec" className="absolute top-o left-8" />
					<Image src={TrophyIcon} alt="trophy" />
				</div>
				<h4 className="text-xl text-slate-900 font-medium text-center md:text-left">
					Nibh viverra
				</h4>
				<p className="text-slate-900 text-lg font-normal text-center md:text-left">
					Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque
					leo, massa.
				</p>
			</div>
			<div className="flex flex-col gap-y-4" id="item">
				<div className="relative w-16 mx-auto md:mx-0">
					<Image src={Rectangle2} alt="rec" className="absolute top-o left-6" />
					<Image src={TunnelIcon} alt="trophy" />
				</div>
				<h4 className="text-xl text-slate-900 font-medium text-center md:text-left">Cursus amet</h4>
				<p className="text-slate-900 text-lg font-normal text-center md:text-left">
					Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque
					leo, massa.
				</p>
			</div>
			<div className="flex flex-col gap-y-4" id="item">
				<div className="relative w-16 mx-auto md:mx-0">
					<div className="rounded-2xl absolute top-o left-10 bg-fuchsia-700 opacity-50 w-11 h-11"></div>
					<Image src={TvIcon} alt="trophy" />
				</div>
				<h4 className="text-xl text-slate-900 font-medium text-center md:text-left">
					Ipsum fermentum
				</h4>
				<p className="text-slate-900 text-lg font-normal text-center md:text-left">
					Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque
					leo, massa.
				</p>
			</div>
		</div>
	);
}

export default HeroBottom;
