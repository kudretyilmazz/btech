// Import React
import type { MutableRefObject } from "react";

// Import Next
import Image from "next/image";

// Import Assets
import ArrowLeft from "@/assets/images/arrow-left.svg";

interface ITestimonitalsHead {
	swiperRef: MutableRefObject<any>;
}

function TestimonitalsHead(props: ITestimonitalsHead) {
	// Props Destruction
	const { swiperRef } = props;

	// Actions
	const prev = () => swiperRef?.current?.slidePrev();
	const next = () => swiperRef?.current?.slideNext();

	return (
		<div className="flex items-center justify-between md:px-20 mb-8 md:mb-20">
			<h2 className="text-3xl mx-auto md:mx-0 md:text-[56px] font-bold text-slate-900">
				Because they love us
			</h2>
			<div className="hidden gap-x-6 md:flex">
				<div
					onClick={prev}
					className="h-12 w-12 border-2 border-amber-900 cursor-pointer rounded-full flex items-center justify-center"
				>
					<Image src={ArrowLeft} alt="slider prev select-none" />
				</div>
				<div
					onClick={next}
					className="h-12 w-12 border-2 border-amber-900 cursor-pointer rounded-full flex items-center justify-center"
				>
					<Image src={ArrowLeft} alt="slider next" className="rotate-180 select-none" />
				</div>
			</div>
		</div>
	);
}

export default TestimonitalsHead;
