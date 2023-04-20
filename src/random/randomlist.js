import { random } from "./random.js";

/**
 * 生成一个随机数列表
 * @param {number} [min=1] 最小值
 * @param {number} [max=100] 最大值
 * @param {number} [count=1] 列表个数
 * @returns {number[]} 每项均介于 min 和 max 之间的 length 为 count 的随机数列表(包含 min 和 max)
 * @see ./random.js
 * @example
 * random(1, 10) // [1 ~ 10]
 * random(1, 10, 5) // [1 ~ 10, ...*4]
 */

export const randomList = (min, max, count) => {
	if (count === undefined) {
		count = 1;
	}
	if (count <= 0) {
		return [];
	}
	const list = [];
	for (let i = 0; i < count; i++) {
		list.push(random(min, max));
	}
	return list;
};
