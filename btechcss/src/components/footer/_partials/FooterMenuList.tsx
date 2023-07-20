// Import Next
import Link from "next/link";

interface IFooterMenuList {
	list: { heading: string; items: { label: string; href: string }[] };
}

function FooterMenuList(props: IFooterMenuList) {
	// Props Destruction
	const { list } = props;

	// Variables
	const baseListItemClassNames = "text-slate-200 h-[46px] py-4";

	return (
		<div className="flex-1">
			<ul>
				<li className={`font-medium text-center md:text-left ${baseListItemClassNames}`}>
					{list.heading}
				</li>
				{list.items.map((listItem, index) => (
					<ul
						key={index}
						className={`font-thin text-center md:text-left ${baseListItemClassNames}`}
					>
						<Link href={listItem.href}> {listItem?.label}</Link>
					</ul>
				))}
			</ul>
		</div>
	);
}

export default FooterMenuList;
