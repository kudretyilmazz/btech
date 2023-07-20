interface IOption {
	isSelected: boolean;
	content: string;
	index: number;
	onClick: () => void;
	isDisabled: boolean;
}

function Option(props: IOption) {
	// Props Destruction
	const { isSelected, content, onClick, isDisabled } = props;

	// Variables
	let styles =
		"text-md select-none overflow-hidden whitespace-nowrap text-ellipsis max-w-full w-full py-2 px-4 text-slate-700 border rounded-md border-slate-300";

	// isSelected Bg
	if (isSelected) {
		styles = styles + " bg-slate-200";
	} else {
		styles = styles + " bg-white";
	}

	if (isDisabled) {
		styles = styles + " cursor-not-allowed";
	} else {
		styles = styles + " cursor-pointer";
	}

	return (
		<p className={styles} onClick={onClick}>
			{content}
		</p>
	);
}

export default Option;
