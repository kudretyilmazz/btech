// Import React
import type { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	size: "sm" | "md" | "lg";
	color?: "amber" | "white";
	block?: boolean;
	className?: string;
}

function Button(props: IButton) {
	// Props Destruction
	const { label, size = "md", color = "amber", block = false, className, ...otherProps } = props;

	// Classnames
	const generateClassNames = (): string => {
		let baseClass =
			"px-4 border-2 rounded-lg text-base flex items-center justify-center font-medium user-select:none";
		let result = "";
		switch (size) {
			case "sm":
				result = baseClass + " h-12";
				break;
			case "md":
				result = baseClass + " h-14";
				break;
			case "lg":
				result = baseClass + " h-16";

			default:
				result = baseClass + " h-14";
				break;
		}

		switch (color) {
			case "white":
				result = result + " text-white border-white";
				break;

			case "amber":
				result = result + " text-amber-900 border-amber-900";
				break;

			default:
				result = result + " text-amber-900 border-amber-900";
				break;
		}

		if (block) {
			result = result + " w-full";
		} else {
			result = result + " max-w-fit";
		}

		if (className) {
			result = result + " " + className;
		}

		return result;
	};

	return (
		<button {...otherProps} className={generateClassNames()}>
			<span className="px-4">{label}</span>
		</button>
	);
}

export default Button;
