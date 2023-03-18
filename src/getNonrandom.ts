import { shuffle } from "./array/shuffle.js";

export const getNonrandom = (min: number, max: number): number[] => {
	if (min === max) {
		return [max];
	}
	let randomArr = Array.from({ length: max - min + 1 }, (v, i) => i + min);
	return shuffle(randomArr);
};
