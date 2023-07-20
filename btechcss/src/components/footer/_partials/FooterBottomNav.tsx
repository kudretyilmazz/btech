// Import Next
import Link from "next/link";

// Import Components
import World from "@/components/icons/World";

function FooterBottomNav() {
	// NavList
	const navList = [
		{ label: "Terms", href: "#" },
		{ label: "Privacy", href: "#" },
		{ label: "Contact", href: "#" },
	];
	return (
		<nav className="flex gap-x-8">
			{navList.map(navItem => (
				<Link
					key={navItem.label}
					href={navItem?.href}
					className="font-thin text-slate-200 text-sm md:text-base py-4"
				>
					{navItem?.label}
				</Link>
			))}
			<div className="flex items-center gap-x-2 cursor-pointer">
				<World className="fill-slate-200 py-4" />
				<span className="text-slate-200 font-thin">EN</span>
			</div>
		</nav>
	);
}

export default FooterBottomNav;
