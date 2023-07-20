"use client";

// Import Components
import Button from "../button/Button";

interface ICardFooter {
	timer: number;
	questionNumber: number;
	nextQuestion: () => void;
	isFinished: boolean;
}

function CardFooter(props: ICardFooter) {
	// Props Destruction
	const { timer, questionNumber, nextQuestion, isFinished } = props;

	// Variables
	const isNextBtnDisabled = timer >= 20 || questionNumber === 0;
	const isResultBtnDisabled = timer >= 20;

	if (isFinished) {
		return null;
	}

	return (
		<div className="h-14 shrink-0 border-t border-gray-200 flex items-center justify-between px-4 mt-auto">
			<div></div>
			{questionNumber !== 10 ? (
				<Button label="Sonraki Soru" disabled={isNextBtnDisabled} onClick={nextQuestion} />
			) : (
				<Button label="Sonuçları Gör" disabled={isResultBtnDisabled} onClick={nextQuestion} />
			)}
		</div>
	);
}

export default CardFooter;
