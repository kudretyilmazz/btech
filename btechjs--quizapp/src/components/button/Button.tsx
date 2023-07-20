// Import React
import type { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

function Button(props: IButton) {
	// Props Destruction
	const { label, ...otherFields } = props;
	return (
		<button
			{...otherFields}
			className="border border-blue-500 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-md px-4 py-2 text-white disabled:bg-slate-200 disabled:border-slate-300"
		>
			{label}
		</button>
	);
}

export default Button;
