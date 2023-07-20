// Import Components
import CardWrapper from "@/components/card-wrapper/CardWrapper";

// Get Data
const getData = async () => {
	const data = await fetch("https://jsonplaceholder.typicode.com/posts");
	return data.json();
};

export default async function Home() {
	// Variables
	const data = await getData();
	return (
		<div className="flex items-center justify-center h-full">
			<CardWrapper data={data} />
		</div>
	);
}
