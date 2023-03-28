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
import { random } from "./random.js";
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

	// 如果 count 大于 (max - min) / 2，那么就直接生成一个随机数组，然后打乱顺序，再截取 count 个数
	// 否则就生成一个随机集合，直到集合的长度等于 count
	if (count === undefined || count > (max - min) / 2) {
		let randomArr = Array.from(
			{ length: max - min + 1 },
			(_, i) => i + min
		);

		randomArr = shuffle(randomArr);
		if (count === undefined) {
			return randomArr;
		} else {
			return randomArr.slice(0, count);
		}
	} else {
		const randomSet = new Set<number>();
		while (randomSet.size < count) {
			randomSet.add(random(min, max));
		}
		return Array.from(randomSet);
	}
};
