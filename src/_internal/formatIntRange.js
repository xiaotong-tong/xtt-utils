import { _toNumber } from "./toNumber.js";

/**
 * @private
 * @description Format min and max to make it an integer range, ensure min <= max and min and max are integers in the range of 2^53 to -2^53
 * @description-cn 格式化 min 和 max 使其成为一个整数范围, 保证min <= max 且min和max都是 2^53 到 -2^53 范围内的整数
 * @param {number} start
 * @param {number} end
 * @returns {[number, number]} format result
 * @example
 * _formatIntRange(1, 10) // [1, 10]
 * _formatIntRange(10, 1) // [1, 10]
 * _formatIntRange(1.5, 10.9) // [2, 10]
 * _formatIntRange(-Infinity, Infinity) // [-2^53 + 1, 2^53 - 1]
 */

export const _formatIntRange = (start, end) => {
	if (start > end) {
		const temp = start;
		start = end;
		end = temp;
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

	return [start, end];
};
