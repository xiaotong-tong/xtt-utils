import { random } from "../random/random.js";

/**
 * 乱序数组
 * @param {any[]} list 需要打乱的数组
 * @returns {any[]} 乱序后的数组
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [2, 4, 1, 5, 3]
 */

export const shuffle = (list) => {
	if (!list?.length) {
		return [];
	}

	// 复制原数组，防止修改直接影响原数组的值
	const copy = [...list];

	for (let i = copy.length - 1; i > 0; i--) {
		const randomIndex = random(0, i);
		const temp = copy[randomIndex];
		copy[randomIndex] = copy[i];
		copy[i] = temp;
	}

	return copy;
};
