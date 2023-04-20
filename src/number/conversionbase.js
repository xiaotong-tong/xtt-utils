/**
 * 将数字转换为指定进制的字符串
 * @param {number} num 需要转换的数字
 * @param {2 | 8 | 10 | 16} [base=10] 转换的进制
 * @returns {string} 返回指定进制的数字字符串, 除了十进制外, 其他进制会添加字符串前缀 0x, 0o, 0b
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
	// 根据进制选择前缀
	const basePrefix =
		base === 16 ? "0x" : base === 8 ? "0o" : base === 2 ? "0b" : "";
	return basePrefix + num.toString(base);
};
