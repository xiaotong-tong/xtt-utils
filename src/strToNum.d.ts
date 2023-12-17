/**
 * @description string to number
 * @description-cn 将字符串转换为数字
 * @param {string} str
 * @returns {number}
 * @example
 * strToNum("123") // 123
 * strToNum("123.456") // 123.456
 * strToNum("123.456.789") // 123.456789
 */
declare function strToNum(str: string): number;

declare module "xtt-utils" {
	export type { strToNum };
}

declare module "xtt-utils/strToNum" {
	export type { strToNum as default };
}

export type { strToNum, strToNum as default };
