// Import Next
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ISliderItem {
	company: string;
	logo: StaticImport;
	comment: string;
	name: string;
	position: string;
	avatar: StaticImport;
}

function SliderItem(props: ISliderItem) {
	// Props Destruction
	const { company, logo, comment, name, position, avatar } = props;
	return (
		<div className="p-8 flex flex-col gap-y-8 border-slate-200 bg-white border rounded-[20px] slider-item-shadow">
			<div className="flex gap-x-2 py-1">
				<div className="relative h-8 w-8">
					<Image src={logo} alt={company} fill />
				</div>
				<h6 className="text-slate-600 text-2xl font-bold">{company}</h6>
			</div>
			<p>{comment}</p>
			<div className="flex items-center gap-x-4">
				<div className="relative h-16 w-16 rounded-full">
					<Image src={avatar} alt={name} fill />
				</div>
				<div>
					<p className="text-lg">{name}</p>
					<p className="text-slate-600">{position}</p>
				</div>
			</div>
		</div>
	);
}

export default SliderItem;
