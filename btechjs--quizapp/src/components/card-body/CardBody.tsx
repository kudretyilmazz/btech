// Import Components
import Question from "./_partials/Question";
import Result from "../result/Result";

interface ICardBody {
	questionList: any;
	questionNumber: number;
	selectOption: (index: number) => void;
	selectedOption: number | null;
	timer: number;
	answerData: Record<string, string>;
	isFinished: boolean;
}

function CardBody(props: ICardBody) {
	// Props Destruction
	const {
		questionList,
		questionNumber,
		selectOption,
		selectedOption,
		timer,
		answerData,
		isFinished,
	} = props;

	return (
		<div className={`w-full h-full flex flex-col ${!isFinished ? "p-6" : ""}`}>
			{!isFinished ? (
				<Question
					question={questionList?.[questionNumber - 1]?.question}
					options={questionList?.[questionNumber - 1]?.options}
					selectOption={selectOption}
					selectedOption={selectedOption}
					timer={timer}
				/>
			) : (
				<Result resultData={answerData} />
			)}
		</div>
	);
}

export default CardBody;
