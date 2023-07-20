// Import Components
import Button from "@/components/button/Button";

function BestHead() {
	return (
		<div
			id="head"
			className="flex flex-col md:flex-row items-center gap-y-8 justify-between mb-8 md:mb-20"
		>
			<h2 className="text-3xl md:text-[56px] text-white font-bold">The best of the best</h2>
			<Button label="Sign up now" size="lg" color="white" />
		</div>
	);
}

export default BestHead;
