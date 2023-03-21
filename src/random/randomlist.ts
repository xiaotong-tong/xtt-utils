/**
 * @description 生成一个随机数列表
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @param {number} count 列表个数
 * @returns {number[]} 返回一个每项均介于 min 和 max 之间的随机数列表(包含 min 和 max)
 * @example
 * random(1, 10) // [1 ~ 10]
 * random(1, 10, 5) // [1 ~ 10, ...*4]
 */

import { random } from "./random.js";

export const randomList = (
	min: number = 1,
	max: number = 100,
	count: number = 1
): number[] => {
	if (count <= 0) {
		return [];
	}
	const list = [];
	for (let i = 0; i < count; i++) {
		list.push(random(min, max));
	}
	return list;
};
