interface IInstagram {
	className?: string;
}

function Instagram(props: IInstagram) {
	// Props Destruction
	const { className } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			fill="currentColor"
			viewBox="-2 -2 24 24"
			className={className}
		>
			<path d="M14.017 0h-8.07A5.954 5.954 0 000 5.948v8.07a5.954 5.954 0 005.948 5.947h8.07a5.954 5.954 0 005.947-5.948v-8.07A5.954 5.954 0 0014.017 0zm3.94 14.017a3.94 3.94 0 01-3.94 3.94h-8.07a3.94 3.94 0 01-3.939-3.94v-8.07a3.94 3.94 0 013.94-3.939h8.07a3.94 3.94 0 013.939 3.94v8.07z"></path>
			<path d="M9.982 4.819A5.17 5.17 0 004.82 9.982a5.17 5.17 0 005.163 5.164 5.17 5.17 0 005.164-5.164A5.17 5.17 0 009.982 4.82zm0 8.319a3.155 3.155 0 110-6.31 3.155 3.155 0 010 6.31z"></path>
			<circle cx="15.156" cy="4.858" r="1.237"></circle>
		</svg>
	);
}

export default Instagram;
