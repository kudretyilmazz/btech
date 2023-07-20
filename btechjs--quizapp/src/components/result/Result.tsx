interface IResult {
	resultData: Record<string, string>;
}

function Result(props: IResult) {
	// Props Destruction
	const { resultData } = props;

	// Render Results
	const renderResults = () => {
		const keys = Object.keys(resultData);

		return keys.map(answerKey => (
			<tr key={answerKey} className="border-b dark:border-neutral-500 w-full">
				<td className="whitespace-nowrap px-6 py-2 w-1/2 font-medium text-center">{answerKey}</td>
				<td className="whitespace-nowrap px-6 py-2 w-1/2 text-center">{resultData[answerKey]}</td>
			</tr>
		));
	};
	return (
		<div className="w-full h-full">
			<div className="flex flex-col">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full text-left text-sm font-light">
								<thead className="border-b font-medium dark:border-neutral-500">
									<tr>
										<th scope="col" className="px-6 py-3 text-center w-1/2">
											# Question Number
										</th>
										<th scope="col" className="px-6 py-3 text-center w-1/2">
											Your Answer
										</th>
									</tr>
								</thead>
								<tbody>{renderResults()}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Result;
