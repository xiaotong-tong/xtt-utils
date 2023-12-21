import random from "./random.js";
import sum from "./sum.js";

/**
 * @description Get a random item from a list of random numbers based on the weight list.
 * @description-cn 获取权重随机数
 * @param {any[] | Object<string,number>} randomList The list of items to choose from.
 * @param {number[]} [weightedList] The list of weights to apply to each item.
 * When randomList is an object, the weightedList will be ignored. The keys of the object are the items to choose from, and the values are the weights to apply to each item.
 * @returns {any} Returns the randomly selected item.
 * @example
 * weightedRandom([1, 2, 3], [4, 5, 6]) // 4/15 probability returns 1, 5/15 probability returns 2, 6/15 probability returns 3
 * weightedRandom({ 1: 4, 2: 5, 3: 6 }) // ditto
 */

function weightedRandom(randomList, weightedList) {
	// If randomList is an object, convert it to an array and use its values as the weightedList
	if (!Array.isArray(randomList) && randomList instanceof Object) {
		weightedList = Object.values(randomList);
		randomList = Object.keys(randomList);
	}

	let count = 0;

	if (Array.isArray(randomList) && Array.isArray(weightedList)) {
		// Make sure the arrays are the same length
		if (weightedList.length > randomList.length) {
			weightedList.length = randomList.length;
		} else {
			randomList.length = weightedList.length;
		}

		const r = random(1, sum(weightedList));

		for (let i = 0; i < randomList.length; i++) {
			count += weightedList[i];
			if (r <= count) {
				return randomList[i];
			}
		}
	}

	return randomList[0];
}

export {
	weightedRandom,
	weightedRandom as default
}
