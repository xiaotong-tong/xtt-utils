/**
 * @description Get the string right of the matching item in the string.
 * @description-cn 获取字符串中匹配项右侧的字符串
 * @param {string} str The string to search
 * @param {string | RegExp} searchTerm The string or regular expression to match the right of the string.
 * @param {number} [afterWhichTimes] The number of times to match after stopping, default is 1,
 * if the number is greater than the number of matches, the string to the right of the last match item is returned
 * @returns {string} 返回匹配项右侧的字符串
 * @example
 * getTermRight("abcde", "c") // "de"
 * getTermRight("abcde", "c", 2) // "de"
 * getTermRight("abcdec", "c", 2) // ""
 * getTermRight("abc1de2", /\d/) // "de2"
 * getTermRight("abc1de2", /\d/, 2) // ""
 * getTermRight("abc1de2", /\d/, 3) // ""
 */
declare function getTermRight(str: string, searchTerm: string | RegExp, afterWhichTimes?: number): string;

declare module "xtt-utils" {
	export type { getTermRight };
}

declare module "xtt-utils/getTermRight" {
	export type { getTermRight as default };
}

export default getTermRight;
