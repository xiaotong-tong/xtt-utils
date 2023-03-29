/**
 * @description 获取权重随机数
 * @param {any[]} randomList 随机数列表
 * @param {number[]} weightedList 权重列表
 * || @param {string: number} randomList 随机数 & 权重列表
 * @returns {any} 返回一个权重随机数
 * @example
 * weightedRandom([1, 2, 3], [4, 5, 6]) // 1 or 2 or 3
 * weightedRandom({ 1: 1 }) // 1
 * weightedRandom({ 1: 1, 2: 2 }) // 1 or 2
 */

import { random } from "./random.js";

const getListSum = (list: number[]): number => {
	return list.reduce((a, b) => a + b);
};

export function weightedRandom(randomList: any[], weightedList: number[]): any;
export function weightedRandom(randomList: {
	[propName: string]: number;
}): string;

export function weightedRandom(
	randomList: any[] | { [propName: string]: number },
	weightedList?: number[]
): any {
	if (!Array.isArray(randomList) && randomList instanceof Object) {
		weightedList = Object.values(randomList);
		randomList = Object.keys(randomList);
	}

	let sum = 0;

	if (Array.isArray(randomList) && Array.isArray(weightedList)) {
		if (weightedList.length < randomList.length) {
			weightedList.length = randomList.length;
		} else {
			randomList.length = weightedList.length;
		}
		const r = random(1, getListSum(weightedList));
		for (let i = 0; i < randomList.length; i++) {
			sum += weightedList[i];
			if (r <= sum) {
				return randomList[i];
			}
		}
	}

	return randomList[0];
}
