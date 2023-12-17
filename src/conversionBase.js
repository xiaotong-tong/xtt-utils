import { _toNumber } from "./_internal/toNumber.js";
/**
 * @description Converts a number to a string of the specified base
 * @description-cn 将数字转换为指定进制的字符串
 * @category Number
 * @param {number} num The number to convert
 * @param {2 | 8 | 10 | 16} [base=10] The base to which to convert the number. Must be one of 2, 8, 10, or 16. Defaults to 10.
 * @param {boolean} [hasPrefix=true] Whether to add the base identifier to the string. Defaults to true.
 * @returns {string} Returns the string of the specified base.
 * @example
 * conversionBase(10, 2) // -> "0b1010"
 * conversionBase(0xa) // -> "10"
 * conversionBase(10, 2, false) // -> "1010"
 * conversionBase(-10, 2) // -> "-0b1010"
 */

const conversionBase = (num, base, hasPrefix) => {
	if (typeof base === "undefined" || Number.isNaN(Number(base))) {
		base = 10;
	}

	num = _toNumber(num, {
		NaNFormat: true
	});

	if (hasPrefix === undefined) {
		hasPrefix = true;
	}

	if (hasPrefix) {
		// If the base is not 10, the base identifier is prefixed to the string
		const basePrefix = base === 16 ? "0x" : base === 8 ? "0o" : base === 2 ? "0b" : "";

		if (num >= 0) {
			return basePrefix + num.toString(base);
		}
		return "-" + basePrefix + Math.abs(num).toString(base);
	}

	return num.toString(base);
};

export default conversionBase;
