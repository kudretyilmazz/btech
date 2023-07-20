interface ILogo {
	heading: string;
}

function Logo(props: ILogo) {
	// Props Destruction
	const { heading } = props;

	return (
		<div>
			<h1 className="text-amber-900 text-[32px] font-bold"> {heading} </h1>
		</div>
	);
}

export default Logo;
