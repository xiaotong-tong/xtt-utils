/**
 *  获取字符串中匹配项右侧的字符串
 * @param {string} str 要处理的字符串
 * @param {string | RegExp} searchTerm 要匹配的字符串或正则表达式
 * @param {number} [afterWhichTimes] 匹配到几次后停止，默认为1, 如果数字大于匹配到的次数，则返回最后一个匹配项右侧的字符串
 * @returns {string} 返回匹配项右侧的字符串
 * @example
 * getTermRight("abcde", "c") // "de"
 * getTermRight("abcde", "c", 2) // "de"
 * getTermRight("abcdec", "c", 2) // ""
 * getTermRight("abc1de2", /\d/) // "de2"
 * getTermRight("abc1de2", /\d/, 2) // ""
 * getTermRight("abc1de2", /\d/, 3) // ""
 */

export const getTermRight = (str, searchTerm, afterWhichTimes) => {
	if (typeof str !== "string" || searchTerm === undefined) {
		return "";
	}

	if (afterWhichTimes === undefined) {
		afterWhichTimes = 1;
	}

	if (afterWhichTimes === 0) {
		return str;
	}

	const searchGrep =
		typeof searchTerm === "string" ? searchTerm : searchTerm.source;

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
