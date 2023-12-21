/**
 * @description Get the string in a range of strings.
 * @description-cn 获取字符串中某个范围内的字符串。
 * @param {string} str the string to search.
 * @param {[string | RegExp, string | RegExp]} term the string or regular expression to match the range of the string.
 * @returns {string} Returns the string in a range of strings.
 * @example
 * getRangeByTerm("abcde", ["b", "d"]) // "c"
 * getRangeByTerm("abcde", ["d", "b"]) // "c"
 * getRangeByTerm("a1bcd2e", [/\d/, /\d/]) // "bcd"
 */
declare function getRangeByTerm(str: string, term: [string | RegExp, string | RegExp]): string;

declare module "xtt-utils" {
	export { getRangeByTerm };
}

declare module "xtt-utils/getRangeByTerm" {
	export { getRangeByTerm as default };
}

export { getRangeByTerm, getRangeByTerm as default };
