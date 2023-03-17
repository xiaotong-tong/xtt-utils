import { random } from "./number/random.js";

export const shuffle = (list: any[]): any[] => {
	for (let i = list.length - 1; i >= 0; i--) {
		const r = random(0, i);
		const temp = list[r];
		list[r] = list[i];
		list[i] = temp;
	}
	return list;
};
