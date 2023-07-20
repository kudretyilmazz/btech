// Import Components
import FooterBottomNav from "./FooterBottomNav";

function FooterBottomBar() {
	return (
		<div className="h-[190px] md:h-24 border-t py-12 border-slate-700 bg-slate-900 flex flex-col md:flex-row items-center justify-between">
			<p className="text-slate-200 text-sm md:text-base">Collers @ 2023. All rights reserved.</p>
			<FooterBottomNav />
		</div>
	);
}

export default FooterBottomBar;
