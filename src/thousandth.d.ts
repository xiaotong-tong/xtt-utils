/**
 * @description Converts a number to a string with thousand separators
 * @description-cn 将数字转换为带千分位分隔符的字符串
 * @param {number} num The number to convert
 * @param {number} [maximumFractionDigits=20] The maximum number of digits after the decimal point
 * @returns {string} Returns a string with thousand separators
 * @example
 * thousandth(1000000) // "1,000,000"
 * thousandth(1000000.1234) // "1,000,000.1234"
 */
declare function thousandth(num: number, maximumFractionDigits?: number): string;

declare module "xtt-utils" {
	export type { thousandth };
}

declare module "xtt-utils/thousandth" {
	export type { thousandth as default };
}

export type { thousandth, thousandth as default };
