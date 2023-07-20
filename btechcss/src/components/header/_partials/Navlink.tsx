// Import Next
import Link from "next/link";

interface INavlink {
	href: string;
	label: string;
}

function Navlink(props: INavlink) {
	// Props Destruction
	const { href, label } = props;

	return (
		<Link href={href} className="font-medium text-amber-900 text-base py-3 px-2">
			{label}
		</Link>
	);
}

export default Navlink;
