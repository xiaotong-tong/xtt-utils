import { getMinAndMaxOfInt } from "../_internal/getminandmaxofint.js";

/**
 * 生成一个随机数
 * @param {number} [min = 1] 最小值
 * @param {number} [max = 100] 最大值
 * @returns {number} 返回一个介于 min 和 max 之间的随机整数(包含 min 和 max)
 * @example
 * random(1, 10) // 1 ~ 10
 * random(10) // 1 ~ 10
 * random() // 1 ~ 100
 * random(1, 10.5) // 1 ~ 10
 * random(1, Number.MAX_SAFE_INTEGER) // 1 ~ Number.MAX_SAFE_INTEGER
 */

export const random = (min, max) => {
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
	[min, max] = getMinAndMaxOfInt(min, max);

	return min + Math.floor(Math.random() * (max - min + 1));
};
