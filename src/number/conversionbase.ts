/**
 * @description 将数字转换为指定基数的字符串
 * @param {number} num 需要转换的数字
 * @param {2 | 8 | 10 | 16} base 转换的基数
 * @returns {string} 返回一个指定基数的字符串
 * @example
 * conversionBase(10, 2) // "0b1010"
 * conversionBase(10, 8) // "0o12"
 * conversionBase(10, 16) // "0xa"
 * conversionBase(0xa) // "10"
 */

export const conversionBase = (num: number, base?: 2 | 8 | 10 | 16): string => {
	if (base === 16) {
		return "0x" + num.toString(16);
	} else if (base === 8) {
		return "0o" + num.toString(8);
	} else if (base === 2) {
		return "0b" + num.toString(2);
	} else {
		return "" + num.toString(10);
	}
};
