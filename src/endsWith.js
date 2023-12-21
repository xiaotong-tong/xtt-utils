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

const endsWith = (str, suffix, endPosition) => {
	if (typeof str !== "string") {
		return false;
	}

	if (typeof suffix === "string") {
		return str.endsWith(suffix, endPosition);
	}

	if (suffix instanceof RegExp) {
		const newStr = str.slice(0, endPosition);

		if (suffix.source.endsWith("$")) {
			return suffix.test(newStr);
		} else {
			return new RegExp(suffix.source + "$", suffix.flags).test(newStr);
		}
	}

	return false;
};

export {
	endsWith,
	endsWith as default
}
