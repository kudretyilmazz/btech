"use client";

interface ICardHeader {
	timer: number;
	questionNumber: number;
	isFinished: boolean;
}

function CardHeader(props: ICardHeader) {
	// Props Destruction
	const { timer, questionNumber, isFinished } = props;

	// Dynamic Styles
	const timerBG = () => {
		if (timer >= 20) {
			return "bg-green-500";
		}
		if (timer >= 10) {
			return "bg-yellow-500";
		}
		if (timer >= 0) {
			return "bg-red-500";
		}
	};
	return (
		<div className="h-14 shrink-0 border-b border-gray-200 flex items-center justify-between px-4">
			{!isFinished ? (
				<>
					<h2 className="font-medium text-lg text-slate-700">Soru: {questionNumber} / 10</h2>
					<div className="w-[130px] h-[42px] rounded-md flex items-center justify-center ">
						<span className="text-lg text-slate-700 inline-block font-medium">Time Left:</span>
						<span
							className={`text-sm py-[2px] w-8 text-center px-2 rounded-md text-white ml-2 inline-block font-bold ${timerBG()}`}
						>
							{timer}
						</span>
					</div>
				</>
			) : (
				<h2 className="text-xl font-medium mx-auto">Your Answers</h2>
			)}
		</div>
	);
}

export default CardHeader;
