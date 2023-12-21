import { _toNumber } from "./_internal/toNumber.js";

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

const range = (start, end, step) => {
	if (start === undefined) {
		start = 0;
	}
	if (end === undefined) {
		end = start;
		start = 0;
	}

	if (step === 0) {
		return [];
	}

	start = _toNumber(start, {
		NaNFormat: true,
		int: true,
		intFormatType: "ceil"
	});

	end = _toNumber(end, {
		NaNFormat: true,
		int: true,
		intFormatType: "floor"
	});

	if (start === end) {
		return [start];
	}

	if (step === undefined) {
		step = end < start ? -1 : 1;
	}

	step = _toNumber(step, {
		NaNFormat: true,
		int: true,
		intFormatType: "trunc"
	});

	const length = ~~((end - start) / step) + 1;
	const res = new Array(length);

	for (let i = 0; i < length; i++) {
		res[i] = i * step + start;
	}

	return res;
};

export {
	range,
	range as default
}
