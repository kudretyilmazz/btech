"use client";

// Import React
import { useState, useMemo } from "react";

// Import Hooks
import useAppInterval from "@/hooks/useAppInterval";

// Import Card Components
import CardHeader from "../card-header/CardHeader";
import CardBody from "../card-body/CardBody";
import CardFooter from "../card-footer/CardFooter";

interface ICardWrapper {
	data: any;
}

function CardWrapper(props: ICardWrapper) {
	// Props Destruction
	const { data } = props;

	// useStates
	const [questionNumber, setQuestionNumber] = useState(1);
	const [answerData, setAnswerData] = useState({});
	const [selectedOption, setSelectedOption] = useState<null | number>(null);
	const [isFinished, setIsFinished] = useState(false);

	// Actions
	const nextQuestion = () => {
		if (questionNumber !== 10) {
			setAnswer();
			setQuestionNumber(prev => prev + 1);
		} else {
			setAnswer();
			setIsFinished(true);
		}
	};

	const selectOption = (index: number) => {
		setSelectedOption(index);
	};

	const setAnswer = () => {
		const optionsHeading = ["A", "B", "C", "D"];
		if (selectedOption) {
			setAnswerData(prev => ({ ...prev, [questionNumber]: optionsHeading[selectedOption - 1] }));
		} else {
			setAnswerData(prev => ({ ...prev, [questionNumber]: "EMPTY" }));
		}

		setSelectedOption(null);
	};

	// Variables
	const timer = useAppInterval(nextQuestion, questionNumber, isFinished);
	const questionList: any = useMemo(() => {
		return data
			?.splice(0, 10)
			?.map((que: any) => ({ question: que?.title, options: que?.body?.split("\n") }));
	}, []);

	return (
		<div className="bg-white shadow-md max-w-2xl h-[500px] rounded-lg flex flex-col w-full">
			<CardHeader timer={timer} questionNumber={questionNumber} isFinished={isFinished} />
			<CardBody
				questionList={questionList}
				questionNumber={questionNumber}
				answerData={answerData}
				selectOption={selectOption}
				selectedOption={selectedOption}
				timer={timer}
				isFinished={isFinished}
			/>
			<CardFooter
				timer={timer}
				questionNumber={questionNumber}
				nextQuestion={nextQuestion}
				isFinished={isFinished}
			/>
		</div>
	);
}

export default CardWrapper;
