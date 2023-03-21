/**
 * @description 将字符串转换为指定进制的 Unicode 编码
 * @param {string} str 需要转换的字符串
 * @param {2 | 8 | 10 | 16} base 转换的基数
 * @returns {string} 返回一个指定基数的字符串
 * @example
 * charToCodePoint("a") // "0x61"
 * charToCodePoint("Hello World!") // "0x480x650x6c0x6c0x6f0x200x570x6f0x720x6c0x640x21"
 */

import { conversionBase } from "../number/conversionbase.js";

export const charToCodePoint = (
	str: string,
	base: 2 | 8 | 10 | 16 = 16
): string => {
	if (!str) {
		return "";
	}

	return [...str]
		.map((char) => conversionBase(char.codePointAt(0) as number, base))
		.join("");
};
