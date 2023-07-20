"use client";

// Import Next
import Image from "next/image";

// Import Hooks
import useWindowSize from "@/hooks/useWindowSize";

// Import Assets
import ChartBg from "@/assets/images/chart.svg";
import ChartMobileBg from "@/assets/images/chart-mobile.png";

function Chart() {
	// Variables
	const { width } = useWindowSize();
	const isDesktop = width > 768;
	return (
		<section>
			<Image src={isDesktop ? ChartBg : ChartMobileBg} alt="world chart" className="max-w-full" />
		</section>
	);
}

export default Chart;
