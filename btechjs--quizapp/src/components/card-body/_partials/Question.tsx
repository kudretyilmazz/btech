// Import Components
import Option from "./Option";

interface IQuestion {
	question: string;
	options: string[];
	selectOption: (index: number) => void;
	selectedOption: number | null;
	timer: number;
}

function Question(props: IQuestion) {
	// Props Destruction
	const { question, options, selectOption, selectedOption, timer } = props;

	// Variables
	const isOptionsDisabled = timer >= 20;

	// Actions
	const onOptionSelect = (index: number) => {
		if (!(timer >= 20)) {
			selectOption(index + 1);
		}
	};

	return (
		<>
			<p className="font-semibold shrink-0 text-lg mb-4 text-slate-900 capitalize">{question}?</p>
			<div className="flex-1 flex flex-col gap-y-4 items-center justify-center w-full">
				{options?.map((opt, index) => (
					<Option
						key={index}
						index={index}
						onClick={() => onOptionSelect(index)}
						content={opt}
						isDisabled={isOptionsDisabled}
						isSelected={selectedOption === index + 1}
					/>
				))}
			</div>
		</>
	);
}

export default Question;
