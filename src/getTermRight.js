/**
 * @description Get the string right of the matching item in the string.
 * @description-cn 获取字符串中匹配项右侧的字符串
 * @category String
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

const getTermRight = (str, searchTerm, afterWhichTimes) => {
	if (typeof str !== "string" || searchTerm === undefined) {
		return "";
	}

	if (afterWhichTimes === undefined) {
		afterWhichTimes = 1;
	}

	if (afterWhichTimes === 0) {
		return str;
	}

	const searchGrep = typeof searchTerm === "string" ? searchTerm : searchTerm.source;

	const grep = new RegExp(`(?<=(^|${searchGrep})).*?(${searchGrep}|$)`, "g");
	const result = str.match(grep);

	if (result === null) {
		return "";
	}

	if (afterWhichTimes >= result.length) {
		afterWhichTimes = result.length - 1;
	}
	if (afterWhichTimes <= -result.length) {
		afterWhichTimes = -result.length + 1;
	}

	return result.slice(afterWhichTimes).join("");
};

export default getTermRight;
