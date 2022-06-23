import { useEffect, useRef } from 'react';

// Functions
const scrollToTop = () => {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
};

const checkArray = (a1, a2) => {
	return (
		a1.length === a2.length &&
		a1.every((value, index) => value === a2[index])
	);
};

const validateCode = (term) => {
	const re = /^\d+$/;

	return re.test(term) && term.length <= 5;
};

const useIsMounted = () => {
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;
		return () => (isMounted.current = false);
	}, []);

	return isMounted;
};

export { checkArray, scrollToTop, useIsMounted, validateCode };
