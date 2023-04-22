/**
 * 判断字符串是否以指定的字符串或正则表达式匹配的字符串开头
 * @param {string} str 要判断的字符串
 * @param {string | RegExp} prefix 指定的字符串或正则表达式
 * @param {number} [position] 开始判断的位置
 * @returns {boolean} 如果字符串以指定的字符串或正则表达式匹配的字符串开头则返回 true，否则返回 false
 * @example
 * startsWith("abc", "a"); // true
 * startsWith("abc", "b"); // false
 * startsWith("abc", "b", 1); // true
 * startsWith("abc", /^a/); // true
 * startsWith("abc", /^b/); // false
 * startsWith("abc", /^b/, 1); // true
 */

export const startsWith = (str, prefix, position) => {
	if (typeof str !== "string") {
		return false;
	}

	if (typeof prefix === "string") {
		return str.startsWith(prefix, position);
	}

	if (prefix instanceof RegExp) {
		const newStr = str.slice(position);

		if (prefix.source.startsWith("^")) {
			return prefix.test(newStr);
		} else {
			return new RegExp("^" + prefix.source, prefix.flags).test(newStr);
		}
	}

	return false;
};
