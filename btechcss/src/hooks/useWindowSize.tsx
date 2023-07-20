// Import React
import { useState, useEffect } from "react";

function useWindowSize() {
	const [windowSize, setWindowSize] = useState<Record<string, any>>({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		// Add event listener
		window.addEventListener("resize", handleResize);
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}

export default useWindowSize;
