// Import Next
import Image from "next/image";

// Import Assets
import WawesCol from "@/assets/images/wawes-on-col.svg";
import ShieldIcon from "@/assets/images/shield-icon.svg";
import SearchIcon from "@/assets/images/search-icon.svg";
import ArrowRight from "@/assets/images/arrow-right.svg";

function CollectionBottom() {
	// List
	const list = [
		{ title: "Cras eget", icon: ShieldIcon },
		{ title: "Dolor pharetra", icon: ShieldIcon },
		{ title: "Amet, fringilla", icon: ShieldIcon },
		{ title: "Amet nibh", icon: ShieldIcon },
		{ title: "Sed velit", icon: ShieldIcon },
	];
	return (
		<div className="w-full h-[400px] md:h-[684px] collection-bottom-bg flex mt-8 md:mt-0 flex-col md:flex-row gap-x-20 gap-y-8">
			<div className="pl-4 md:pl-20">
				<ul className="flex flex-row max-w-full overflow-auto md:flex-col hide-scrollbars">
					<li className="flex items-center gap-x-4 md:w-64 h-[56px] md:mb-4 p-4 shrink-0  bg-white rounded-lg collection-selected">
						<Image src={SearchIcon} alt="Bibendum tellus" />
						<p className="font-normal text-[20px] text-slate-900">Bibendum tellus</p>
						<Image src={ArrowRight} alt="Bibendum tellus" />
					</li>
					{list?.map((item, index) => (
						<li
							key={index}
							className="flex items-center gap-x-4 w-64 h-[56px] md:mb-4 p-4 shrink-0"
						>
							<Image src={item.icon} alt={item.title} className="max-w-full" />
							<p className="font-normal text-[20px] text-slate-900">{item.title}</p>
						</li>
					))}
				</ul>
			</div>
			<div className="md:pr-20 flex-1">
				<Image src={WawesCol} alt="desktops" />
			</div>
		</div>
	);
}

export default CollectionBottom;
