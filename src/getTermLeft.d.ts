/**
 * @description-en Get the string on the left of the matching item in the string
 * @description-cn 获取字符串中匹配项左侧的字符串
 * @param {string} str the string to search
 * @param {string | RegExp} searchTerm the string or regular expression to match the string
 * @param {number} [beforeWhichTimes=1] the number of times to match before stopping, default is 1,
 * if the number is greater than the number of matches, the string to the left of the last match item is returned
 * @returns {string} Returns the string on the left of the matching item in the string
 * @example
 * getTermLeft("abcde", "c") // "ab"
 * getTermLeft("abcde", "c", 2) // "ab"
 * getTermLeft("abcdec", "c", 2) // "abcde"
 * getTermLeft("abc1de2", /\d/) // "abc"
 * getTermLeft("abc1de2", /\d/, 2) // "abc1de"
 * getTermLeft("abc1de2", /\d/, 3) // "abc1de"
 */
declare function getTermLeft(str: string, searchTerm: string | RegExp, beforeWhichTimes?: number): string;

declare module "xtt-utils" {
	export type { getTermLeft };
}

declare module "xtt-utils/getTermLeft" {
	export type { getTermLeft as default };
}

export type { getTermLeft, getTermLeft as default };
