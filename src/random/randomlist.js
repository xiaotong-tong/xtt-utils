import { random } from "./random.js";
import { shuffle } from "../array/shuffle.js";
import { getMinAndMaxOfInt } from "../_internal/getminandmaxofint.js";

/**
 * 生成一个随机数列表
 * @param {number} [min=1] 最小值
 * @param {number} [max=10] 最大值
 * @param {number | object} [option] 配置项, 如果是数字，则表示列表个数
 * @param {number} [option.count=max-min+1] 列表个数
 * @param {boolean} [option.unique=false] 列表中的数是否唯一
 * @returns {number[]} 每项均介于 min 和 max 之间的 length 为 count 的随机数列表(包含 min 和 max)
 * @see ./random.js
 * @example
 * random(1, 10) // [1 ~ 10]
 * random(1, 10, 5) // [1 ~ 10, ...*4]
 */

export const randomList = (min, max, option) => {
	if (min === undefined) {
		min = 1;
	}
	if (max === undefined) {
		max = 10;
	}
	[min, max] = getMinAndMaxOfInt(min, max);

	if (min === max) {
		return [max];
	}

	/**
	 * @type {number}
	 */
	let count;
	if (typeof option === "number") {
		count = option;
	} else if (typeof option === "object") {
		count = option.count ?? max - min + 1;
	} else {
		count = max - min + 1;
	}

	if (count <= 0) {
		return [];
	}

	/**
	 * @type {boolean}
	 */
	let unique = option?.unique ?? false;

	if (!unique) {
		const list = [];
		for (let i = 0; i < count; i++) {
			list.push(random(min, max));
		}
		return list;
	} else {
		// 如果 count 大于 (max - min) / 2，那么就直接生成一个随机数组，然后打乱顺序，再截取 count 个数
		// 否则就生成一个集合，然后不断随机生成一个数，直到集合的长度达到 count
		if (count > (max - min) / 2) {
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
	}
};
