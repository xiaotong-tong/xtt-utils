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
declare function weightedRandom(randomList: any[] | { [key: string]: number }, weightedList?: number[]): any;

declare module "xtt-utils" {
	export { weightedRandom };
}

declare module "xtt-utils/weightedRandom" {
	export { weightedRandom as default };
}

export default weightedRandom;
