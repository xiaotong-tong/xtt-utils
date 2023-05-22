/**
 * 删除行前的空格，保留缩进层级，如果是多行，那么会删除所有行的最小共有空格数
 * @param {string} str
 * @returns {string} 返回删除行前空格 format 后的字符串
 * @example
 * trimLineStart("  123") // "123"
 * trimLineStart("  123\n  456") // "123\n456"
 * trimLineStart("  123\n    456") // "123\n  456"
 */
export const trimLineStart = (str) => {
	// 正则表达式这样写是为了不匹配没有内容的行，否则会匹配到空行
	const startSpaceAtLine = str.match(/^(?!$)[ \t]*/gm);

	if (!startSpaceAtLine) {
		return str;
	}

	// 如果只有一行，那么直接使用 trimStart 返回就行，节约性能
	if (startSpaceAtLine.length === 1) {
		return str.trimStart();
	}

	// 如果有多行，那么就遍历所有行，获取共同的最小的空格数，然后每行删除最小空格数的空格
	const minSapceNum = startSpaceAtLine.reduce((min, line) => {
		return Math.min(
			typeof min === "number" ? min : min.length,
			line.length
		);
	});
	return str.replace(new RegExp(`^[ \\t]{${minSapceNum}}`, "gm"), "");
};
