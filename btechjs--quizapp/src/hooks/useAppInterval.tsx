// Import React
import { useState, useEffect, useRef } from "react";

function useAppInterval(nextQuestion: () => void, questionNumber: number, isFinished: boolean) {
	// useStates
	const [timer, setTimer] = useState<number>(30);

	// Variables
	const intervalRef: any = useRef(null);

	// Actions
	const updateTimer = () => {
		if (timer !== 999) {
			setTimer(prev => prev - 1);
		}
	};

	// useEffect
	useEffect(() => {
		if (timer === 0 && !isFinished) {
			if (questionNumber !== 10) {
				nextQuestion();
				setTimer(30);
			} else {
				nextQuestion();
				clearInterval(intervalRef.current);
				intervalRef.current = null;
				setTimer(999);
			}
		}
	}, [timer]);

	useEffect(() => {
		if (isFinished) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
			setTimer(999);
		}
	}, [isFinished]);

	useEffect(() => {
		setTimer(30);
	}, [questionNumber]);

	useEffect(() => {
		intervalRef.current = setInterval(updateTimer, 1000);
		return () => clearInterval(intervalRef.current);
	}, []);

	return timer;
}

export default useAppInterval;
