/**
 * @description Determines whether a string starts with the string or regular expression specified.
 * @description-cn 判断字符串是否以指定的字符串或正则表达式匹配的字符串开头。
 * @param {string} str The string to search.
 * @param {string | RegExp} prefix The string or regular expression to match the beginning of the string.
 * @param {number} [startPosition] The index at which to begin search.
 * @returns {boolean} Returns true if the string starts with the string or regular expression specified, otherwise false.
 * @example
 * startsWith("abc", "a"); // true
 * startsWith("abc", "b"); // false
 * startsWith("abc", "b", 1); // true
 * startsWith("abc", /^a/); // true
 * startsWith("abc", /^b/); // false
 * startsWith("abc", /^b/, 1); // true
 */
declare function startsWith(str: string, prefix: string | RegExp, startPosition?: number): boolean;

declare module "xtt-utils" {
	export type { startsWith };
}

declare module "xtt-utils/startsWith" {
	export type { startsWith as default };
}

export type { startsWith, startsWith as default };
