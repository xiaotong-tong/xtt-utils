import { random } from "./random.js";
import { shuffle } from "../array/shuffle.js";
import { _formatIntRange } from "../_internal/formatIntRange.js";

/**
 * @description Generate a list of random numbers
 * @description-cn 生成一个随机数列表
 * @category Random
 * @param {number} [min=1] The minimum value of the range
 * @param {number} [max=10] The maximum value of the range
 * @param {number|object} [option] Options for generating the list. If it is a number, it represents the number of items in the list.
 * @param {number} [option.count=max-min+1] The number of items in the list
 * @param {boolean} [option.unique=false] Whether the items in the list are unique
 * @returns {number[]} Returns a list of random numbers, each of which is between min and max (inclusive)
 * @see ./random.js
 * @example
 * randomList(1, 10) // [1 ~ 10]
 * randomList(1, 10, 5) // [1 ~ 10, ...*4]
 */

export const randomList = (min, max, option) => {
	if (min === undefined) {
		min = 1;
	}
	if (max === undefined) {
		max = 10;
	}
	[min, max] = _formatIntRange(min, max);

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
		// If count is greater than (max - min) / 2, then generate a random array, shuffle it, and then take the first count numbers
		// Otherwise, generate a set, and then randomly generate a number until the length of the set reaches count
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
