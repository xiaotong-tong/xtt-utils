/**
 * @description 获取字符串中匹配项左侧的字符串
 * @param {string} str 要处理的字符串
 * @param {string | RegExp} searchTerm 要匹配的字符串或正则表达式
 * @param {number} beforeWhichTimes 匹配到几次后停止，默认为1, 如果数字大于匹配到的次数，则返回最后一个匹配项左侧的字符串
 * @returns {string} 返回匹配项左侧的字符串
 * @example
 * getTermLeft("abcde", "c") // "ab"
 * getTermLeft("abcde", "c", 2) // "ab"
 * getTermLeft("abcdec", "c", 2) // "abcde"
 * getTermLeft("abc1de2", /\d/) // "abc"
 * getTermLeft("abc1de2", /\d/, 2) // "abc1de"
 * getTermLeft("abc1de2", /\d/, 3) // "abc1de"
 */

import { startsWith } from "./startswith.js";

export const getTermLeft = (
	str: string,
	searchTerm: string | RegExp,
	beforeWhichTimes?: number
): string => {
	if (typeof str !== "string" || searchTerm === undefined) {
		return "";
	}

	if (beforeWhichTimes === undefined) {
		beforeWhichTimes = 1;
	}

	if (beforeWhichTimes === 0) {
		return "";
	}

	if (startsWith(str, searchTerm)) {
		if (beforeWhichTimes <= 1) {
			return "";
		} else {
			beforeWhichTimes -= 1;
		}
	}

	const grep = new RegExp(
		`.+?(?=${
			typeof searchTerm === "string" ? searchTerm : searchTerm.source
		})`,
		"g"
	);
	const result = str.match(grep);

	if (result === null) {
		return "";
	}

	if (beforeWhichTimes <= -result.length) {
		beforeWhichTimes = result.length === 1 ? 1 : -result.length + 1;
	}

	return result.slice(0, beforeWhichTimes).join("");
};
