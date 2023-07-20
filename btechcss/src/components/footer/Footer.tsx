// Import Components
import FooterMenuList from "./_partials/FooterMenuList";
import FooterSocialList from "./_partials/FooterSocialList";
import FooterBottomBar from "./_partials/FooterBottomBar";

function Footer() {
	// Menu Data
	const FooterMenusData = [
		{
			heading: "Product",
			items: [
				{ label: "Pricing", href: "#" },
				{ label: "Overview", href: "#" },
				{ label: "Browse", href: "#" },
				{ label: "Accessibility", href: "#" },
				{ label: "Five", href: "#" },
			],
		},
		{
			heading: "Solutions",
			items: [
				{ label: "Brainstorming", href: "#" },
				{ label: "Ideation", href: "#" },
				{ label: "Wireframing", href: "#" },
				{ label: "Research", href: "#" },
				{ label: "Design", href: "#" },
			],
		},
		{
			heading: "Support",
			items: [
				{ label: "Contact Us", href: "#" },
				{ label: "Developers", href: "#" },
				{ label: "Documentation", href: "#" },
				{ label: "Integrations", href: "#" },
				{ label: "Reports", href: "#" },
			],
		},
	];
	return (
		<footer className="bg-slate-900 shrink-0 px-4 md:px-20">
			<div className="py-16 flex flex-col md:flex-row gap-x-16 gap-y-16">
				{FooterMenusData?.map((item, index) => (
					<FooterMenuList list={item} key={index} />
				))}
				<FooterSocialList />
			</div>
			<FooterBottomBar />
		</footer>
	);
}

export default Footer;
