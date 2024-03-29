/**
 * @description Returns the Unicode code point of a string.
 * @description-cn 返回一个字符串的 Unicode 编码点。
 * @param {string} str The string to convert
 * @param {Object} [options] The options object
 * @param {string} [options.separator=""] The separator of the converted result, default value is ""
 * @param {2 | 8 | 10 | 16} [options.base=16] The base to which to convert the number. Must be one of 2, 8, 10, or 16. Defaults to 16.
 * @returns {string} Returns the Unicode code point of a string
 * @example
 * charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
 * charToCodePoint("Hello World!", { separator: " "}) // "0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
 * charToCodePoint("Hello World!", { base: 2, separator: " " }) // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
 */
declare function charToCodePoint(str: string, options?: { separator?: string; base?: 2 | 8 | 10 | 16 }): string;

declare module "xtt-utils" {
	export { charToCodePoint };
}

declare module "xtt-utils/charToCodePoint" {
	export { charToCodePoint as default };
}

export { charToCodePoint, charToCodePoint as default };
