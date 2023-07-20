// Import Components
import HeroTop from "./_partials/HeroTop";
import HeroBottom from "./_partials/HeroBottom";

function Hero() {
	return (
		<section className="hero flex flex-col items-center">
			<HeroTop />
			<HeroBottom />
			<div className="triangle"></div>
		</section>
	);
}

export default Hero;
