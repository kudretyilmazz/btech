// Import Next
import Image from "next/image";

// Import Components
import Button from "@/components/button/Button";
import Check from "@/components/icons/Check";

// Import Assets
import DesktopImage from "@/assets/images/Desktop.svg";
import DesktopBGImage from "@/assets/images/desktop-bg.svg";

function WhyJoinUs() {
	// List
	const list = [
		"Est et in pharetra magna adipiscing ornare aliquam.",
		"Tellus arcu sed consequat ac velit ut eu blandit.",
		"Ullamcorper ornare in et egestas dolor orci.",
	];

	return (
		<section className="p-4 md:px-20 md:py-40">
			<div
				id="inner-container"
				className="bg-white whyjoinus-shadow rounded-[30px] gap-x-20 py-8 items-center px-4 gap-y-8 md:p-20 flex flex-col md:flex-row"
			>
				<div className="flex flex-col gap-y-8 flex-1">
					<h2 className="text-3xl text-center md:text-left md:text-[56px] font-bold text-slate-900">
						Why join us
					</h2>
					<div className="flex flex-col gap-y-1">
						{list.map((line, index) => (
							<div key={index} className="flex">
								<Check className="fill-green-700 mr-2" />
								<span className="text-[20px] text-slate-900">{line}</span>
							</div>
						))}
					</div>
					<Button label="Sign up now" size="md" className="mx-auto z-10 md:mx-0" />
				</div>
				<div className="relative flex-1">
					<Image src={DesktopImage} alt="desktop" className="z-10 relative" />
					<Image src={DesktopBGImage} alt="desktopbg" className="absolute z-0 -top-16" />
				</div>
			</div>
		</section>
	);
}

export default WhyJoinUs;
