/**
 * @description Converts a number to a string of the specified base
 * @description-cn 将数字转换为指定进制的字符串
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
declare function conversionBase(num: number, base?: 2 | 8 | 10 | 16, hasPrefix?: boolean): string;

declare module "xtt-utils" {
	export type { conversionBase };
}

declare module "xtt-utils/conversionBase" {
	export type { conversionBase as default };
}

export type { conversionBase, conversionBase as default };
