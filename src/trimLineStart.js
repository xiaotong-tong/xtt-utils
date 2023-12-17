/**
 * @description-en Delete the leading spaces of the line, keep the indent level, if it is multiple lines, then delete the minimum common space number of all lines
 * @description-cn 删除行前的空格，保留缩进层级，如果是多行，那么会删除所有行的最小共有空格数
 * @category String
 * @param {string} str
 * @param {object} options
 * @param {boolean} [options.removeFirstEmptyLine=false] Whether to delete the empty line of the first line. The default value is false
 * @param {boolean} [options.removeLastEmptyLine=false] Whether to delete the empty line of the last line. The default value is false
 * @returns {string} Returns the string after the operation
 * @example
 * trimLineStart("  123") // "123"
 * trimLineStart("  123\n  456") // "123\n456"
 * trimLineStart("  123\n    456") // "123\n  456"
 */
const trimLineStart = (str, options) => {
	const { removeFirstEmptyLine = false, removeLastEmptyLine = false } = options || {};

	if (removeFirstEmptyLine) {
		str = str.replace(/^\s*\n/, "");
	}
	if (removeLastEmptyLine) {
		str = str.replace(/\n\s*$/, "");
	}

	// The regular expression is written like this to avoid matching lines without content, otherwise it will match empty lines
	const leadingSpacesAtLine = str.match(/^(?!$)[ \t]*/gm);

	if (!leadingSpacesAtLine) {
		return str;
	}

	// If there is only one line, then use trimStart to return directly, saving performance
	if (leadingSpacesAtLine.length === 1) {
		return str.trimStart();
	}

	// If there are multiple lines, then traverse all lines, get the minimum number of common spaces, and then delete the spaces with the minimum number of spaces per line
	const minSapceNum = leadingSpacesAtLine.reduce((min, line) => {
		return Math.min(typeof min === "number" ? min : min.length, line.length);
	});
	return str.replace(new RegExp(`^[ \\t]{${minSapceNum}}`, "gm"), "");
};

export default trimLineStart;
