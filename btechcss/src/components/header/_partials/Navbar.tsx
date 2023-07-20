// Import Components
import Navlink from "./Navlink";
import Button from "@/components/button/Button";

function Navbar() {
	// Nav Items
	const navItems = [
		{ label: "Products", href: "#products" },
		{ label: "Solutions", href: "#solutions" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "Resources", href: "#resources" },
		{ label: "Log In", href: "#login" },
	];
	return (
		<>
			<nav className="hidden md:flex gap-x-4">
				{navItems?.map((item, index) => (
					<Navlink key={index} {...item} />
				))}
				<Button label="Sign up now" size="sm" />
			</nav>
			<nav className="md:hidden flex flex-col gap-y-[6px] items-end">
				<div className="bg-amber-900 h-[1px] w-3"></div>
				<div className="bg-amber-900 h-[1px] w-4"></div>
				<div className="bg-amber-900 h-[1px] w-5"></div>
			</nav>
		</>
	);
}

export default Navbar;
