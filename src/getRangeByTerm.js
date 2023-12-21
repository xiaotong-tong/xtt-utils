/**
 * @description Get the string in a range of strings.
 * @description-cn 获取字符串中某个范围内的字符串。
 * @param {string} str the string to search.
 * @param {[string | RegExp, string | RegExp]} term the string or regular expression to match the range of the string.
 * @returns {string} Returns the string in a range of strings.
 * @example
 * getRangeByTerm("abcde", ["b", "d"]) // "c"
 * getRangeByTerm("abcde", ["d", "b"]) // "c"
 * getRangeByTerm("a1bcd2e", [/\d/, /\d/]) // "bcd"
 */

const getRangeByTerm = (str, term) => {
	if (typeof str !== "string" || term === undefined) {
		return "";
	}

	const l = term[0];
	const r = term[1];
	const lGrep = typeof l === "string" ? l : l.source;
	const rGrep = typeof r === "string" ? r : r.source;

	let matchType = str.match(new RegExp(`${lGrep}((?:[\\s\\S](?<!${lGrep}))*?)${rGrep}`));

	if (matchType) {
		return matchType[1];
	} else {
		matchType = str.match(new RegExp(`${rGrep}((?:[\\s\\S](?<!${rGrep}))*?)${lGrep}`));
		return matchType ? matchType[1] : "";
	}
};

export {
	getRangeByTerm,
	getRangeByTerm as default
}
