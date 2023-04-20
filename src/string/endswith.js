/**
 * 判断字符串是否以指定的字符串或正则表达式结尾
 * @param {string} str 要判断的字符串
 * @param {string | RegExp} suffix 指定的字符串或正则表达式
 * @param {number} [endPosition] 结束判断的位置
 * @returns {boolean} 如果字符串以指定的字符串或正则表达式结尾则返回 true，否则返回 false
 * @example
 * endsWith("abc", "c"); // true
 * endsWith("abc", "b"); // false
 * endsWith("abc", "b", 2); // true
 * endsWith("abc", /c$/); // true
 * endsWith("abc", /b$/); // false
 * endsWith("abc", /b$/, 2); // true
 */

export const endsWith = (str, suffix, endPosition) => {
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
