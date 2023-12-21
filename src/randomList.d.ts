/**
 * @description Generate a list of random numbers
 * @description-cn 生成一个随机数列表
 * @param {number} [min=1] The minimum value of the range
 * @param {number} [max=10] The maximum value of the range
 * @param {number|object} [option] Options for generating the list. If it is a number, it represents the number of items in the list.
 * @param {number} [option.count=max-min+1] The number of items in the list
 * @param {boolean} [option.unique=false] Whether the items in the list are unique
 * @returns {number[]} Returns a list of random numbers, each of which is between min and max (inclusive)
 * @see ./random.js
 * @example
 * randomList(1, 10) // -> [1 ~ 10, ...*9]
 * randomList(1, 10, 5) // -> [1 ~ 10, ...*4]
 * randomList(1, 10, { count: 5, unique: true }) // -> [1 ~ 10, ...*4] (unique)
 */
declare function randomList(
	min?: number,
	max?: number,
	option?: number | { count?: number; unique?: boolean }
): number[];

declare module "xtt-utils" {
	export { randomList };
}

declare module "xtt-utils/randomList" {
	export { randomList as default };
}

export { randomList, randomList as default };
