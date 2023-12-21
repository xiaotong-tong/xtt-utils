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

const startsWith = (str, prefix, startPosition) => {
	if (typeof str !== "string") {
		return false;
	}

	if (typeof prefix === "string") {
		return str.startsWith(prefix, startPosition);
	}

	if (prefix instanceof RegExp) {
		const newStr = str.slice(startPosition);

		if (prefix.source.startsWith("^")) {
			return prefix.test(newStr);
		} else {
			return new RegExp("^" + prefix.source, prefix.flags).test(newStr);
		}
	}

	return false;
};

export {
	startsWith,
	startsWith as default
}
