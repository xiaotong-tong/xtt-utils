import { startsWith } from "./startswith.js";

/**
 * @description-en Get the string on the left of the matching item in the string
 * @description-cn 获取字符串中匹配项左侧的字符串
 * @category String
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

export const getTermLeft = (str, searchTerm, beforeWhichTimes) => {
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
