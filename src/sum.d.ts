/**
 * @description Sums up
 * @description-cn 求和
 * @param {...number} values  The array or parameter list to sum up.
 * @returns {number} Returns the sum
 * @example
 * sum([1, 2, 3]) // 6
 * sum(1, 2, 3) // 6
 */

declare function sum(...values: number[]): number;

declare module "xtt-utils" {
	export { sum };
}

declare module "xtt-utils/sum" {
	export { sum as default };
}

export default sum;
