/**
 * @description Converts a number to a string of the specified base
 * @description-cn 将数字转换为指定进制的字符串
 * @category Number
 * @param {number} num The number to convert
 * @param {2 | 8 | 10 | 16} [base=10] The base to which to convert the number. Must be one of 2, 8, 10, or 16. Defaults to 10.
 * @returns {string} Returns the string of the specified base. For bases other than 10, the string prefix 0x, 0o, or 0b is added.
 * @example
 * conversionBase(10, 2) // "0b1010"
 * conversionBase(10, 8) // "0o12"
 * conversionBase(10, 16) // "0xa"
 * conversionBase(0xa) // "10"
 */

export const conversionBase = (num, base) => {
	if (typeof base === "undefined" || Number.isNaN(Number(base))) {
		base = 10;
	}

	// If the base is not 10, the number is converted to a decimal number first
	const basePrefix =
		base === 16 ? "0x" : base === 8 ? "0o" : base === 2 ? "0b" : "";

	return basePrefix + num.toString(base);
};
