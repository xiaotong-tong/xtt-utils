/**
 * Determines whether a string ends with the string or regular expression specified.
 * @description-cn 判断字符串是否以指定的字符串或正则表达式匹配的字符串结尾。
 * @param {string} str - The string to search.
 * @param {string | RegExp} suffix - The string or regular expression to match the end of the string.
 * @param {number} [endPosition] - The index at which to end the search.
 * @returns {boolean} Returns true if the string ends with the string or regular expression specified, otherwise false.
 * @example
 * endsWith("abc", "c"); // true
 * endsWith("abc", "b"); // false
 * endsWith("abc", "b", 2); // true
 * endsWith("abc", /c$/); // true
 * endsWith("abc", /b$/); // false
 * endsWith("abc", /b$/, 2); // true
 */
declare function endsWith(str: string, suffix: string | RegExp, endPosition?: number): boolean;

declare module "xtt-utils" {
	export { endsWith };
}

declare module "xtt-utils/endsWith" {
	export { endsWith as default };
}

export { endsWith, endsWith as default };
