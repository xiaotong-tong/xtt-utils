type NestedArray<T> = T | NestedArray<T>[];

/**
 * @description Sums up
 * @description-cn 求和
 * @param {(number|string)[]} values  The array or parameter list to sum up.
 * @returns {number|string} Returns the sum
 * @example
 * sum([1, 2, 3]) // 6
 * sum(1, 2, 3) // 6
 * sum(["1", 2, 3]) // "123"
 */

declare function sum<T extends (NestedArray<number> | NestedArray<string>)[]>(
	...values: T
): T extends NestedArray<number>[] ? number : string;

declare module "xtt-utils" {
	export type { sum };
}

declare module "xtt-utils/sum" {
	export type { sum as default };
}

export type { sum, sum as default };
