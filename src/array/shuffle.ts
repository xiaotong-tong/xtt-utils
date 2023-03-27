/**
 * @description 返回一个数组的随机排序。
 * @param {any[]} list 需要打乱的数组
 * @returns {any[]} 返回一个打乱后的数组
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [2, 4, 1, 5, 3]
 * shuffle([]) // []
 */

import { random } from "../random/random.js";

export const shuffle = (list: any[]): any[] => {
	if (!list?.length) {
		return [];
	}

	// 复制原数组，防止修改直接影响原数组的值
	const resList = [...list];
	for (let i = resList.length - 1; i >= 0; i--) {
		const r = random(0, i);
		const temp = resList[r];
		resList[r] = resList[i];
		resList[i] = temp;
	}
	return resList;
};
