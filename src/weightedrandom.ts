import { random } from "./random";

const getListSum = (list: number[]): number => {
	return list.reduce((a, b) => a + b);
};

export const weightedRandom = (
	randomList: number[],
	weightedList: number[]
): number | undefined => {
	let sum = 0;

	const r = random(1, getListSum(weightedList));
	for (let i = 0; i < randomList.length; i++) {
		sum += weightedList[i];
		if (r <= sum) {
			return randomList[i];
		}
	}
};
