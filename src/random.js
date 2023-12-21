import { _formatIntRange } from "./_internal/formatIntRange.js";

/**
 * @description Generate a random integer between min and max (inclusive)
 * @description-cn 生成一个介于 min 和 max 之间的随机整数
 * @param {number} [min = 1] minimum value
 * @param {number} [max = 100] maximum value
 * @returns {number} Returns the random integer
 * @example
 * random(1, 10) // => 1 ~ 10
 * random(10) // => 1 ~ 10
 * random() // => 1 ~ 100
 * random(1.5, 10.5) // => 2 ~ 10
 * random(1, Infinity) // => 1 ~ 2^53 - 1
 */

const random = (min, max) => {
	if (min === undefined && max === undefined) {
		min = 1;
		max = 100;
	}
	if (max === undefined) {
		max = min;
		min = 1;
	}
	if (isNaN(min) || isNaN(max)) {
		return NaN;
	}
	[min, max] = _formatIntRange(min, max);

	return min + Math.floor(Math.random() * (max - min + 1));
};

export {
	random,
	random as default
}
