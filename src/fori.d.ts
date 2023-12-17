/**
 * @callback Iteratee
 * @description The function that will be executed on each iteration of the loop
 * @description-cn 循环体函数
 * @param {*} iterator The value of the current iteration
 * @param {number} i The index of the current iteration
 * @param {*} target The target of the current iteration. If the target is an object, this value is Object.entries(*)
 */

type Iteratee = (iterator: any, i: number, target: any) => any;

/**
 * @description Loop through the target
 * @description-cn 循环遍历目标
 * @param {*} collection The target to be looped through
 * @param {Iteratee} iteratee The function to be executed on each iteration of the loop
 * @param {object} [options] The options for the loop
 * @param {object} [options.thisArg] The value of `this` in the iteratee function
 * @param {boolean} [options.asyncIterator] Whether the target is an async iterator
 * @returns {Array | Promise<Array>} Returns the results of the loop. If the target is an async iterator, the return value is a Promise
 */
declare function fori(
	collection: any,
	iteratee: Iteratee,
	options?: { thisArg?: any; asyncIterator?: boolean }
): any[] | Promise<any[]>;

declare module "xtt-utils" {
	export type { fori };
}

declare module "xtt-utils/fori" {
	export type { fori as default };
}

export type { fori, fori as default };
