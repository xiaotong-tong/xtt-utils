/**
 * @description 获取字符串中某个范围内的字符串
 * @param {string} str 要处理的字符串
 * @param {[string | RegExp, string | RegExp]} term 要匹配的字符串或正则表达式
 * @returns {string} 返回匹配范围内的字符串
 * @example
 * getRangeByTerm("abcde", ["b", "d"]) // "c"
 * getRangeByTerm("abcde", ["d", "b"]) // "c"
 * getRangeByTerm("a1bcd2e", [/\d/, /\d/]) // "bcd"
 */

export const getRangeByTerm = (
	str: string,
	term: [string | RegExp, string | RegExp]
): string => {
	if (typeof str !== "string" || term === undefined) {
		return "";
	}

	const l = term[0];
	const r = term[1];
	const lGrep = typeof l === "string" ? l : l.source;
	const rGrep = typeof r === "string" ? r : r.source;

	let matchType = str.match(
		new RegExp(`${lGrep}((?:[\\s\\S](?<!${lGrep}))*?)${rGrep}`)
	);

	if (matchType) {
		return matchType[1];
	} else {
		matchType = str.match(
			new RegExp(`${rGrep}((?:[\\s\\S](?<!${rGrep}))*?)${lGrep}`)
		);
		return matchType ? matchType[1] : "";
	}
};
