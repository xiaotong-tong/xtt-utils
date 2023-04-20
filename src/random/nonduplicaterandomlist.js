import { shuffle } from "../array/shuffle.js";
import { random } from "./random.js";
import { getMinAndMaxOfInt } from "../_internal/getminandmaxofint.js";

/**
 * 生成一个没有重复值的随机数列表
 * @param {number} [min=0] 最小值
 * @param {number} [max=9]	最大值
 * @param {number} [count=max-min+1] 生成的随机数的个数
 * @returns {number[]}
 * @example
 * nonDuplicateRandomList(1, 10) // [1 ~ 10]
 * nonDuplicateRandomList(1, 10, 5) // [1 ~ 10, ...*4]
 */

export const nonDuplicateRandomList = (min, max, count) => {
	if (typeof count === "number" && count <= 0) {
		return [];
	}
	if (min === undefined) {
		min = 0;
	}
	if (max === undefined) {
		max = 9;
	}

	[min, max] = getMinAndMaxOfInt(min, max);

	if (min === max) {
		return [max];
	}

	// 如果 count 大于 (max - min) / 2，那么就直接生成一个随机数组，然后打乱顺序，再截取 count 个数
	// 否则就生成一个集合，然后不断随机生成一个数，直到集合的长度达到 count
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
		const randomSet = new Set();
		while (randomSet.size < count) {
			randomSet.add(random(min, max));
		}
		return Array.from(randomSet);
	}
};
