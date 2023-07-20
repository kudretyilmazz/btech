// Import Next
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Import Components
import Button from "@/components/button/Button";

export interface IBestPostCard {
	title: string;
	description: string;
	href: string;
	image: StaticImport;
}

function BestPostCard(props: IBestPostCard) {
	// Props Destruction
	const { title, description, href, image } = props;
	return (
		<article className="w-full rounded-[10px] best-post-card-shadow bg-slate-900">
			<div className="h-56 w-full relative">
				<Image src={image} alt={title} fill className="rounded-t-[14px]" />
			</div>
			<div className="p-8 flex flex-col gap-y-4">
				<h5 className="text-2xl text-white font-bold"> {title} </h5>
				<p className="text-lg text-white"> {description} </p>
				<Link href={href}>
					<Button size="md" label="Buy Now" color="white" block />
				</Link>
			</div>
		</article>
	);
}

export default BestPostCard;
