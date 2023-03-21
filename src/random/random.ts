/**
 * @description 生成一个随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 返回一个介于 min 和 max 之间的随机数(包含 min 和 max)
 * @example
 * random(1, 10) // 1 ~ 10
 * random(10) // 1 ~ 10
 * random() // 1 ~ 100
 * random(1, 10.5) // 1 ~ 10
 * random(1, Number.MAX_SAFE_INTEGER) // 1 ~ Number.MAX_SAFE_INTEGER
 */

import { getMinAndMaxOfInt } from "../_internal/getminandmaxofint.js";

export const random = (min?: number, max?: number): number => {
	if (min === undefined && max === undefined) {
		min = 1;
		max = 100;
	}
	if (max === undefined) {
		max = min;
		min = 1;
	}
	// 可以保证在这之后的 min 和 max 不为 undefined
	if (isNaN(min as number) || isNaN(max as number)) {
		return NaN;
	}
	[min, max] = getMinAndMaxOfInt(min as number, max as number);

	return min + Math.floor(Math.random() * (max - min + 1));
};
