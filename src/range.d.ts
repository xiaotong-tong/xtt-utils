/**
 * @description Create an array of numbers in the range [start, end] with step.
 * @description-cn 创建一个在 [start, end] 范围内的数字数组，步长为 step
 * @param {number} [start=0] The start of the range.
 * @param {number} [end] The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 *
 * If end is not specified, it's set to start with start then set to 0.
 * If step is not specified, it's set to 1 when start is less than end, otherwise it's set to -1.
 *
 * @example
 * range(1, 10, 7) // => [1, 8]
 * range(10) // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * range(-10) // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
 * range(1, -10, -3) // => [1, -2, -5, -8]
 */
declare function range(start?: number, end?: number, step?: number): number[];

declare module "xtt-utils" {
	export { range };
}

declare module "xtt-utils/range" {
	export { range as default };
}

export default range;
