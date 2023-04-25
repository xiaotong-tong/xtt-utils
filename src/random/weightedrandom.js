import { random } from "./random.js";

const getListSum = (list) => {
	return list.reduce((a, b) => a + b);
};

/**
 * 获取权重随机数
 * @param {any[] | Object<string,number>} randomList 随机数列表
 * 当 randomList 为 Object 时，权重列表将被忽略，Object 的 key 为随机数列表，value 为权重列表
 * @param {number[]} [weightedList] 权重列表
 * @returns {any} 随机数列表中的某一项
 * @example
 * weightedRandom([1, 2, 3], [4, 5, 6]) // 4/15 的概率返回 1，5/15 的概率返回 2，6/15 的概率返回 3
 * weightedRandom({ 1: 4, 2: 5, 3: 6 }) // 同上
 */

export function weightedRandom(randomList, weightedList) {
	if (!Array.isArray(randomList) && randomList instanceof Object) {
		weightedList = Object.values(randomList);
		randomList = Object.keys(randomList);
	}

	let sum = 0;

	if (Array.isArray(randomList) && Array.isArray(weightedList)) {
		if (weightedList.length > randomList.length) {
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
