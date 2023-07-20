interface ICheck {
	className?: string;
}

function Check(props: ICheck) {
	// Props Destruction
	const { className } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			fill="currentColor"
			viewBox="-5 -7 24 24"
			className={className}
		>
			<path d="M5.486 9.73a.997.997 0 01-.707-.292L.537 5.195A1 1 0 111.95 3.78l3.535 3.535L11.85.952a1 1 0 011.415 1.414L6.193 9.438a.997.997 0 01-.707.292z"></path>
		</svg>
	);
}

export default Check;
