/**
 * @description 返回一个字符串的 Unicode 编码点。
 * @param {string} str 需要转换的字符串
 * @param { { separator: string; base: 2 | 8 | 10 | 16; } } options
 * base {2 | 8 | 10 | 16} 转换的基数, 默认值为 16
 * separator {string} 分隔符, 默认值为 ""
 * @returns {string} Unicode 编码点
 * @example
 * charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
 * charToCodePoint("Hello World!", { separator: " "}) // "0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
 * charToCodePoint("Hello World!", { base: 2, separator: " " }) // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
 */

import { conversionBase } from "../number/conversionbase.js";

export interface Options {
	separator?: string;
	base?: 2 | 8 | 10 | 16;
}

export const charToCodePoint = (str: string, options?: Options): string => {
	if (!str) {
		return "";
	}

	if (!options) {
		options = {};
	}
	if (!options.separator) {
		options.separator = "";
	}
	if (!options.base) {
		options.base = 16;
	}

	return [...str]
		.map((char) =>
			conversionBase(char.codePointAt(0) as number, options?.base)
		)
		.join(options.separator);
};
