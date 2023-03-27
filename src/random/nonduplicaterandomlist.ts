/**
 * @description 生成一个不重复的随机数列表
 * @param {number} min
 * @param {number} max
 * @param {number} count
 * @returns {number[]}
 * @example
 * nonDuplicateRandomList(1, 10) // [1 ~ 10]
 * nonDuplicateRandomList(1, 10, 5) // [1 ~ 10, ...*4]
 */

import { shuffle } from "../array/shuffle.js";
import { getMinAndMaxOfInt } from "../_internal/getminandmaxofint.js";

export const nonDuplicateRandomList = (
	min = 0,
	max = 9,
	count?: number
): number[] => {
	if (typeof count === "number" && count <= 0) {
		return [];
	}

	[min, max] = getMinAndMaxOfInt(min, max);

	if (min === max) {
		return [max];
	}

	let randomArr = Array.from({ length: max - min + 1 }, (v, i) => i + min);

	randomArr = shuffle(randomArr);
	if (count === undefined) {
		return randomArr;
	} else {
		return randomArr.slice(0, count);
	}
};
