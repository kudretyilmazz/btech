// Import Components
import BestHead from "./_partials/BestHead";
import BestPostGrid from "@/components/best-post-grid/BestPostGrid";

function Best() {
	return (
		<section id="products" className="bg-slate-900 px-4 py-12 md:p-20">
			<BestHead />
			<BestPostGrid />
		</section>
	);
}

export default Best;
